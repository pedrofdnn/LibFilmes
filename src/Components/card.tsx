import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../API/API";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
  // Adicione outras propriedades necessárias conforme a resposta da API
}

export default function Card() {
  const [movies, setMovies] = useState<Movie[]>([]);

  // função que carrega dados da api favoritos
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const topRatedMovies = await getTopRatedMovies();
        setMovies(topRatedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>

      {movies.map((movie, index) => (
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
  );
}
