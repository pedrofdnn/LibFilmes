import styled from "styled-components";

const ContainerContact = styled.span`
  border: 1px solid #b7b7b7;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 25px 0 25px;
  background-color: rgba(207, 219, 213, 0.4);

  img {
    border: 1px solid #b7b7b7;
    border-radius: 230px;
    margin: 15px;
  }

  h1 {
    font-size: 50px;
    font-family: "Lobster", sans-serif;
    background: none;
  }
  p {
    margin: 10px 30px 10px 30px;
    font-size: 25px;
    text-align: justify;
    font-weight: bold;

    padding: 10px;
  }

  article {
    display: flex;
    margin: 25px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  a {
    outline: none;
  }
  svg {
    margin: 0 15px 0 15px;
    color: #242423;
    width: 50px;
    height: 50px;
    transition: color 0.3s ease;
    &:hover {
      color: #b7b7b7;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }
  @media (max-width: 425px) {
    img {
      width: 90%;
      height: 25%;
    }

    h1 {
      font-size: 40px;
      padding: 0;
    }
    p {
      font-size: 20px;
      margin: 10px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 33px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export default ContainerContact;
