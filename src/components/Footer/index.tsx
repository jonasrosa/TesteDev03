import {Container, Context} from './styles'
import logo2 from '../../assets/logo2.svg'
import { colors, fontFamily } from "../../styles/tokey";
import { Typography } from "../Typograph";
const Footer=()=>{
    return(
        <Container>
            <Context>
                <div>

                <img src={logo2}/>
               < Typography
              color={colors.gray3}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.poppins}
              margin="10px 0"
              fontSize="12px"
              fontStyle="normal"
              textTransform="none"
            >
             CNPJ:04.487.685/0001-01
            </Typography>
                </div>
                < Typography
              color={colors.gray3}
              align="left"
              fontWeight={300}
              font_Family={fontFamily.poppins}
              margin=" 40px 30px 0 0"
              fontSize="12px"
              fontStyle="normal"
              textTransform="none"
            >
          Copyright: 2021 © Renee Trajar - Todos os direitos reservados.
            </Typography>

            </Context>
        </Container>

    )
}
export{Footer}