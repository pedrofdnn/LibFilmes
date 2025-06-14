import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaSearchSolid } from "react-icons/lia";
import { NavContainer, Searchbar } from "../Styles/StyleNav";
import BugerComponent from "./BugerComponent";

export default function NavbarComponent() {
  const history = useNavigate();
  const [changeClick, setChangeClick] = useState("");

  // captura o enter e muda o estado.
  async function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (changeClick.trim() !== "") {
        history(`/search/${changeClick}`);
        setChangeClick("");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    }
  }

  // captura o click do botão.
  async function handleClick() {
    if (changeClick.trim() !== "") {
      history(`/search/${changeClick}`);
      setChangeClick("");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  // realiza a mudança de estado do input.
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChangeClick(e.target.value);
  }

  return (
    <NavContainer>
      <nav>
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

        <BugerComponent initialOpen={false} />
      </nav>
    </NavContainer>
  );
}
