import { createGlobalStyle } from "styled-components";
import img from "../Assets/BackGround.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto Condensed', sans-serif;
    background: url( ${img});
    background-size: cover; 
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
  }

  h1 {
    padding:80px 30px 20px 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:80px;
    font-family: 'Lobster', sans-serif;
    background: #9C1000;
    background: repeating-radial-gradient(ellipse farthest-corner at top left, #9C1000 0%, #249FAD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 5px;
  }

  p {
    display: flex;
    justify-content: center;
    margin:0 0 6px;
    font-size:30px;
    font-weight: bold;
    text-transform: uppercase;
  }

@media (min-width: 400px) and (max-width: 430px) {  
  h1{
    padding:100px 0 30px 0;
    font-size:60px;
    text-align: center;
  }
}

@media (min-width: 300px) and (max-width: 399px) {
    h1{
    padding:100px 0 30px 0;
    font-size: 32px;
  }
}

`;

export default GlobalStyle;
