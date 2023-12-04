import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavContainer, Searchbar } from "../Styles/StyleNav";
import { LiaSearchSolid } from "react-icons/lia";

// API
import { getMoviesBySearchTerm } from "../API/API";

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}

export default function NavbarComponent() {
  const history = useNavigate();
  const [searchTerm] = useState("");
  const [changeClick, setChangeClick] = useState("");

  // evento de armazenamentos de dados da busca
  useEffect(() => {
    const fetchSearchResults = async () => {
      const results = await getMoviesBySearchTerm(searchTerm);
      setSearchResults(results);
    };
    fetchSearchResults();
  }, [searchTerm]);

  // evento de checagem do enter e click
  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const results = await getMoviesBySearchTerm(changeClick);

      history(`/search/${changeClick}`, { state: { searchResults: results } });
    }
  }
  async function handleClick() {
    const result = await getMoviesBySearchTerm(changeClick);
    history(`/search/${changeClick}`, { state: { searchResults: result } });
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChangeClick(e.target.value);
  }

  return (
    <NavContainer>
      <nav>
        <Link to="/">Home</Link>
        <Searchbar>
          <input
            type="text"
            placeholder="Pesquise o Filme"
            value={changeClick}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />

          <button onClick={handleClick}>
            <LiaSearchSolid />
          </button>
        </Searchbar>
        <Link to="/contact">Contato</Link>
      </nav>
    </NavContainer>
  );
}
