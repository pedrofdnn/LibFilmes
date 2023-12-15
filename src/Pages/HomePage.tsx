import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";
import { getAllMovies } from "../API/API";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";
import ReactModal from "react-modal";
import ModalComponent from "../Components/ModalComponent";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function HomePage() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // carrega as paginas que vem da APi
  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const results = await getAllMovies(currentPage);
        setTopMovies((prevMovies) => {
          if (currentPage === 1) {
            return results;
          } else {
            return [...prevMovies, ...results];
          }
        });
      } catch (error) {
        console.error("Erro ao buscar filmes.", error);
      }
    };

    fetchTopMovies();
  }, [currentPage]);

  // captura o evento do final de pagina
  const handleScroll = () => {
    const isMobile = window.innerWidth <= 768; // Verifica se é um dispositivo móvel

    if (
      isMobile &&
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) <=
        320
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (
      !isMobile &&
      document.documentElement.offsetHeight ===
        window.innerHeight + document.documentElement.scrollTop
    ) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // controle de captura do scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // controla o modal
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
      <h1>
        <GiFilmStrip />
        Lib Movies
      </h1>

      <ContainerGeral>
        {topMovies.map((movie, index) => (
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
      </ContainerGeral>

      <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        {selectedMovie && (
          <ModalComponent
            movie={selectedMovie}
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
          />
        )}
      </ReactModal>
    </div>
  );
}
