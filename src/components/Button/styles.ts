import styled from "styled-components";
import { fontFamily } from "../../styles/tokey/fontFamily";

interface ButtonBaseProps {
  border?: string;
  width?: string;
  background?: string;
  color?: string;
  margin?: string;
  hoverColor?: string;
  hoverBackground?: string;
  hoverBorder?: string;
}

const ButtonBase = styled.button<ButtonBaseProps>`
  border: ${({ border }) => border};
  border-radius: 2px;
  position: relative;
  width: ${({ width }) => width};
  height: 50px;
  background-color: ${({ background }) => background};
  font-size: 18px;
  font-weight: 300;
  font-family: ${fontFamily.lato};
  margin: ${({ margin }) => margin};
  color: ${({ color }) => color};
  padding: 10px;
  cursor: pointer;
  :hover {
    background-color: ${({ hoverBackground }) => hoverBackground};
    color: ${({ hoverColor }) => hoverColor};
    border: ${({ hoverBorder }) => hoverBorder};
  }
`;
export { ButtonBase };
