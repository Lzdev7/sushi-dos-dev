import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { More } from "./pages/more";
import { Cardapio } from "./pages/cardapio";
import { Restaurantes } from "./pages/restaurante/Restaurantes";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<More/>} />
      <Route path="/cardapio" element={<Cardapio/>} />
      <Route path="/restaurantes" element={<Restaurantes/>} />
    </Routes>
  )
}