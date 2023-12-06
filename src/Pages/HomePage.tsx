import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";
import { getAllMovies } from "../API/API";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";
import ReactModal from "react-modal";
import ModalContainer from "../Styles/StyleModal";
import ModalComponent from "../Components/ModalComponent";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function HomePage() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // troca os dados dos topMovies
  useEffect(() => {
    const fetchMovies = async () => {
      const results = await getAllMovies();
      setTopMovies(results);
    };
    fetchMovies();
  }, [topMovies]);

  // função de abertura e fechamento do Modal
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
        {topMovies.map((Movie, index) => (
          <CardContainer key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
              alt={Movie.title}
            />
            <button onClick={() => handleOpenModal(Movie)}>
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
