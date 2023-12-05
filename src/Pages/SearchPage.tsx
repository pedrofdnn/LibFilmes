import { useLocation, useParams } from "react-router-dom";
import { CardContainer, ContainerGeral } from "../Styles/StyleCards";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function SearchPage() {
  const location = useLocation();
  const params = useParams<{ query: string }>();
  const searchResults: Movie[] | undefined = location.state?.searchResults;

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
            <button>Mais Informações</button>
          </CardContainer>
        ))}
      </ContainerGeral>
    </div>
  );
}
