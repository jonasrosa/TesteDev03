import { Container, BoxImg,BoxImg2, BoxText } from "./styles";
import { Typography } from "../Typograph";
import { colors, fontFamily } from "../../styles/tokey";
import postClient3Img from "../../assets/img/postClient3.png";
const PostClient = () => {
  return (
    <Container>
      <BoxText>
        <Typography
          color={colors.gray3}
          align="center"
          fontWeight={300}
          font_Family={fontFamily.lato}
          margin="0"
          fontSize="24px"
          fontStyle="normal"
          textTransform="none"
        >
          “Faço roupas com o Renee Trajar há mais de duas décadas, o serviço é
          impecável em todos os detalhes, desde a costura ao caimento. O Renee
          tem uma equipe de mestre!”
        </Typography>
        <Typography
          color={colors.blue}
          align="center"
          fontWeight={400}
          font_Family={fontFamily.cormorant}
          margin="50px 0 0 0"
          fontSize="28px"
          fontStyle="italic"
          textTransform="none"
        >
          Nelson Garey
        </Typography>

  
          <Typography
            color={colors.golden}
            align="center"
            fontWeight={300}
            font_Family={fontFamily.lato}
            margin="0"
            fontSize="20px"
            fontStyle="italic"
            textTransform="none"
          >
            Advogado | Nelson Garey Advogados Associados
          </Typography>
      
      </BoxText>
      <BoxImg2>
     

      </BoxImg2>
      <BoxImg>
        <div/>
       
      </BoxImg>
    </Container>
  );
};
export { PostClient };
