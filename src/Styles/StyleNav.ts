import styled from "styled-components";

const NavContainer = styled.nav`
  nav {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 25px;
    background-color: #0a0908;
    font-size: 2rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
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

export default NavContainer;
