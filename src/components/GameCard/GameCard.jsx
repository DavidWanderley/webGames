import "./GameCard.css";
import { Link } from "react-router-dom";

export function GameCard({ game }) {
  const imageUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`;

  return (
    <>
      <Link
        to={`/jogo/${game.appid}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="game-card">
          <img src={imageUrl} alt={game.name} className="game-img" />
          <h3>{game.name}</h3>
        </div>
      </Link>
    </>
  );
}
