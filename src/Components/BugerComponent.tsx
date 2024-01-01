import { useState } from "react";
import { StyledBurger } from "../Styles/StyleNav";
import MenuComponent from "./MenuComponent";

interface BurgerComponentProps {
  initialOpen: boolean;
}

export default function BurgerComponent({ initialOpen }: BurgerComponentProps) {
  const [open, setOpen] =  useState<boolean>(initialOpen);

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
