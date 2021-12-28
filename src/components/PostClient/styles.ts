import styled from "styled-components";
import { colors, fontFamily } from "../../styles/tokey";
import postClientImg from "../../assets/img/postClient.png";
import postClient2Img from "../../assets/img/postClient2.png";
import postClient3Img from "../../assets/img/postClient3.png";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.blueLight};
  background-image: url(${postClient2Img});
`;
const BoxText = styled.div`
  margin: 0 70px;
  width: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const BoxImg = styled.div`
  width: 23%;
  height: 360px;
  background-image: url(${postClientImg});
  background-repeat: no-repeat;
  margin-left: 8%;

  div {
    float: right;
    width: 100%;
    height: 100%;
    background: rgba(2, 75, 104, 0.81);
    z-index: 10;
  }
`;
const BoxImg2= styled.div`
width: 300px;
height: 350px;
border: 8px solid #FFFFFF;
box-sizing: border-box;
transform: rotate(7.42deg);
background-image: url(${postClient3Img});
position: relative;
right: -120px;

`
export { Container, BoxImg,BoxImg2, BoxText };
