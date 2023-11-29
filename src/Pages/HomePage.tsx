import CardFavComponent from "../Components/CardFavComponent";
import { GiFilmStrip } from "react-icons/gi";
export default function HomePage() {
  return (
    <div>
      <h1>
        <GiFilmStrip />
        Lib Movies
      </h1>
      <CardFavComponent />
    </div>
  );
}
