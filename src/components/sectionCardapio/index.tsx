import { SectionCardapioContainer } from "./styles";
import sushi from "../../assets/ramen-delicioso-na-superficie-escura-PhotoRoom.png-PhotoRoom.png"

export function SectionCardapio() {
  return (
    <>
      <SectionCardapioContainer>

        <div className="title">
          <h1>Mais populares</h1>
        </div>

        <div className="containerCard">

          <div className="card">

            <img src={sushi} alt="" />

            <div className="contentCard">

              <h1>Lamen de Frango</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nobis, beatae?
              </h4>
              <h3>RS 30,00</h3>
            </div>

          </div>

          <div className="card">

            <img src={sushi} alt="" />

            <div className="contentCard">

              <h1>Lamen de Frango</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nobis, beatae?
              </h4>
              <h3>RS 30,00</h3>
            </div>

          </div>

          <div className="card">

            <img src={sushi} alt="" />

            <div className="contentCard">

              <h1>Lamen de Frango</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nobis, beatae?
              </h4>
              <h3>RS 30,00</h3>
            </div>

          </div>

          <div className="card">

            <img src={sushi} alt="" />

            <div className="contentCard">

              <h1>Lamen de Frango</h1>
              <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nobis, beatae?
              </h4>
              <h3>RS 30,00</h3>
            </div>

          </div>

        </div>

      </SectionCardapioContainer>
    </>
  )
}