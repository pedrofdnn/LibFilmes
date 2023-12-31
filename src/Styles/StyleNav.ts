import styled from "styled-components";

interface NavContainerProps {
  open?: boolean; // Defina como opcional, se não for sempre necessária
}
const NavContainer = styled.div<NavContainerProps>`
  nav {
    margin-bottom: 5px;
    background-color: #0a0908;
    font-size: 2rem;
    width: 100%;
    position: fixed;
    height: 80px;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    justify-content: flex-end;
    align-items: center;
  }

  a {
    padding: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #b7b7b7;
    transition: color 0.3s ease;
    &:hover {
      color: #2980b9;
    }
  }

  @media (max-width: 425px) {
    a {
      font-size: 25px;
    }
  }
`;

interface ULProps {
  open?: boolean;
}
const UL = styled.ul<ULProps>`
  display: flex;
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
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    position: fixed;
    top: 0;
    right: 0;
    height: 26vh;
    width: 180px;
    border-bottom-left-radius: 55px;
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 425px) {
    eight: 20vh;
    width: 128px;
    padding-top: 3.5rem;
    li {
      padding: 18px 0;
    }
  }

  @media (max-width: 320px) {
    width: 120px;
    padding-top: 2.5rem;
    height: 37vh;
  }
`;

const Searchbar = styled.div`
  display: flex;
  position: fixed;
  margin-top: 37px;
  left: 50%;
  transform: translate(-50%, -50%);

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

  @media (min-width: 400px) and (max-width: 480px) {
    h1 {
      font-size: 15px;
    }
    input {
      padding: 7px 25px;
    }
  }
  @media (min-width: 321px) and (max-width: 399px) {
    h1 {
      font-size: 10px;
    }
    input {
      padding: 7px 10px;
    }
  }
  @media (max-width: 320px) {
    input {
      padding: 0;
      font-size: 14px;
    }
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
  display: none;
  z-index: 20;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#2980b9" : "#b7b7b7")};
    border-radius: 10px;

    transform-origin: -3.5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-flow: column nowrap;
  }
  @media (max-width: 320px) {
    width: 23px;
  }
`;

export { NavContainer, Searchbar, UL, StyledBurger };
