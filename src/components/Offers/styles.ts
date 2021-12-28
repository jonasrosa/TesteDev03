import styled from "styled-components";
import offersImg from "../../assets/img/offers1.png";
import offers2Img from "../../assets/img/offers.png";

import { colors, fontFamily } from "../../styles/tokey";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-image: url(${offersImg});


`;
const Context= styled.div`
width: 100%;
height: 100%;
background:${colors.blue} ;
opacity: 0.98;
display: flex;
align-items:center;
justify-content:space-around;

`
const BoxText= styled.div`
width: 55%;
display: flex;
align-items:flex-start;
justify-content:space-around;
flex-direction: column;
margin-left:8% ;
div{ 
    margin-top: 50px;
}
li{
    display: flex;
    justify-content:flex-start;
    align-items:baseline;
    flex-wrap:nowrap;
  
    width: 100%;
    
    div{ 
        width: 10px;
        border: 1px solid ${colors.golden};
        margin-top: 20px;
        margin-left: 10PX;
      
    }

}



`
const  BoxImg= styled.div`
    width: 330px;
    height: 517px;
    background-image: url(${offers2Img});
    margin-right:8%;
`
export { Container,BoxText,Context, BoxImg };
