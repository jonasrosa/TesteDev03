import styled from "styled-components";
import testimonialImg from "../../assets/img/testimonial.png";
import { colors, fontFamily } from "../../styles/tokey";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${testimonialImg});
`;
const Context = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.blue};
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Decoration = styled.div`
  width: 50px;
  border: 1px solid ${colors.blue2};
  margin-left: 80px;
`;
const ContainerCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 45vh;
  
   
  & button{
    background: none;
    border: none;
    color:${colors.golden}
  }
  ul{ 

    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: initial;
    overflow-x: auto;
    scroll-behavior: smooth;
    transition: 2ms;
    cursor:hand;
    
    ::-webkit-scrollbar {
      display: none;
    
    }
    li{ 
      width: 100%;
      height: 100%;
      display: inline-block;
    }
  }
  
}

`;
const BoxImg = styled.div<{
  backgroundImg?: string;
}>`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    width: 15%;
    height: 100%;
    background-image: url(${({ backgroundImg }) => backgroundImg});
    border-radius: 50%;
    border: 1px solid ${colors.golden};
  }
`;
const WrapperCarousel = styled.div`
  
      height: 60%;
      display: flex;
      width: 865px;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;   
  }
`;
const StatusCarosel= styled.div`
 width: 10px;
 height: 10px;
 border:1px solid ${colors.black};
 border-radius: 50%;
 background: transparent;


`
export {
  Container,
  Context,
  Decoration,
  ContainerCarousel,
  BoxImg,
  WrapperCarousel,
  StatusCarosel
};
