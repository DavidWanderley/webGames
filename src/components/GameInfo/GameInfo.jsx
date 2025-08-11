import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./GameInfo.css";
import { useSteamId } from "../../contexts/SteamIdContext";

export function GameInfo() {
  const { appid } = useParams();
  const navigate = useNavigate();
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { steamId } = useSteamId();

  useEffect(() => {
    const fetchDetalhes = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/game-details?appid=${appid}&steamid=${steamId}`
        );
        const data = await response.json();
        console.log("Detalhes do jogo:", data.data);

        if (response.ok && data.success) {
          setDetalhes(data.data);
        } else {
          setError(
            data.message || "Não foi possível carregar os detalhes do jogo."
          );
        }
      } catch (err) {
        setError("Erro ao carregar detalhes");
      } finally {
        setLoading(false);
      }
    };
    fetchDetalhes();
  }, [appid, steamId]);

  if (loading) return <p>Carregando detalhes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="game-info">
      <h1>{detalhes?.name}</h1>
      <img src={detalhes?.header_image} alt={detalhes?.name} />
      <p>{detalhes?.short_description}</p>
      <p>
        <strong>Desenvolvedor:</strong> {detalhes?.developers.join(", ")}
      </p>
      <p>
        <strong>Publicador:</strong> {detalhes?.publishers.join(", ")}
      </p>
      <p>
        <strong>Gêneros:</strong>{" "}
        {detalhes?.genres.map((genre) => genre.description).join(", ")}
      </p>
      <p>
        <strong>Ano de lançamento:</strong>{" "}
        {detalhes?.release_date?.date
          ? detalhes.release_date.date.split(" ").pop()
          : "Desconhecido"}
      </p>

      <p>
        <strong>Horas jogadas:</strong>{" "}
        {detalhes?.playtime_forever
          ? (detalhes.playtime_forever / 60).toFixed(1) + "h"
          : "Nenhuma"}
      </p>

      {detalhes?.unlockedAchievements?.length > 0 && (
        <div className="achievements-container">
          <h2>Conquistas Desbloqueadas</h2>
          <ul className="achievements-list">
            {detalhes.unlockedAchievements.slice(0, 12).map((ach, index) => (
              <li key={index}>
                <img src={ach.icon} alt={ach.apiname} />
                <div className="achievement-info">
                  <span className="achievement-name">{ach.apiname}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p>
        <strong>Link:</strong>{" "}
        <a href={detalhes?.website} target="_blank" rel="noopener noreferrer">
          {detalhes?.website}
        </a>
      </p>
      <button onClick={() => navigate("/meusjogos")}>Voltar</button>
    </div>
  );
}
