import styled from "styled-components";

const NavContainer = styled.nav`
  nav {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 25px;
    /* position: fixed; */
    background-color: #b7b7b7;
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
  }
`;

export default NavContainer;
