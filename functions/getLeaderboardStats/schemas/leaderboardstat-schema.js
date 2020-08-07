const mongoose = require("mongoose");

const leaderboardStatSchema = mongoose.Schema({
  uuid: String,
  wins: String,
  kills: String,
  games: String,
});

module.exports = mongoose.model(
  "leaderboard_survival-games",
  leaderboardStatSchema
);
