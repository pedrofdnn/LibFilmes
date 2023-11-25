import { useState } from "react";
import { getMoviesBySearchTerm } from "../API/API";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  // função que carrega os itens da pesquisa
  console.log(searchResults);
  const handleSearch = async () => {
    try {
      const movies: Movie[] = await getMoviesBySearchTerm(searchTerm); // Definindo o tipo para Movie[]
      setSearchResults(movies);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  // função de evento da tecla enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
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
      <button onClick={handleSearch}>Search</button>

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
