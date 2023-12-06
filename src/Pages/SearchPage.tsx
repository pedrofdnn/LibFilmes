import { useLocation, useParams } from "react-router-dom";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";
import ReactModal from "react-modal";
import { useState } from "react";
import ModalComponent from "../Components/ModalComponent";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function SearchPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const location = useLocation();
  const params = useParams<{ query: string }>();
  const searchResults: Movie[] | undefined = location.state?.searchResults;

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
