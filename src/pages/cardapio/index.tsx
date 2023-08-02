import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { CardsCardapio } from "./components/card";
import { ContainerCardapio, Linha, TitleCadarpio } from "./styles";


export function Cardapio() {
  return(
    <>
      <Header/>

      <TitleCadarpio>
        Nosso cardapio :
        <Linha></Linha>
      </TitleCadarpio>

      <ContainerCardapio>
        <CardsCardapio/>
        <CardsCardapio/>
        <CardsCardapio/>
      </ContainerCardapio>

      <Footer/>
    </>
  )
}