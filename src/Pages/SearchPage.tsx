import { useParams } from "react-router-dom";
import {
  CardContainer,
  ContainerGeral,
  SpinnerLoad,
} from "../Styles/StyleCards";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import ModalComponent from "../Components/ModalComponent";
import { getAllMoviesBySearchTerm } from "../API/API";
import { CircleLoader } from "react-spinners";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function SearchPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchResults, setSearchResults] = useState<Movie[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Recebe a informação da URL e o numero de paginas se não ele retorna vazio
  const params = useParams<{ query: string }>();
  const searchTerm = params.query ? params.query : "";

  // recebe os dados da api ea quantidade de paginas.
  const fetchSearchResults = async (searchTerm: string, page: number) => {
    try {
      const results = await getAllMoviesBySearchTerm(searchTerm, page);
      return results;
    } catch (error) {
      console.error("Erro ao buscar filmes.", error);
      return [];
    }
  };

  // realiza o checagem de mudanças das pesquisas.
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        setLoading(true);
        const results = await fetchSearchResults(searchTerm, currentPage);
        if (currentPage === 1) {
          setSearchResults(results);
        } else {
          setSearchResults((prevResults) => {
            if (prevResults && results) {
              return [...prevResults, ...results];
            } else if (results) {
              return results;
            } else {
              return prevResults; // Caso não haja novos resultados
            }
          });
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, currentPage]);

  // captura o scroll e acrescenta mais uma pagina quando
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // executa a função do scroll ativando e desativado o handlerScroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // funções do modal
  const handleOpenModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <h1>Resultado da Pesquisa</h1>
      <p>{params.query}</p>

      <SpinnerLoad>
        {loading && <CircleLoader color="rgba(212, 208, 212, 1)" loading />}
      </SpinnerLoad>

      <ContainerGeral>
        {searchResults?.map((movie, index) => (
          <CardContainer key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <button onClick={() => handleOpenModal(movie)}>
              Mais Detalhes
            </button>
          </CardContainer>
        ))}

        <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
          {selectedMovie && (
            <ModalComponent
              movie={selectedMovie}
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
            />
          )}
        </ReactModal>
      </ContainerGeral>
    </div>
  );
}
