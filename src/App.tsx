import { Outlet } from "react-router-dom";
import NavbarComponet from "./Components/NavbarComponet";
import HomePage from "./Pages/HomePage";
import SearchComponent from "./Components/searchComponent";



export default function App() {
  return (
    <div>
      <NavbarComponet />
      <SearchComponent searchTerm={""} />
      <Outlet />
    </div>
  );
}
