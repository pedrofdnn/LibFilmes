import { Link } from "react-router-dom";
import { UL } from "../Styles/StyleNav";

export default function MenuComponent() {
  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = "/";
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <UL>
      <li>
        <Link to="/" onClick={handleHomeClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact">Contato</Link>
      </li>
    </UL>
  );
}
