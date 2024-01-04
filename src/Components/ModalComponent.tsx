import ReactModal from "react-modal";
import { Movie } from "../API/API";
import "../Styles/ModalStyle.css";
import { format } from "date-fns";

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
  //converte o formato da data
  const formattedReleaseDate = movie.release_date
    ? format(new Date(movie.release_date), "dd-MM-yyyy")
    : "";

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
              <h2 className="titleMovie">{movie.title}</h2>
              <img
                className="poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                alt={movie.title}
              />
            </div>

            <div className="container-resume">
              <p className="date"> Lançamento: {formattedReleaseDate}</p>
              <span className="detail">{movie.overview}</span>
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
