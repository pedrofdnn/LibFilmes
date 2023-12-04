import { useEffect, useState } from "react";
import { GiFilmStrip } from "react-icons/gi";
import { getTopRatedMovies } from "../API/API";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function HomePage() {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  // armazena os dados dos topMovies
  useEffect(() => {
    const fetchMovies = async () => {
      const results = await getTopRatedMovies();
      setTopMovies(results);
    };
    fetchMovies();
  }, [topMovies]);

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
            <button>
              Mais Detalhes
            </button>
          </CardContainer>
        ))}
      </ContainerGeral>
    </div>
  );
}
