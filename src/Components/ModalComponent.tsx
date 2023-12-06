import ReactModal from "react-modal";
import { Movie } from "../API/API";
import "../Styles/ModalStyle.css";

interface ModalComponentProps {
  movie: Movie;
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  movie,
  isOpen,
  onRequestClose,
}) => {
  return (
    <div>
      <ReactModal
        className="modal"
        overlayClassName="modal-overlay"
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        {isOpen && (
          <div className="container-geral">
            <div className="container-title">
              <h2>{movie.title}</h2>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>

            <div className="container-resume">
              <span>{movie.overview}</span>
              <p> Lançamento: {movie.release_date}</p>
            </div>
            <button className="closeButton" onClick={onRequestClose}>
              Fechar
            </button>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default ModalComponent;
