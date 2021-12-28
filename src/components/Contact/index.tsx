import { Typography } from "../Typograph"
import {Context,BoxContact,Container,Decoration, TextField, TextArea} from "./styled"
import { colors, fontFamily } from "../../styles/tokey";
import { Button } from "../Button";

const Contact=()=>{
    return(
        <Container>
            <div>
             <Typography
              color={colors.blue}
              align="right"
              fontWeight={400}
              font_Family={fontFamily.cormorant}
              margin="5px"
              fontSize="38px"
              fontStyle="normal"
              textTransform="none"
            >
             Contato
            </Typography>
            <Decoration/>

            </div>
            <Context>
                <BoxContact>
                <Typography
              color={colors.blue2}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="5px"
              fontSize="18px"
              fontStyle="normal"
              textTransform="uppercase"
            >
             Telefones
            </Typography>
            <Typography
              color={colors.gray3}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="5px"
              fontSize="16px"
              fontStyle="normal"
              textTransform="uppercase"
            >
             +55 (11) 3088-0757

            </Typography>
            <Typography
              color={colors.blue2}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="5px"
              fontSize="18px"
              fontStyle="normal"
              textTransform="uppercase"
            >
           E-mail

            </Typography>
            <Typography
              color={colors.gray3}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="5px"
              fontSize="16px"
              fontStyle="normal"
              textTransform="none"
            >
          renee@reneetrajar.com.br
            </Typography>
            <div>
            <Typography
              color={colors.blue2}
              align="right"
              fontWeight={300}
              font_Family={fontFamily.lato}
              margin="50px 0 5px 0"
              fontSize="18px"
              fontStyle="normal"
              textTransform="uppercase"
            >
           Atendimento Personalizado

            </Typography>

            <Button background={colors.white} border={`1px solid ${colors.blue}`}
             hoverBorder={`1px solid ${colors.golden}`} color={colors.blue} 
             hoverBackground="none" hoverColor={colors.golden}>
              Clique Aqui !
            </Button>
          </div>

                </BoxContact>
                <form>
                    <TextField type="text" placeholder="Nome"/>
                    <TextField type="text" placeholder="E-mail"/>
                    <TextArea rows={10}  placeholder="Mensagem"/>
                    <Button width="540px" hoverBackground={colors.blue3} hoverBorder={colors.blue3}>
                        Enviar Mensagem
                    </Button>
                </form>

            </Context>
        </Container>
    )
}
export{Contact}