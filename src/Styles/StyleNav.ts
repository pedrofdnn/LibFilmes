import styled from "styled-components";

interface NavContainerProps {}

const NavContainer = styled.nav<NavContainerProps>`
  margin-bottom: 5px;
  background-color: #0a0908;
  font-size: 2rem;
  width: 100%;
  position: fixed;
  height: 80px;

  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

interface ULProps {}

const UL = styled.ul<ULProps>`
  display: none;
  margin: 0;
  list-style: none;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: #0a0908;
    padding-top: 5.5rem;
  }
`;

interface SearchbarProps {}

const Searchbar = styled.div<SearchbarProps>`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: 23.5%;

  input {
    border-radius: 9px 0 0 9px;
    padding: 7px 60px;
    text-align: center;
    font-size: 16px;
    border: none;
    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8.8px;
    border-radius: 0 5px 5px 0;
    border: none;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 1440px) {
    margin-right: 15%;
  }
  @media (max-width: 1024px) {
    margin-right: 32.5%;
  }
`;

interface StyledBurgerProps {
  open: boolean;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 25px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#b7b7b7" : "#2980b9")};
    border-radius: 10px;
  }
`;

export { NavContainer, Searchbar, UL, StyledBurger };
