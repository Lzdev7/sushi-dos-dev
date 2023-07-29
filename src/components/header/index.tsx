import { HeaderContainer } from "./styles";

export function Header() {
  return(
    <>
      <HeaderContainer>
        
        <h1>Sushi<span>Dev</span></h1>

        <div className="headerlist">
          <ul>
            <li>Início</li>
            <li>Cardápio</li>
            <li>Sobre</li>
          </ul>
        </div>

        <button>Entrar</button>

      </HeaderContainer>
    </>
  )
}