import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <>
      <HeaderContainer>

        <NavLink to="/" >
          <h1>Sushi<span>Dev</span></h1>
        </NavLink>

        <div className="headerlist">
          <ul>
            <NavLink to="/">
              <li>Início</li>
            </NavLink>
            <NavLink to="/cardapio" >
              <li>Cardápio</li>
            </NavLink>
            <NavLink to="/sobre" >
              <li>Sobre</li>
            </NavLink>
            <li>Restaurantes</li>
          </ul>
        </div>

        <button>Entrar</button>

      </HeaderContainer>
    </>
  )
}