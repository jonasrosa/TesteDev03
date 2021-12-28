import { Container, Context, BoxImg, Card, BoxButton } from "./styles";
import { colors, fontFamily } from "../../styles/tokey";
import productImg from "../../assets/img/product1.png"
import product2Img from "../../assets/img/product2.png"
import {Typography} from '../../components/Typograph'
import { Button } from "../Button";


const Product = () => {
  return (
    <Container>
      <Context>
        <BoxImg backgroundImg={productImg}></BoxImg>
        <Card>
        <Typography
              color={colors.blue}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.cormorant}
              margin="0 50px"
              fontSize="64px"
              fontStyle="normal"
              textTransform="uppercase"
            >
             camisaria
            </Typography>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={400}
              font_Family={fontFamily.lato}
              margin="0 50px"
              fontSize="16px"
              fontStyle="normal"
              textTransform="uppercase"
            >
           - confeccionadas artesanalmente
            </Typography>
            <div>
                <ul>
                    <li>
                        100% Algodão
                    </li>
                    <li>
                        Monograma
                    </li>
                    <li>
                        Slim
                    </li>
                </ul>
                <ul>
                    <li>
                        Nacionais e Importadas
                    </li>
                    <li>
                        Tradicinais e Esportivas
                    </li>
                    <li>
                        Casamentos
                    </li>
                </ul>
            </div>
            <Button width="330px" hoverBackground={colors.blue3} hoverBorder={colors.blue3}>
                Quero um Orçamento
            </Button>
        
         
        </Card>
      </Context>
      <Context>
      <Card>
        <Typography
              color={colors.blue}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.cormorant}
              margin="0 50px"
              fontSize="64px"
              fontStyle="normal"
              textTransform="uppercase"
            >
             camisaria
            </Typography>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={400}
              font_Family={fontFamily.lato}
              margin="0 50px"
              fontSize="16px"
              fontStyle="normal"
              textTransform="uppercase"
            >
           - confeccionadas artesanalmente
            </Typography>
            <div>
                <ul>
                    <li>
                    Fio Super 120 e 130 
                    </li>
                    <li>
                    Lã fria Australiana
                    </li>
                    <li>
                    Botões Importados
                    </li>
                </ul>
                <ul>
                    <li>
                    Ternos e Calças
                    </li>
                    <li>
                    Paletós e Smokings
                    </li>
                    <li>
                    Sociais e Esportivos
                    </li>
                </ul>
            </div>
          
            <Button width="330px">
                Quero um Orçamento
            </Button>
        </Card>
        <BoxImg backgroundImg={product2Img}></BoxImg>
      </Context>
    </Container>
  );
};
export { Product };
