import { colors, fontFamily } from "../../styles/tokey";
import { Button } from "../Button";
import { Typography } from "../Typograph";
import { Container, Context, BoxImg, BoxText,BoxAuthor } from "./styles";
const Company = () => {
  return (
    <Container>
      <Context>
        <BoxImg />

        <BoxText>
          <div>
            <Typography
              color={colors.blue}
              align="right"
              fontWeight={400}
              font_Family={fontFamily.cormorant}
              margin="0"
              fontSize="38px"
              fontStyle="normal"
              textTransform="none"
            >
              Renee Trajar
            </Typography>
          </div>
          
          <div>
            <Typography
              color={colors.gray2}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="19px"
              fontStyle="normal"
              textTransform="none"
            >
              Com mais de 35 anos de experiência em camisas, calças e ternos sob
              medida, possuímos profissionais experientes e altamente
              qualificados.
            </Typography>
          </div>
          <div>
            <Typography
              color={colors.gray2}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="19px"
              fontStyle="normal"
              textTransform="none"
            >
              Cada cliente tem seu molde exclusivamente desenvolvido para seu
              biotipo através das medidas tiradas pelo próprio Sr. Renee, no
              escritório ou
            </Typography>
          </div>
          <div>
            <Typography
              color={colors.blue2}
              align="right"
              fontWeight={400}
              font_Family={fontFamily.cormorant}
              margin="0"
              fontSize="24px"
              fontStyle="italic"
              textTransform="none"
            >
              “Nosso objetivo é superar a expectativa do cliente
              proporcionando-lhe satisfação ao usar nossos produtos, aliado a um
              relacionamento franco e honesto, valorizando o ser humano.”
            </Typography>
          </div>
          <BoxAuthor>
            <Typography
              color={colors.gray3}
              align="left"
              fontWeight={500}
              font_Family={fontFamily.cormorant}
              margin="0"
              fontSize="20px"
              fontStyle="italic"
              textTransform="none"
            >
              Renee Trajar
            </Typography>
          </BoxAuthor>
          <div>
            <Button hoverBackground={colors.blue3} hoverBorder={colors.blue3}>
              Agende uma visita!
            </Button>
          </div>
        </BoxText>
      </Context>
    </Container>
  );
};
export { Company };
