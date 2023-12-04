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
  padding:80px 30px 0 0;
  margin: 0 0 20px;
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
`;

export default GlobalStyle;
