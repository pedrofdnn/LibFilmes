import { Link } from "react-router-dom";
import NavContainer from "../Styles/StyleNav";

export default function NavbarComponent() {
  return (
    <NavContainer>
      <nav>
        <Link to="/">Home</Link>
        <div>
          <input type="text" />
          <button type="submit">P</button>
          <Link to="/contact">Contato</Link>
        </div>
      </nav>
    </NavContainer>
  );
}
