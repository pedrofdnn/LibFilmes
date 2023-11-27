import { Link } from "react-router-dom";
import NavContaine from "../Styles/StyleNav";

export default function NavbarComponet() {
  return (
    <NavContaine>
      <div>
        <nav>
          <Link to={`/`}> Home </Link>
          <Link to={`/contact`}>Contato</Link>
        </nav>
      </div>
    </NavContaine>
  );
}
