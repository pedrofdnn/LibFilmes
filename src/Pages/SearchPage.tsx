import { useLocation, useParams } from "react-router-dom";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function SearchPage() {
  const location = useLocation();
  const searchResults: Movie[] | undefined = location.state?.searchResults;

  return (
    <div>
      <h1>Resultado da Pesquisa</h1>
      <ul>
        {searchResults?.map((movie, index) => (
          <li key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
