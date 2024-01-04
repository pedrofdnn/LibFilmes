import styled from "styled-components";

const ContainerGeral = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  button {
    margin: 9px 10px 25px;
    box-shadow: 3px 4px 0px 0px #899599;
    background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
    background-color: #ededed;
    border-radius: 15px;
    border: 1px solid #d6bcd6;
    display: inline-block;
    cursor: pointer;
    color: #0a0908;
    font-family: Arial;
    font-size: 17px;
    padding: 7px 25px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #e1e2ed;
    background-color: #1abc9c;
    transition: background-color 0.3s ease;
    &:hover {
      background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
      background-color: #bab1ba;
    }
    &:active {
      position: relative;
      top: 1px;
    }
  }

  img {
    display: flex;
    justify-content: center;
    width: 55%;
    border-radius: 8px;
    box-shadow: 5px 3px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 320px) and (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SpinnerLoad = styled.div`
  display: flex;
  padding: 13px;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  span {
    padding: 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { ContainerGeral, CardContainer, SpinnerLoad };
