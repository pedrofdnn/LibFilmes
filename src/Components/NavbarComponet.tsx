import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { getAllMoviesBySearchTerm } from "../API/API";
import { NavContainer, Searchbar } from "../Styles/StyleNav";

export default function NavbarComponent() {
  const history = useNavigate();
  const [changeClick, setChangeClick] = useState("");

  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      const results = await getAllMoviesBySearchTerm(changeClick);
      history(`/search/${changeClick}`, { state: { searchResults: results } });
      setChangeClick("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  async function handleClick() {
    const results = await getAllMoviesBySearchTerm(changeClick);
    history(`/search/${changeClick}`, { state: { searchResults: results } });
    setChangeClick("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChangeClick(e.target.value);
  }

  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = "/";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <NavContainer>
      <nav>
        <Link to="/" onClick={handleHomeClick}>Home</Link>
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
