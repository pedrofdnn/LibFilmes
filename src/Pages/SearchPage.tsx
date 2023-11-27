import { useParams } from "react-router-dom";
import SearchComponent from "../Components/searchComponent";
import NavbarComponet from "../Components/NavbarComponet";
import Searchbar from "../Styles/StyleSearch";

export default function SearchPage() {
  const { query } = useParams<{ query: string }>();

  return (
    <div>
      <NavbarComponet />
      <h1>Resultado da pesquisa.</h1>
      <Searchbar>
        <div>
          <SearchComponent searchTerm={query || ""} />
        </div>
      </Searchbar>
    </div>
  );
}
