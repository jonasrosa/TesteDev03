import styled from "styled-components";
import { colors, fontFamily } from "../../styles/tokey";
import companyImg from "../../assets/img/company.png";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
`;
const Context = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
const BoxText = styled.div<{
  justifyContent?: string;
}>`
  width: 60%;
  height: 450px;
  margin-left: 8%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  & div {
    width: 80%;
    display: flex;
    align-items: center;
  }
`;
const BoxAuthor= styled.div`
  width: 80%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const BoxImg = styled.div`
  width: 370px;
  height: 439px;
  background-image: url(${companyImg});
  margin-left: 8%;
`;
export { Container, Context, BoxImg, BoxText,BoxAuthor };
