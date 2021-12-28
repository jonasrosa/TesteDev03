import styled from "styled-components";
import { colors } from "../../styles/tokey";

const Container= styled.div`
 width:100% ;
 height:30vh ;
 display: flex;
justify-content:space-around;
 `
const Context = styled.div`
width: 100%;
height: 20vh;
display: flex;
justify-content:space-around;
align-items: flex-end;
`
const BoxText= styled.div` 
 width: 33.33%;
 height: 50%;
 display: flex; 
 flex-direction: column;
 align-items:center;
 justify-content:space-around;
 margin-bottom: 3px;
`
const Division= styled.div`
width: 1px;
height: 57px;
background-color: ${colors.gray7};

`
export{Container,Context,BoxText, Division}