import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {

  return (
    <header className="header">
      <Link className="logo-header" to="/">
        <img
          className="logo"
          src="../../../public/controle.png"
          alt="Logo da Joystick & Pixels"
        />
        <span>Joystick & Pixels</span>
      </Link>

      <nav>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/meusjogos">
            <button>Meus Jogos</button>
          </Link>
          {/* <Link to="/Publicacoes">
            <button>Publicações</button>
          </Link> */}
          <Link to="/sobre">
            <button>Sobre</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
