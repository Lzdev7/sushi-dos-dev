import { ContainerFooder } from "./styles";

export function Footer() {
  return (
    <>

      <ContainerFooder>

        <h1>Sushi<span>Dev</span></h1>

        <div className="contact">

          <h1>Contatos</h1>

          <ul>
            <li>24 998842442</li>
            <li>luizhenrprof@gmail.com</li>
          </ul>

        </div>

        <div className="more">

          <h1>Sobre nós</h1>

          <ul>
            <li>Menu</li>
            <li>Valores</li>
            <li>Pagina Principal</li>
          </ul>
        </div>

        <div className="services">
          <h1>Serviços</h1>
        </div>

      </ContainerFooder>

    </>
  )
}