import { useState } from "react";
import { Link } from "react-router-dom";
import { NavContainer, Searchbar } from "../Styles/StyleNav";
import { LiaSearchSolid } from "react-icons/lia";

// import getTopRatedMovies from "../API/API";

export default function NavbarComponent() {
  const [changeClick, setChangeClick] = useState("");

  // evento de checagem do enter e click
  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      alert(`O valor digitado foi: ${changeClick}`);
    }
  }
  function handleClick() {
    alert(`O valor digitado foi: ${changeClick}`);
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
