import React,{useRef,HTMLAttributes} from "react"
import { Typography } from "../Typograph";
import { Container, Context, Decoration,
   ContainerCarousel,BoxImg,WrapperCarousel, StatusCarosel } from "./styles";
import { colors, fontFamily } from "../../styles/tokey";
import vectorRight from "../../assets/img/Vector 4.svg"
import vectorLeft from "../../assets/img/Vector 3.svg"
import client1 from "../../assets/img/client1.png"


const Testimonial = () => {

  
   
  return (
    <Container>
      <Context>
        <div>
          <Typography
            color={colors.white2}
            align="center"
            fontWeight={500}
            font_Family={fontFamily.cormorant}
            margin="0"
            fontSize="38px"
            fontStyle="normal"
            textTransform="none"
          >
            Depoimentos
          </Typography>
          <Decoration />
        </div>
        <ContainerCarousel >
            <button><img src={vectorLeft} /></button>
          <ul>
            <li>
              <BoxImg backgroundImg={client1}>
                <div/>
              </BoxImg>

            <WrapperCarousel >
                <Typography
              color={colors.gray4}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.cormorant}
              margin="0 50px"
              fontSize="26px"
              fontStyle="italic"
              textTransform="none"
              >
         
“Há mais de 10 anos sou cliente da Renee Trajar.
 A qualidade, caimento e possibilidade de customização
  das roupas, aliados ao excelente atendimento e prazo de 
  entrega são fatores decisivos para mim.”
            </Typography>
            <Typography
              color={colors.golden}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.cormorant}
              margin="0"
              fontSize="20px"
              fontStyle="normal"
              textTransform="none"
              >
        Josimar Henrique da Silva
            </Typography>
            <Typography
              color={colors.gray}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="14px"
              fontStyle="normal"
              textTransform="none"
              >
        Diretor Presidente | Grupo Hebron
            </Typography>
            

                </WrapperCarousel>
              
              </li>
              
            
            
          </ul>
          <button ><img src={vectorRight}/></button>
        </ContainerCarousel>
        <div><StatusCarosel/></div>
      </Context>
    </Container>
  );
};
export { Testimonial };
