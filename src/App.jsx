import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";
import { MeusJogos } from "./pages/MeusJogos/MeusJogos";
import { Publicacoes } from "./pages/Publicacoes/Publicacoes";
import { Sobre } from "./pages/Sobre/Sobre";
import { GameInfo } from "./components/GameInfo/GameInfo";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meusjogos" element={<MeusJogos />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/jogo/:appid" element={<GameInfo />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
