import { Link } from "react-router-dom";
import { UL } from "../Styles/StyleNav";

interface MenuComponentProps {
  open: boolean;
}

export default function MenuComponent({ open }: MenuComponentProps) {
  function handleHomeClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.location.href = "/";
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  return (
    <UL open={open}>
      <li>
        <Link to="/LibFilmes" onClick={handleHomeClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact">Contato</Link>
      </li>
    </UL>
  );
}
