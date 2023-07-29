import { AvaliableComents, TitleAvaliable } from "./styles";
import fotoAvaliable from "../../assets/foto-avaliable.jpg"
import { Star } from "@phosphor-icons/react";

export function Avaliable() {
  return (
    <>
      <TitleAvaliable>
        Comentários
      </TitleAvaliable>

      <AvaliableComents>

        <div className="coments">

          <div className="contentComents">
            
            <img src={fotoAvaliable} alt="" />

            <h1>Ricardo França</h1>

            <p>O melhor restaurante da região simplismente maravilhoso
              valeu a pena cada centavo.
            </p>

            <div className="star">
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
            </div>

          </div>

        </div>

        <div className="coments">

        <div className="contentComents">
            
            <img src={fotoAvaliable} alt="" />

            <h1>Ricardo França</h1>

            <p>O melhor restaurante da região simplismente maravilhoso
              valeu a pena cada centavo.
            </p>

            <div className="star">
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
              <Star size={20} color="#FF0000"/>
            </div>

          </div>
       
        </div>


      </AvaliableComents>
    </>
  )
}