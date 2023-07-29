import { Avaliable } from "../../components/avaliable";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SectionCardapio } from "../../components/sectionCardapio";
import { SectionMain } from "../../components/sectionMain";

export function Home() {
  return(
    <>
      <Header/>
      <SectionMain/>
      <SectionCardapio/>
      <Avaliable/>
      <Footer/>
    </>
  )
}