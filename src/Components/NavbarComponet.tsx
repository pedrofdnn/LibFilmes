import { Link } from "react-router-dom";
import { NavContainer, Searchbar } from "../Styles/StyleNav";

export default function NavbarComponent() {
  return (
    <NavContainer>
      <nav>
        <Link to="/">Home</Link>
        <Searchbar>
          <input type="text" />
          <button type="submit">P</button>
        </Searchbar>
        <Link to="/contact">Contato</Link>
      </nav>
    </NavContainer>
  );
}
