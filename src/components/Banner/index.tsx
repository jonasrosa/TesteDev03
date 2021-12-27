import { Typography } from "../Typograph";
import { Container, Context, BoxText,Box } from "./styles";
import { dataBanner } from "./dataBanner";
import { colors, fontFamily } from "../../styles/tokey";
import { Button } from "../Button";

const Banner = () => {
  return (
    <Container>
      <Context>
        {dataBanner.map((data) => {
          return (
            <BoxText justifyContent={data.justifyContent} key={data.id}>
              <Typography
                color={data.color}
                align={data.align}
                fontWeight={data.fontWeight}
                font_Family={data.font_Family}
                margin={data.margin}
                fontSize={data.fontSize}
                fontStyle={data.fontStyle}
                textTransform={data.textTransform}
              >
                {data.message}
              </Typography>
            </BoxText>
          );
        })}
       <Box>
           <Typography
            color={colors.white}
            fontSize="24px"
            fontWeight={300}
            font_Family={fontFamily.lato}

           >
               COMPRE HOJE,
                PAGUE EM ATÉ 3X COM 12% DE DESCONTO
                 E TENHA 10 MESES PARA CONFECCIONAR!

           </Typography>
           
       </Box>
       <Button margin="30px 0">
         FAÇA JÁ UM ORÇAMENTO
       </Button>
        
      </Context>
    </Container>
  );
};
export { Banner };
