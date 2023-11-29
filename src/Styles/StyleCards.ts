import styled from "styled-components";

const ContainerGeral = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: stretch;

  button {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 9px 5px 20px;
    border-radius: 8px;
    border: none;
    background-color: #1abc9c;
    font-size: 20px;
    font-weight: bold;
    font-family: "Roboto Condensed", sans-serif;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #2980b9;
    }
  }

  img {
    display: flex;
    justify-content: center;
    width: 45%;
    border-radius: 8px;
  }
`;

export default ContainerGeral;
