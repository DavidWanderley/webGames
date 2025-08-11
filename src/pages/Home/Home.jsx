import "./Home.css";

export function Home() {
  return (
    <div className="home-container">
      <header className="header-home">
        <h1>Bem-vindo ao Joystick & Pixels!</h1>
      </header>

      <section className="featured-section">
        <img src="../../../public/tv-lgtvbw.png" alt="Foto de um tv" />
      </section>

      <section className="cta-section">
        <h2>Ultimas Publicações!</h2>
        {/* <button onClick={() => (window.location.href = "/publicacoes")}>
          Ver Publicações
        </button> */}
      </section>

      <section>
        <h2 className="cta-destaque">🔥 Destaque</h2>
      </section>

      <section className="categories">
        <div className="category-card">
          <h3>Novidades</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>
        <div className="category-card">
          <h3>Populares</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>
        </div>
        <div className="category-card">
          <h3>Categorias</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>

        <div className="category-card">
          <h3>Novidades</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>
        <div className="category-card">
          <h3>Populares</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>
        </div>
        <div className="category-card">
          <h3>Categorias</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>
        <div className="category-card">
          <h3>Categorias</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>
        <div className="category-card">
          <h3>Categorias</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab
            accusamus natus, pariatur dignissimos, fugiat, veritatis minus porro
            dolorem atque quod cum minima labore nesciunt voluptas quidem
            incidunt quae quas!.
          </p>{" "}
        </div>
      </section>
    </div>
  );
}
