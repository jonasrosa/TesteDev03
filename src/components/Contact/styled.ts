import styled from "styled-components";
import { colors, fontFamily } from "../../styles/tokey";


const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

 
`;
const Decoration = styled.div`
  width: 53px;
  height: 1px;
  border: 1px solid ${colors.blue2};
  margin-left: 40px;
`;
const Context = styled.div`
width: 100%;
height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
form{ 
    width: 40%;
    button{ 
        margin-left: 10px;
    }
}

  `;
const BoxContact = styled.div`
  width:30% ;
  height: 50%;
  display: flex;
  align-items:flex-start;
  justify-content: space-around;
  flex-direction: column;
  text-align: left;
  margin-left: 20%;
`;
const TextField=styled.input`
    outline: none;
    border-radius: 3px;
    border: 1px solid ${colors.blue2};
    width: 100%;
    margin: 10Px;
    height: 50px;
    color: ${colors.gray3};
    padding: 10px;
    

`
const TextArea= styled.textarea`
 outline: none;
    border-radius: 3px;
    border: 1px solid ${colors.blue2};
    width: 100%;
    margin: 10Px;
    height: 100px;
    color: ${colors.gray3};
    padding: 10px;
    resize: none;
`
export{Context,BoxContact,Container,Decoration, TextField,TextArea}