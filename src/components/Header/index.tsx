import { HeaderBase, BoxLogo, Navigation } from "./styles";
import logo from "../../assets/logo.svg";

const navigation = [
  { id: 1, href: "empresa" },
  { id: 2, href: "ternos" },
  { id: 3, href: "camisaria" },
  { id: 4, href: "departamentos" },
  { id: 5, href: "contato" },
];

const Header = () => {
  return (
    <HeaderBase>
      <BoxLogo>
        <img src={logo} />
      </BoxLogo>
      <Navigation>
        <ul>
          {navigation.map((data) => {
            return (
              <li key={data.id}>
                <a href={"#" + data.href}>{data.href}</a>
              </li>
            );
          })}
        </ul>
      </Navigation>
    </HeaderBase>
  );
};
export { Header };
