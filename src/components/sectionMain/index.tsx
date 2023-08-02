import { SectionMainContainer } from "./styles";
import sushi from "../../assets/sushiHeader.png"
import sushiSection from "../../assets/sushi-main.jpg"

export function SectionMain() {
  return (
    <>
      <SectionMainContainer>

        <div className="container">

          <div className="descriptionSushi">

            <h1>Comida Oriental</h1>
            <p>A culinária japonesa é bastante equilibrada,
              sendo muito rica em peixes ômega 3,
              vegetais, massas e ingredientes frescos.
              <br/>
              <br/>
              A culinária japonesa é bastante equilibrada,
              sendo muito rica em peixes ômega 3,
              vegetais, massas e ingredientes frescos.
            </p>
            
            <button>Cardápio</button>

          </div>

          <img src={sushi} alt="" />

        </div>

        <div className="containerSection">

          <div className="imgSection">
            <img src={sushiSection} alt="" />
          </div>

          <div className="descriptionSushi">

            <h1>Feita de forma tradicional</h1>
            <p>A culinária japonesa é bastante equilibrada,
              sendo muito rica em peixes ômega 3,
              vegetais, massas e ingredientes frescos.
            </p>
            <h2>Ler mais sobre o modo de preparo</h2>

          </div>

        </div>

      </SectionMainContainer>
    </>
  )
}