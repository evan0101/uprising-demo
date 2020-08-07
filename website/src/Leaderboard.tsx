import React, { useState, useContext, useEffect } from "react";
import NavFooter from "./components/NavFooter";
import Header from "./components/Header/Header";
import Heading from "./components/Heading";
import Sync from "./icons/Sync";
import { ApiContext } from "./Api";
import IconCard from "./components/IconCard/IconCard";

const Leaderboard = (props: any) => {
  const { gamemode } = props.match.params;
  const { getLeaderboard, getPlayerSkin, getGameImage } = useContext(
    ApiContext
  );

  const [list, setList] = useState([]);
  const [display, setDisplay] = useState(false);

  let gmDisplay = gamemode.toLowerCase().replace("-", " ");

  let gameModeDisplay = gmDisplay.split(" ");
  for (var i = 0; i < gameModeDisplay.length; i++) {
    gameModeDisplay[i] =
      gameModeDisplay[i].charAt(0).toUpperCase() +
      gameModeDisplay[i].substring(1);
  }

  gameModeDisplay = gameModeDisplay.join(" ");

  useEffect(() => {
    getLeaderboard().then((data) => setLeaderboardData(data));
  }, []);

  const setLeaderboardData = (data: any) => {
    setList(data);
    setDisplay(true);
  };

  const getLeaderboardData = (row: any) => {
    const data = Object.keys(row);

    return data.map((stat: string) => {
      if (stat === "uuid") {
        return (
          <div className={"leaderboard-stat uuid"}>
            <img src={getPlayerSkin(row[stat], "head")} />
          </div>
        );
      } else {
        if (stat !== "_id") {
          return <div className={stat + " leaderboard-stat"}>{row[stat]}</div>;
        }
      }
    });
  };

  const getLeaderboardList = () => {
    let index = 0;

    if (list) {
      return list.map((player: any) => {
        index++;
        return (
          <IconCard type={"state "} index={index} icon={index}>
            <div className={gamemode + " leaderboard-data-container"}>
              {getLeaderboardData(player)}
            </div>
          </IconCard>
        );
      });
    }
  };

  const getLeaderboardHeader = () => {
    if (list) {
      const data = Object.keys(list[0]);
      return data.map((heading: any) => {
        let headingName =
          heading.charAt(0).toUpperCase() + heading.slice(1).replace("_", " ");
        if (heading !== "_id") {
          return (
            <div className={heading}>
              {heading !== "uuid" ? headingName : ""}
            </div>
          );
        }
      });
    }
  };

  return (
    <NavFooter>
      {display ? (
        <>
          <Header
            main={[{ largeText: gameModeDisplay }]}
            sub={[{ text: "Tournament" }]}
            img={getGameImage(gamemode)}
          />
          <div className="leaderboard-header"></div>
          <div className="container">
            <div id="leaderboard">
              <Heading>
                Leaderboards {">"} {gameModeDisplay}
              </Heading>

              <div className={gamemode + " list"}>
                <IconCard icon="#">
                  <div className={gamemode + " leaderboard-data-container"}>
                    {getLeaderboardHeader()}
                  </div>
                </IconCard>
                {getLeaderboardList()}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="loading">
          <Sync />
        </div>
      )}
    </NavFooter>
  );
};
export default Leaderboard;
