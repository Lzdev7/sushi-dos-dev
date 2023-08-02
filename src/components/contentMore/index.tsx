import { ContainerMore } from "./styles";
import makimonos from "../../assets/makimono.jpg"
import ambiente from "../../assets/ambiente.jpg"
import { Footer } from "../footer";

export function ContentMore() {
  return (
    <>
      <ContainerMore>

        <div className="contentMore">

          <img src={makimonos} alt="" width={400} />

          <div className="contentMoreLegend">

          <h1>Temos os melhores maquimonos de angra dos reis</h1>

          <p>O restaurante se tornou conhecido por seus deliciosos maquimonos. 
            Os maquimonos são enrolados de peixe cru e arroz,
           e são um dos pratos mais populares da culinária japonesa. Os maquimonos do 
            site são feitos com os melhores 
            ingredientes frescos, e são preparados 
            com muito cuidado e atenção aos detalhes.</p>

            <button>Venha conhecer</button>

          </div>

        </div>

        
        <div className="contentMore">

          <div className="contentMoreLegend">

          <h1>Temos o melhor hambiente de angra dos reis</h1>

          <p>O restaurante se tornou conhecido por seus deliciosos maquimonos. 
            Os maquimonos são enrolados de peixe cru e arroz,
           e são um dos pratos mais populares da culinária japonesa. Os maquimonos do 
            site são feitos com os melhores 
            ingredientes frescos, e são preparados 
            com muito cuidado e atenção aos detalhes.</p>

            <button>Venha conhecer</button>

          </div>

          <img src={ambiente} alt="" width={400} />

        </div>

      </ContainerMore>

      <Footer/>
    </>
  )
}