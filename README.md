# Joystick & Pixels

Um projeto de um blog de jogos criado com React + Vite (frontend) e Node.js + Express (backend), trazendo informações de jogos diretamente da API da Steam em tempo real.

## Funcionalidades

- Listagem dos jogos da Steam do usuário
- Visualização de detalhes dos jogos, conquistas e tempo jogado
- Busca por ID da conta Steam
- Página "Sobre" com informações do projeto

## Tecnologias Utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/) no frontend
- [TailwindCSS](https://tailwindcss.com/) para estilização
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) no backend
- [Steam Web API](https://developer.valvesoftware.com/wiki/Steam_Web_API) para dados dos jogos

## Estrutura do Projeto

```
/
├── backend/           # Backend Express
│   ├── index.js
│   └── .env           # Adicione sua STEAM_API_KEY aqui
├── public/            # Imagens e assets públicos
├── src/               # Frontend React
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   └── assets/
├── package.json       # Configuração do frontend
├── vite.config.js
└── README.md
```

## Como rodar o projeto

### 1. Backend

```sh
cd backend
# Crie o arquivo .env e adicione sua chave Steam:
# STEAM_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
node index.js
```

### 2. Frontend

```sh
pnpm install
pnpm dev
```

Acesse [http://localhost:5173](http://localhost:5173) para visualizar o frontend.

## Contato

- Email: davidgomeswanderley@gmail.com
- [LinkedIn](https://www.linkedin.com/in/dwanderley)
- [GitHub](https://github.com/DavidWanderley)

---

Projeto feito por David Wanderley.