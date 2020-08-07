import React from "react";
import Game from "../../icons/Game";
const GameCard = (props: any) => {
  const { title, gameData, img, gamesPlayed } = props;
  const game: string = title.toLowerCase().replace(/ /g, "-");

  const getStats = () => {
    const stats = Object.keys(gameData);
    return stats.map((stat: string) => {
      let statName =
        stat.charAt(0).toUpperCase() + stat.slice(1).replace("_", " ");

      return (
        <div className="stat">
          <h3>{statName}</h3>
          {gameData[stat]}
        </div>
      );
    });
  };

  return (
    <div className="gamecard">
      <div className={"gamecard-heading " + game}>
        <div className="title">{title}</div>
        {typeof gamesPlayed === "number" && (
          <div className="games-played">
            <Game />
            {gamesPlayed + " "}
          </div>
        )}
      </div>
      <div className="image-container">
        <img src={img} />
      </div>
      <div className="gamecard-stats">{getStats()}</div>
    </div>
  );
};
export default GameCard;
