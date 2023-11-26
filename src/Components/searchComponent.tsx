import { useEffect, useState } from "react";
import { getMoviesBySearchTerm } from "../API/API";
import { useNavigate, useParams } from "react-router-dom";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

interface SearchComponentProps {
  searchTerm: string;
}

export default function SearchComponent({ searchTerm: propSearchTerm }: SearchComponentProps) {
  const { query } = useParams(); // Obtendo o termo de pesquisa da URL
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(propSearchTerm || "");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // função que carrega os itens da pesquisa
  const handleSearch = async () => {
    try {
      const movies: Movie[] = await getMoviesBySearchTerm(searchTerm);
      setSearchResults(movies);
    } catch (error) {
      console.error("Erro na busca da API.", error);
    }
  };

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

  return (
    <div>
      {/* caixa de pesquisa e botão para pesquisa */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={() => navigate(`/search/${searchTerm}`)}>Search</button>

      {/* campo de informações dos filmes */}
      <div>
        {searchResults.map((movie, index) => (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
 