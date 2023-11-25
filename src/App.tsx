import { Outlet } from "react-router-dom";
import FooterComponet from "./Components/FooterComponet";
import NavbarComponet from "./Components/NavbarComponet";

export default function App() {
  return (
    <div>
      <NavbarComponet />
      <Outlet />
      <FooterComponet />
    </div>
  );
}
