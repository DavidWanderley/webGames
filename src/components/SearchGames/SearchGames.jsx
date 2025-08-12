import "./SearchGames.css";
import { useState } from "react";
import { useSteamId } from "../../contexts/SteamIdContext";
import { useGames } from "./hooks/useGames";
import { SearchBar } from "./SearchBar";
import { Filters } from "./Filters";
import { GamesGrid } from "./GamesGrid";
import { Pagination } from "./Pagination";

export function SearchGames() {
  const { steamId, setSteamId } = useSteamId();
  const [inputSteamId, setInputSteamId] = useState("");
  const [orderOption, setOrderOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(24);

  const { games, nickname, loading } = useGames(steamId);

  const ordenarJogos = (games) => {
    switch (orderOption) {
      case "A-Z": return [...games].sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A": return [...games].sort((b, a) => a.name.localeCompare(b.name));
      case "id": return [...games].sort((a, b) => a.appid - b.appid);
      default: return games;
    }
  };

  const orderedGames = ordenarJogos(games);
  const totalPages = Math.ceil(orderedGames.length / gamesPerPage);
  const jogosNaPaginaAtual = orderedGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  const handleBuscar = () => {
    setSteamId(inputSteamId.trim());
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className="title">
        {nickname ? `Biblioteca do usuário: ${nickname}` : "Veja a sua biblioteca da Steam"}
      </h1>

      <SearchBar
        value={inputSteamId}
        onChange={setInputSteamId}
        onSearch={handleBuscar}
      />

      {loading && <p>Carregando...</p>}

      {!loading && !steamId && (
        <>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quidem
            facilis qui deserunt. Tempore recusandae dolore, ipsa ad earum
            suscipit. Provident numquam quia ad laboriosam ut dolor cumque, non
            tempora.
          </p>
          <div className="games-grid">
            <div className="search-game-card">
              <img
                src="/Firegirlbw.png"
                alt="Arte de Firegirl"
                className="search-game-img"
              />
              <h3 className="game-title">Arte Madeline</h3>
            </div>
            <div className="search-game-card">
              <img
                src="/cat.png"
                alt="Arte de um gato"
                className="search-game-img"
              />
              <h3 className="game-title">Arte de um gato</h3>
            </div>
            <div className="search-game-card">
              <img
                src="/foxbw.png"
                alt="Arte de uma raposa"
                className="search-game-img"
              />
              <h3 className="game-title">Arte fox</h3>
            </div>
          </div>
        </>
      )}

      {!loading && steamId && (
        <>
          <Filters
            orderOption={orderOption}
            onOrderChange={setOrderOption}
            gamesPerPage={gamesPerPage}
            onGamesPerPageChange={setGamesPerPage}
            totalGames={games.length}
          />

          <GamesGrid games={jogosNaPaginaAtual} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </>
  );
}
