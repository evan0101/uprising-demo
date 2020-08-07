import React, { useContext, useState, useEffect } from "react";
import NavFooter from "./components/NavFooter";
import Heading from "./components/Heading";
import Card from "./components/Card/Card";
import IconCard from "./components/IconCard/IconCard";
import Players from "./icons/Players";
import UniquePlayers from "./icons/UniquePlayers";
import Game from "./icons/Game";
import { ApiContext } from "./Api";
import Sync from "./icons/Sync";
import Article from "./components/Article/Article";
import ArticleImg from "./icons/Article.jpg";

const Home = (props: any) => {
  const {} = props;

  const [onlinePlayers, setOnlinePlayers] = useState("");
  const [uniquePlayers, setUniquePlayers] = useState("");
  const [totalGames, setTotalGames] = useState("");
  const [display, setDisplay] = useState(false);

  interface GlobalStats {
    online: string;
    unique: string;
    games: string;
  }

  const setGlobalStats = () => {
    setOnlinePlayers("48");
    setUniquePlayers("872");
    setTotalGames("50");
    setDisplay(true);
  };

  useEffect(() => {
    setGlobalStats();
  }, []);

  return (
    <NavFooter>
      {display ? (
        <div className="container">
          <div id="home">
            <div id="news-feed">
              <Heading>News</Heading>
              <Article
                title="Uprising Grand Opening Announcement Article Title Example Text"
                date="11/12/20"
                src={ArticleImg}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo.
              </Article>
            </div>
            <div id="server">
              <div id="server-info">
                <Heading>What is Uprising?</Heading>
                <Card>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt.
                </Card>
              </div>
              <div id="server-stats">
                <Heading>Server Information</Heading>
                <IconCard icon={<Players />} type="online">
                  <div className="stat">
                    <h3>Online Players</h3>
                    {onlinePlayers}
                  </div>
                </IconCard>
                <IconCard icon={<UniquePlayers />} type="unique">
                  <div className="stat">
                    <h3>Total Unique Players</h3>
                    {uniquePlayers}
                  </div>
                </IconCard>
                <IconCard icon={<Game />} type="totalgames">
                  <div className="stat">
                    <h3>Total Games Played</h3>
                    {totalGames}
                  </div>
                </IconCard>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <Sync />
        </div>
      )}
    </NavFooter>
  );
};
export default Home;
