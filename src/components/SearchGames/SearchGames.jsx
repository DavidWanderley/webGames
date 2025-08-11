import "./SearchGames.css";
import React, { useState, useEffect } from "react";
import { GameCard } from "../GameCard/GameCard";
import { useSteamId } from "../../contexts/SteamIdContext";

export function SearchGames() {
  const [games, setGames] = useState([]);
  const [pesquisou, setPesquisou] = useState(false);
  const { steamId, setSteamId } = useSteamId();
  const [orderOption, setOrderOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(24);

  const [inputId, setInputId] = useState("");


  useEffect(() => {
    if (steamId) {
      buscarPorId(steamId);
    }
  }, [steamId]);

  const buscarPorId = (id) => {
    if (!id.trim()) return;
    fetch(`http://localhost:3001/games?steamid=${id.trim()}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.response?.games) {
          setGames(data.response.games);
        } else {
          setGames([]);
        }
        setPesquisou(true);
      })
      .catch((err) => console.error("Erro ao buscar jogos:", err));
  };

  const ordenarJogos = (games) => {
    switch (orderOption) {
      case "A-Z":
        return [...games].sort((a, b) => a.name.localeCompare(b.name));
      case "Z-A":
        return [...games].sort((b, a) => a.name.localeCompare(b.name));
      case "id":
        return [...games].sort((a, b) => a.appid - b.appid);
      default:
        return games;
    }
  };

  const totalGames = ordenarJogos(games).length;
  const totalPages = Math.ceil(totalGames / gamesPerPage);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const jogosNaPaginaAtual = ordenarJogos(games).slice(
    indexOfFirstGame,
    indexOfLastGame
  );

  const renderPageButtons = () => {
    const pageButtons = [];
    const maxVisiblePages = 5;

    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageButtons.push(
        <button key={1} onClick={() => setCurrentPage(1)}>
          1
        </button>
      );
      if (startPage > 2) {
        pageButtons.push(<span key="start-ellipsis">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<span key="end-ellipsis">...</span>);
      }
      pageButtons.push(
        <button key={totalPages} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pageButtons;
  };

  const todosJogos = games.length;

  return (
    <>
      <h1 className="title">Veja a sua biblioteca da Steam</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Digite o seu SteamID"
          value={steamId}
          onChange={(e) => setSteamId(e.target.value)}
        />
        <button onClick={() => buscarPorId(steamId)}>Buscar</button>
      </div>

      {pesquisou && (
        <div className="top-controls">
          <p className="total-jogos">Total de jogos: {todosJogos}</p>

          <div className="filter-container">
            <label>Ordenar por:</label>
            <select
              className="order-select"
              value={orderOption}
              onChange={(e) => setOrderOption(e.target.value)}
            >
              <option value="default">Padrão</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="id">Por ID</option>
            </select>
          </div>

          <div className="filter-container">
            <label htmlFor="itemsPerPage">Itens por página: </label>
            <select
              className="order-select"
              id="itemsPerPage"
              value={gamesPerPage}
              onChange={(e) => {
                setGamesPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={24}>24</option>
              <option value={48}>48</option>
              <option value={72}>72</option>
              <option value={96}>96</option>
            </select>
          </div>
        </div>
      )}

      {!pesquisou && (
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
                src="../../../public/Firegirlbw.png"
                alt="Arte de Firegirl"
                className="search-game-img"
              />
              <h3 className="game-title">Arte Madeline</h3>
            </div>
            <div className="search-game-card">
              <img
                src="../../../public/cat.png"
                alt="Arte de um gato"
                className="search-game-img"
              />
              <h3 className="game-title">Arte de um gato</h3>
            </div>
            <div className="search-game-card">
              <img
                src="../../../public/foxbw.png"
                alt="Arte de uma raposa"
                className="search-game-img"
              />
              <h3 className="game-title">Arte fox</h3>
            </div>
          </div>
        </>
      )}

      {pesquisou && (
        <>
          <div className="games-grid">
            {games.length === 0 ? (
              <p className="loading">Nenhum jogo encontrado.</p>
            ) : (
              jogosNaPaginaAtual.map((game) => (
                <GameCard key={game.appid} game={game} />
              ))
            )}
          </div>
          <div className="pagination-controls">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            {renderPageButtons()}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Próximo
            </button>
          </div>
        </>
      )}
    </>
  );
}
