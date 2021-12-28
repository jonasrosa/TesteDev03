import { Typography } from "../Typograph";
import { Container, BoxText, Context, BoxImg} from "./styles";
import { colors, fontFamily } from "../../styles/tokey";
import { Button } from "../Button";


const Offers = () => {
  return (
    <Container>
      
        <Context>
          <BoxText>
            <Typography
              color={colors.golden}
              align="left"
              fontWeight={400}
              font_Family={fontFamily.cormorant}
              margin="0"
              fontSize="53px"
              fontStyle="normal"
              textTransform="uppercase"
            >
              Condição Imperdível
            </Typography>
            <Typography
              color={colors.golden}
              align="left"
              fontWeight={400}
              font_Family={fontFamily.cormorant}
              margin="30px 0 0 0"
              fontSize="30px"
              fontStyle="italic"
              textTransform="none"
            >
              Compre hoje e garanta:
            </Typography>
            <ul>
                <li>
                <div/>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="10px  20px  "
              fontSize="22px"
              fontStyle="normal"
              textTransform="none"
            >
               12% de desconto e pagamento em até 3x sem juros;
            </Typography>
                </li>
                <li>
                    <div/>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="10px  20px  "
              fontSize="22px"
              fontStyle="normal"
              textTransform="none"
              >
                Até 10 meses para confeccionar sua roupa. Não se preocupe se suas medidas aumentaram ou diminuíram, estará sempre elegante;
            </Typography>
                </li>
                <li>
                <div/>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="10px  20px  "
              fontSize="22px"
              fontStyle="normal"
              textTransform="none"
            >
          Condição muito especial por tempo limitado;
            </Typography>
                </li>
                <li>
                    <div/>
            <Typography
              color={colors.gray4}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="10px  20px  "
              fontSize="22px"
              fontStyle="normal"
              textTransform="none"
            >
           Poder presentear alguém com uma roupa de alta costura, exclusiva.

            </Typography>
                </li>   
            </ul>
            <div>

            <Button 
            background={colors.golden} 
            width="330px"
             hoverBackground={colors.gray6}
             hoverBorder={colors.gray6}
             >
                Garanta essa condição especial!
            </Button>
            </div>
          </BoxText>
          <BoxImg/>
        </Context>
      
    </Container>
  );
};
export { Offers };
