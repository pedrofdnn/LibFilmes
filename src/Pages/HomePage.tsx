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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [page, setPage] = useState(1); // Página atual
  const [loading, setLoading] = useState(false); // Estado para indicar carregamento

  useEffect(() => {
    const loadMoreMovies = async () => {
      setLoading(true);
      try {
        const newMovies = await getAllMovies(page);
        setTopMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Erro ao buscar filmes.", error);
      } finally {
        setLoading(false);
      }
    };

    const handleScroll = () => {
      const distanceToBottom =
        document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop);

      if (distanceToBottom < 100 && distanceToBottom > 0 && !loading) {
        loadMoreMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, page]);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const results = await getAllMovies(page);
        setTopMovies(results);
      } catch (error) {
        console.error("Erro ao buscar filmes.", error);
      }
    };
    fetchInitialMovies();
  }, []);

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
