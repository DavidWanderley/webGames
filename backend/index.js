require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const steamKey = process.env.STEAM_API_KEY;

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/games", async (req, res) => {
  const { steamid } = req.query;
  const apiKey = steamKey;

  try {
    const response = await axios.get(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/`,
      {
        params: {
          key: apiKey,
          steamid: steamid,
          include_appinfo: true,
          include_played_free_games: true,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar jogos" });
  }
});

app.get("/game-details", async (req, res) => {
  const { appid, steamid } = req.query;

  try {
    const storeRes = await fetch(
      `https://store.steampowered.com/api/appdetails?appids=${appid}&l=portuguese`
    );
    const storeData = await storeRes.json();
    const gameData = storeData[appid]?.data || {};

    const achRes = await fetch(
      `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appid}&key=${process.env.STEAM_API_KEY}&steamid=${steamid}&l=portuguese`
    );
    const achData = await achRes.json();

    let unlocked = [];
    if (achData.playerstats?.achievements) {
      unlocked = achData.playerstats.achievements
        .filter((a) => a.achieved === 1)
        .map((a) => ({
          apiname: a.apiname,
          unlocktime: a.unlocktime,
        }));
    }

    let playtime_forever = 0;
    if (steamid) {
      const gamesRes = await fetch(
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamid}&include_appinfo=false&include_played_free_games=true`
      );
      const gamesData = await gamesRes.json();
      const gameOwned = gamesData.response?.games?.find(
        (g) => g.appid == appid
      );
      if (gameOwned) playtime_forever = gameOwned.playtime_forever;
    }

    res.json({
      success: true,
      data: {
        ...gameData,
        unlockedAchievements: unlocked,
        playtime_forever,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erro ao buscar dados" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
