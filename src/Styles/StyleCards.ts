import styled from "styled-components";
import Slider from "react-slick";

const CardContainer = styled.div`
  div {
    width: 470px;
    position: relative;
    left: 24%;
  }

  button {
    padding: 10px 120px;
    margin: 9px;
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
`;

const CardStyled = styled.div`
  img {
    display: flex;
    width: 85%;
    border-radius: 8px;
  }
  div {
    display: flex;

    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
`;

const CustomSlider = styled(Slider)`
  div {
    display: flex;
    justify-content: center;
  }

  .slick-slide {
    margin-right: 200px;
  }

  .slick-prev,
  .slick-next {
    position: relative;
    right: -25px;
    color: red; 
  }
`;
export { CardContainer, CardStyled, CustomSlider };
