import styled from "styled-components";
import bannerImg from "../../assets/img/banner.png";
import { colors, fontFamily } from "../../styles/tokey";

const Container = styled.div`
  width: 100%;
  height: 93vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${bannerImg});
`;
const Context = styled.div`
  width: 40%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 8%;
  margin-top: 15%;
`;
const BoxText = styled.div<{
  justifyContent?: string;
}>`
  width: 80%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

const Box = styled.div`
  margin-top: 50px;
  width: 75%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export { Container, Context, BoxText, Box };
