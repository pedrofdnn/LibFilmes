import styled from "styled-components";
import img2 from "../Assets/BackGround.jpg";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  background-image: url(${img2});
  margin: 216px;
  padding: 25px;
  border-radius: 9px;
`;

export default ModalContainer;
