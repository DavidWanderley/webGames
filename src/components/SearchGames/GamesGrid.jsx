import { GameCard } from "../GameCard/GameCard";

export function GamesGrid({ games }) {
  if (games.length === 0) {
    return <p className="loading">Nenhum jogo encontrado.</p>;
  }
  return (
    <div className="games-grid">
      {games.map((game) => (
        <GameCard key={game.appid} game={game} />
      ))}
    </div>
  );
}
