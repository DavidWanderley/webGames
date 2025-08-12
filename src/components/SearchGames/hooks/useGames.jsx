import { useState, useEffect } from "react";

export function useGames(steamId) {
  const [games, setGames] = useState([]);
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!steamId) return;

    setLoading(true);

    fetch(`http://localhost:3001/games?steamid=${steamId}`)
      .then(res => res.json())
      .then(data => setGames(data?.response?.games || []))
      .catch(() => setGames([]));

    fetch(`http://localhost:3001/steam-nickname?steamid=${steamId}`)
      .then(res => res.json())
      .then(data => setNickname(data.success ? data.nickname : ""))
      .catch(() => setNickname(""))
      .finally(() => setLoading(false));
  }, [steamId]);

  return { games, nickname, loading };
}