import React, { createContext, useState, useContext } from "react";

const SteamIdContext = createContext();

export function SteamIdProvider({ children }) {
  const [steamId, setSteamId] = useState("");

  return (
    <SteamIdContext.Provider value={{ steamId, setSteamId }}>
      {children}
    </SteamIdContext.Provider>
  );
}

export function useSteamId() {
  return useContext(SteamIdContext);
}