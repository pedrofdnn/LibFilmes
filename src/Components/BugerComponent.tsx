import { useState } from "react";
import { StyledBurger } from "../Styles/StyleNav";
import MenuComponent from "./MenuComponent";

export default function BurgerComponent() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuComponent open={open} />
    </div>
  );
}
