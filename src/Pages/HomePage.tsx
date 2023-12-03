import { useEffect } from "react";
import { GiFilmStrip } from "react-icons/gi";
import { getTopRatedMovies } from "../API/API";
import CardFavComponent from "../Components/CardFavComponent";

export default function HomePage() {
  // const [movies, setMovies] = useState<Movie[]>([]);

  //   // função que carrega dados da api favoritos
  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const topRatedMovies = await getTopRatedMovies();
  //       setMovies(topRatedMovies);
  //     } catch (error) {
  //       console.error("Erro na API:", error);
  //     }
  //   };

  return (
    <div>
      <h1>
        <GiFilmStrip />
        Lib Movies
      </h1>
    </div>
  );
}
