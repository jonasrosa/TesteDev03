import { HTMLAttributes } from "react";
import styled from "styled-components";

interface TypographyBaseProps extends HTMLAttributes<HTMLParagraphElement>{
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

const TypographyBase = styled.p<TypographyBaseProps>`

font-size:${({ fontSize }) => fontSize} ;
font-family:${({ font_Family }) => font_Family};
font-weight: ${({ fontWeight }) => fontWeight};
color:${({ color }) => color};
margin: ${({ margin }) => margin};
font-style:${({fontStyle }) => fontStyle};
text-transform: ${({textTransform})=> textTransform};
line-height: ${({lineHeight})=>lineHeight};

`;
export{TypographyBase}
