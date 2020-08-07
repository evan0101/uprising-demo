const mongo = require("./mongo");
const leaderboardStatSchema = require("./schemas/leaderboardstat-schema");

const main = async (event) => {
  let result = [];
  await mongo().then(async (mongoose) => {
    try {
      result = await leaderboardStatSchema.find().sort({ wins: "desc" });
    } finally {
      mongoose.connection.close();
    }
  });
  return result;
};

exports.handler = main;
