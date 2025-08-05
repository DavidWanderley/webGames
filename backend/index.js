const express = require('express');
const axios = require('axios');
const cors = require('cors');
const steamKey = process.env.REACT_APP_API_KEY;

const app = express();
const PORT = 3001; 

app.use(cors());

app.get('/games', async (req, res) => {
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
    res.status(500).json({ error: 'Erro ao buscar jogos' });
  }
});

app.get('/game-details', async (req, res) => {
  const { appid } = req.query;
  console.log('appid recebido:', appid);

  if (!appid) {
    return res.status(400).json({ error: 'AppID é obrigatório' });
  }

  try {
    const response = await axios.get(`http://store.steampowered.com/api/appdetails`, {
      params: { appids: appid },
    });

    const data = response.data[appid];

    if (data && data.success) {
      res.json({ success: true, data: data.data });
    } else {
      res.status(404).json({ success: false, message: 'Jogo não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar detalhes do jogo' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});