import { useState } from "react";
import { StyledBurger } from "../Styles/StyleNav";

export default function BurgerComponent() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}
