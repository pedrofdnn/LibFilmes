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

  useEffect(() => {
    const fetchInitialMovies = async () => {
      try {
        const results = await getAllMovies(2); // Carrega os filmes da página 1
        setTopMovies(results);
      } catch (error) {
        console.error("Erro ao buscar filmes.", error);
      }
    };

    fetchInitialMovies(); // Busca filmes iniciais ao montar o componente
  }, []);


  const handleOpenModal = (movie: Movie) => {
    if (!modalIsOpen) {
      setSelectedMovie(movie);
      setModalIsOpen(true);
    }
  };

  const handleCloseModal = () => {
    if (modalIsOpen) {
      setSelectedMovie(null);
      setModalIsOpen(false);
    }
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
{/* 
      <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        {selectedMovie && (
          <ModalComponent
            movie={selectedMovie}
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
          />
        )}
      </ReactModal> */}
    </div>
  );
}
