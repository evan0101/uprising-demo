import { createContext } from "react";
import SurvivalGames from "./images/survival-games.jpg";
import Duels from "./images/duels.jpg";
import KitPvP from "./images/kitpvp.jpg";
import Players from "./images/players.jpg";

interface Api {
  name: string;
  path: string;
}

const apiSettings = {
  url: "https://api.playuprising.com",
  version: "v1",
};

const initialState = {
  isStorageEmpty: (key: string) => {
    if (localStorage.getItem(key)) {
      return false;
    }
    return true;
  },
  getGameData: async (id: any): Promise<any> => {
    for (let i = 0; i < 3; i++) {
      let result = await new Promise((resolve, reject) => {
        fetch(`${apiSettings.url}/${apiSettings.version}/game-log?id=${id}`)
          .then((res) => res.json())
          .then((gameData) => {
            if (gameData.success) {
              resolve(gameData);
            } else {
              resolve(null);
            }
          })
          .catch((err) => console.error(err));
      });
      if (result) {
        return result;
      }
    }
  },
  getPlayerData: async (player: string): Promise<any> => {
    for (let i = 0; i < 3; i++) {
      const result = await new Promise((resolve, reject) => {
        fetch(`${apiSettings.url}/${apiSettings.version}/player?ign=${player}`)
          .then((res) => res.json())
          .then((playerData) => {
            if (playerData.success) {
              resolve(playerData);
            } else {
              resolve(null);
            }
          })
          .catch((err) => console.error(err));
      });
      if (result) {
        return result;
      }
    }
  },
  getPlayerSkin: (uuid: string, type: string): string => {
    return `https://crafatar.com/renders/${type}/${uuid}`;
  },
  getLeaderboard: async (): Promise<any> => {
    const leaderboardStats = new Promise((resolve, reject) => {
      fetch(
        "https://q4rdx7mz4d.execute-api.us-east-1.amazonaws.com/dev/leaderboard-stats"
      )
        .then((response) => response.json())
        .then(resolve)
        .catch(reject);
    });

    return leaderboardStats;
  },
  getGlobalStats: async (): Promise<any> => {
    const globalStats = new Promise((resolve, reject) => {
      fetch(
        "https://q4rdx7mz4d.execute-api.us-east-1.amazonaws.com/dev/global-stats"
      )
        .then((response) => response.json())
        .then(resolve)
        .catch(reject);
    });

    return globalStats;
  },
  getGameImage: (gamemode: string): any => {
    switch (gamemode) {
      case "survival-games":
      case "Survival Games":
        return SurvivalGames;
      case "duels":
      case "Duels":
        return Duels;
      case "kitpvp":
      case "Kit PvP":
        return KitPvP;
      case "Players":
        return Players;
    }
  },
};

const ApiContext = createContext(initialState);

export { ApiContext };
