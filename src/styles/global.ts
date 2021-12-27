import {createGlobalStyle} from 'styled-components'
import { colors } from './tokey/colors'

export  const GlobalStyle= createGlobalStyle`
 *{
     margin:0;
     padding: 0;
     box-sizing: border-box;

 }

 html{
  
     @media(max-with:1080px){
         font-size: 93.75%;
     }
     @media(max-with:720px){
         font-size: 87.5%;
     }
 }
 body{
     background:${colors.white};
     -webkit-font-smoothing:antialiased;
 }


 button{
     cursor:pointer;

 }
 ul{
     list-style: none;
 }
 [disabled]{
     opacity:0.6;
     cursor:not-not-allowed;
 }
`