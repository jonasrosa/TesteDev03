import {Container,Context,BoxText, Division} from './styles'
import {Typography} from "../../components/Typograph"
import { colors, fontFamily } from "../../styles/tokey";
import qualityImg from "../../assets/img/quality.svg"
import quality2Img from "../../assets/img/quality2.svg"
import quality3Img from "../../assets/img/quality3.svg"




const QualityServe=()=>{
    return(
        <Container>
            <Context>

            <BoxText>
                <img src={qualityImg}/>
            <Typography
              color={colors.blue2}
              align="center"
              fontWeight={600}
              font_Family={fontFamily.cormorant}
              margin="7px"
              fontSize="24px"
            
              textTransform="uppercase"
            >
                Qualidade
            </Typography>
            <Typography
              color={colors.gray}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="14px"
              textTransform="none"
            >
               Camisaria e Alfaiataria 100% artesanal.
            </Typography>

            </BoxText>
       
            <Division/>
            <BoxText>
                <img src={quality3Img}/>
            <Typography
              color={colors.blue2}
              align="center"
              fontWeight={600}
              font_Family={fontFamily.cormorant}
              margin="7px"
              fontSize="24px"
              
              textTransform="uppercase"
              >
                Confiaça
            </Typography>
            <Typography
              color={colors.gray}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="14px"
              textTransform="none"
              >
               Atendimento personalizado no escritório ou residência.
            </Typography>

            </BoxText>
            <Division/>
            <BoxText>
                <img src={quality2Img}/>
            <Typography
              color={colors.blue2}
              align="center"
              fontWeight={600}
              font_Family={fontFamily.cormorant}
              margin="7px"
              fontSize="24px"
              
              textTransform="uppercase"
              >
                Experiência
            </Typography>
            <Typography
              color={colors.gray}
              align="center"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="0"
              fontSize="14px"
              textTransform="none"
              >
               Tradição e modernidade proporcionando elegância.
            </Typography>

            </BoxText>

                </Context>
        </Container>
    )
}
export{QualityServe}