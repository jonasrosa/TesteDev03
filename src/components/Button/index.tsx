import React, { ReactNode} from "react"
import { colors } from "../../styles/tokey"
import  {ButtonBase} from './styles'

interface ButtonProps{
    children: ReactNode
    border?:string;
    width?: string;
    background?: string;
    color?: string;
    margin?: string;
    hoverColor?: string
    hoverBackground?: string
    hoverBorder?:string

}

const Button=({
    children,
    border="none",
    width= "270px",
    background= colors.blue,
    color=colors.white,
    margin= "0",
    hoverColor= colors.white,
    hoverBackground=colors.black,
    hoverBorder="1px solid "+colors.golden

}:ButtonProps)=>{
    return(
        <ButtonBase 
        border={border}
        width={width}
        background={background}
        color={color}
        margin={margin}
        hoverColor={hoverColor}
        hoverBackground={hoverBackground}
        hoverBorder={hoverBorder}
        >
            {children}
        </ButtonBase>
    )
}
export{Button}