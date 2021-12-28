import styled from "styled-components";
import{colors, fontFamily} from "../../styles/tokey";

const HeaderBase = styled.header`
  width: 100%;
  height: 12vh;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
`;
const BoxLogo = styled.div`
  display: flex;
  width: 10%;
  margin-left: 20px;
`;
const Navigation = styled.nav`
  width: 70%;
  display: flex;
  justify-content:flex-end;
  ul{
      width: 70%;
      display: flex;
      align-items:center;
      justify-content:space-around;
      margin-right:10% ;

      li{ 
          a{
              text-decoration: none;
              font-size:16px;
              fontWeight:300;
              font-family:${fontFamily};
              color:${colors.gray};
              text-transform: uppercase;
              :hover{
                  color: ${colors.blue2};
              }
          }
      }
  }
  
`;

export { HeaderBase, BoxLogo, Navigation };
