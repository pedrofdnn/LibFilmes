import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";
import { getTopRatedMovies } from "../API/API";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";
import ReactModal from "react-modal";
import ModalContainer from "../Styles/StyleModal";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  release_date?: number;
}

export default function HomePage() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);
  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // armazena os dados dos topMovies
  useEffect(() => {
    const fetchMovies = async () => {
      const results = await getTopRatedMovies();
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

            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              
              style={{
                overlay: {
                  backgroundColor: "papayawhip",
                },
                content: {
                  color: "lightsteelblue",
                },
              }}
            >
              {selectedMovie && (
                <div>
                  <h2>{selectedMovie.title}</h2>
                  <h3>Data de Lançamento: {selectedMovie.release_date}</h3>
                  <span>{selectedMovie.overview}</span>
                </div>
              )}
            </ReactModal>
          </CardContainer>
        ))}
      </ContainerGeral>
    </div>
  );
}
