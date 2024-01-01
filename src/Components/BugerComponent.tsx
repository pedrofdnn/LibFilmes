import { useState } from "react";
import { StyledBurger } from "../Styles/StyleNav";
import MenuComponent from "./MenuComponent";

export default function BurgerComponent() {
  const [open, setOpen] = useState<boolean>(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <StyledBurger open={open} onClick={handleBurgerClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MenuComponent open={open} />
    </div>
  );
}
