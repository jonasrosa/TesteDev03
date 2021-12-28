import styled from "styled-components";
import { colors, fontFamily } from "../../styles/tokey";

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

`;
const Context = styled.div`
width: 80%;
height: 50%;

margin-top: 20px;
display: flex;
align-items:center;
justify-content:space-around;

`
const BoxImg = styled.div<{
  backgroundImg?: string;
}>`
  width: 450px;
  height: 364px;

  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-repeat: no-repeat;
  z-index: 10;
  :hover {
    -webkit-filter: grayscale(50%)
  
  }
`;
const Card = styled.div`
width: 65%;

height: 290px;
border: 1px solid ${colors.gray4};
display: flex;
flex-direction: column;
align-items:flex-start;
justify-content:space-around;
padding: 25px;

z-index: -1;
div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:space-around;
    margin: 20px ;
    ul{ 
        list-style: disc;
        color: ${colors.gray7};
        li{
            font-size: 24px;
            font-weight: normal;
            font-family: ${fontFamily.cormorant};
            font-style: italic;
        }
    }
}
`;
const BoxButton= styled.div`
width: 100%;
display: flex;
justify-content: flex-start;

`
export { Container, Context, BoxImg, Card,BoxButton };
