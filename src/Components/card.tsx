import { useEffect, useState } from "react";
import { getMovieData } from "../API/API";

interface MovieData {
  title: string;
  overview: string;
  poster_path: string;
}

// função de lista aleatória
function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função principal
export default function Card() {
  const [moviesList, setMoviesList] = useState<MovieData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = [];
        for (let i = 0; i < 10; i++) {
          const movieData = await getMovieData(getRandomNumber(10, 300));
          moviesData.push(movieData);
        }
        setMoviesList(moviesData);
      } catch (error) {
        console.error("Error fetching movies data:", error);
      }
    };

    fetchMovies();
  }, []);

  // Lógica para exibir os filmes da página atual
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  // Função para alterar a página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* função de exibição dos cards */}
      {currentMovies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}

      {/* Renderizar os botões de página  */}
      <div>
        {Array.from(
          { length: Math.ceil(moviesList.length / moviesPerPage) },
          (_, i) => (
            <button key={i + 1} onClick={() => paginate(i + 1)}>
              {i + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
