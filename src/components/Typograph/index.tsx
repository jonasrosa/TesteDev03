import React,{ ReactNode} from 'react'
import {TypographyBase} from './styles'
import {colors, fontFamily} from '../../styles/tokey'

interface TypographyProps{
    children: ReactNode;
    color?: string;
    align?: string;
    fontWeight?: number;
    font_Family?: string;
    margin?: string;
    fontSize?: string;
    fontStyle?: string;
    textTransform?:string;
  lineHeight?:string;

}


const Typography=({
    children,
    color= colors.black,
    align='center',
    fontWeight=400,
    font_Family=fontFamily.lato,
    margin="0",
    fontSize="14",
    fontStyle="normal",
    textTransform="none",
    lineHeight= "none"


}: TypographyProps)=>{
    return(
        <TypographyBase
        color= {color}
        align={align}
        fontWeight={fontWeight}
        font_Family={font_Family}
        margin={margin}
        fontSize={fontSize}
        fontStyle={fontStyle}
        textTransform={textTransform}
        lineHeight={lineHeight}
        
        >
            {children}
        </TypographyBase>
    )
}
export{Typography}