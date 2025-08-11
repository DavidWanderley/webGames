import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./GameInfo.css";

export function GameInfo() {
  const { appid } = useParams();
  const navigate = useNavigate();
  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetalhes = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/game-details?appid=${appid}`
        );
        const data = await response.json();
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
  }, [appid]);

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
        <strong>Link:</strong>{" "}
        <a href={detalhes?.website} target="_blank" rel="noopener noreferrer">
          {detalhes?.website}
        </a>
      </p>
      <button onClick={() => navigate("/meusjogos")}>
        Voltar
      </button>
    </div>
  );
}
