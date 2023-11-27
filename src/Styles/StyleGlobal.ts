import { createGlobalStyle } from "styled-components";
import img2 from "../Assets/Back.png";

const GlobalStyle = createGlobalStyle`

body {
  font-family: 'Roboto Condensed', sans-serif;
  color: #0a0908;  
  background-color: #d3d3d3;
  background: url( ${img2}) fixed;
  background-size: cover;
  margin: 0;
  padding: 0;

}

h1 {
  display: flex;
  justify-content: center;
  font-size:4rem;
  align-items: center;
  font-weight: bold;
  margin-top: 60px;
}
`;

export default GlobalStyle;
