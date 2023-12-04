import styled from "styled-components";

const NavContainer = styled.nav`
  nav {
    margin-bottom: 5px;
    background-color: #0a0908;
    font-size: 2rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
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
`;

const Searchbar = styled.div`
  display: flex;
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
`;

export { NavContainer, Searchbar };
