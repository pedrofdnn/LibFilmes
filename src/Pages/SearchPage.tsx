import { useParams } from "react-router-dom";
import SearchComponent from "../Components/searchComponent";
import NavbarComponet from "../Components/NavbarComponet";

export default function SearchPage() {
  const { query } = useParams<{ query: string }>();

  return (
    <div>
      <NavbarComponet />
      <h1>Resultado da pesquisa.</h1>

      <SearchComponent searchTerm={query || ""} />
    </div>
  );
}
