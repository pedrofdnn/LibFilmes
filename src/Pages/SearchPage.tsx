import { useLocation, useParams } from "react-router-dom";
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
  const [searchResults, setSearchResults] = useState<Movie[] | undefined>();
  const [loading, setLoading] = useState(false);

  const params = useParams<{ query: string }>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Ativar o spinner quando iniciar o carregamento

      try {
        const searchTerm = params.query; // Definir o termo de pesquisa a partir dos parâmetros
        const results = await getAllMoviesBySearchTerm(searchTerm);

        setTimeout(() => {
          setSearchResults(results);
          setLoading(false); // Marcar como carregado após o atraso
        }, 150);
      } catch (error) {
        console.error("Erro ao buscar filmes.", error);
        setLoading(false); // Marcar como carregado em caso de erro
      }
    };

    fetchData();
  }, [params.query]);

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
