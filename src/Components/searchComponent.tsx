import { useEffect, useState } from "react";
import { getMoviesBySearchTerm } from "../API/API";
import { useNavigate, useParams } from "react-router-dom";
import ReactModal from "react-modal";
import Searchbar from "../Styles/StyleSearch";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

interface SearchComponentProps {
  searchTerm: string;
}

export default function SearchComponent({
  searchTerm: propSearchTerm,
}: SearchComponentProps) {
  // Obtendo o termo de pesquisa da URL
  const { query } = useParams();

  // navegação do resultado da pesquisa
  const navigate = useNavigate();

  // lista de busca
  const [searchTerm, setSearchTerm] = useState(propSearchTerm || "");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // função que carrega os itens da pesquisa
  const handleSearch = async () => {
    try {
      const movies: Movie[] = await getMoviesBySearchTerm(searchTerm);
      setSearchResults(movies);
    } catch (error) {
      console.error("Erro na busca da API.", error);
    }
  };

  // realiza a troca de pagina com os dados baixados
  useEffect(() => {
    if (query) {
      setSearchTerm(query);
      handleSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  // função de evento da tecla enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
    }
  };

  // função para funcionamento do modal
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
      <Searchbar>
        <div>
          {/* caixa de pesquisa e botão para pesquisa */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button onClick={() => navigate(`/search/${searchTerm}`)}>
            Search
          </button>
        </div>
      </Searchbar>

      {/* campo das informações dos filmes */}
      <div>
        {searchResults.map((movie, index) => (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />

            <button onClick={() => handleOpenModal(movie)}>Abrir Modal</button>

            <ReactModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
              {selectedMovie && (
                <div>
                  <h2>{selectedMovie.title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                  />
                  <p>{selectedMovie.overview}</p>
                </div>
              )}
              <button onClick={handleCloseModal}>Fechar Modal</button>
            </ReactModal>
          </div>
        ))}
      </div>
    </div>
  );
}
