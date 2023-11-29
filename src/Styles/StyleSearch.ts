import styled from "styled-components";

const Searchbar = styled.div`
  div {
    position: relative;
    display: flex;
    left: auto;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: space-between;
    justify-content: center;
    align-items: center;

    bottom: 80px;
    width: 45px;
    left: 50%;
  }

  input {
    border-radius: 9px 0 0 9px;
    padding: 7px 60px;
    text-align: center;
    font-size: 16px;
    bottom: 10px;
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

export default Searchbar;
