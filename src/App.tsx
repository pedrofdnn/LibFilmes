import { Outlet } from "react-router-dom";
import NavbarComponet from "./Components/NavbarComponet";

export default function App() {
  return (
    <div>      
        <NavbarComponet />
        
        <Outlet />      
    </div>
  );
}
