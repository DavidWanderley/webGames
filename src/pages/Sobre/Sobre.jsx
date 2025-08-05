import React from "react";
import "./Sobre.css"; 

export function Sobre() {
  return (
    <div className="about-container">
      <h1>Sobre</h1>

      <section>
        <h2>Nosso Propósito</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo animi
          tempore asperiores suscipit corrupti ipsum consectetur sint nostrum.
          Aliquam, quasi autem. Qui architecto tenetur error quia magnam quae,
          sapiente officiis.
        </p>
      </section>

      <section>
        <h2>Quem Somos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo animi
          tempore asperiores suscipit corrupti ipsum consectetur sint nostrum.
          Aliquam, quasi autem. Qui architecto tenetur error quia magnam quae,
          sapiente officiis.
        </p>
      </section>

      <section>
        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li>React.js para o frontend</li>
          <li>Node.js e Express para o backend</li>
          <li>API da Steam para dados de jogos</li>
        </ul>
      </section>

      <section>
        <h2>Contato</h2>
        <p>Email: davidgomeswanderley@gmail.com</p>
        <p>
          Redes Sociais:
          <a
            href="https://www.linkedin.com/in/dwanderley"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "15px" }}
          >
            <i className="fab fa-linkedin fa-2x social-links-about"></i>
          </a>
          <a
            href="https://github.com/DavidWanderley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x social-links-about"></i>
          </a>
        </p>
      </section>
    </div>
  );
}
