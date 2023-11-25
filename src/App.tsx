import { Outlet } from "react-router-dom";
import FooterComponet from "./Components/FooterComponet";
import NavbarComponet from "./Components/NavbarComponet";
import SearchComponent from "./Components/searchComponent";

export default function App() {
  return (
    <div>
      <NavbarComponet />
      <SearchComponent />
      <Outlet />
      <FooterComponet />
    </div>
  );
}
