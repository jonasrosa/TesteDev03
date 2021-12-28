import styled from "styled-components";
import { colors, fontFamily } from "../../styles/tokey";

const Container = styled.div`
width: 100%;
height: 25vh;
border-top: 1px solid ${colors.golden};
display: flex;
align-items:center;
justify-content:space-between;

`
const Context= styled.div`
width: 80%;
height:80%;
display: flex;
align-items:center;
justify-content:space-between;
div{ 
    display: flex;
    width: auto;
    height: 100%;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 100px;
}

`
export{Container, Context}