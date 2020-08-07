const mongoose = require("mongoose");
const mongoPath =
  "mongodb+srv://admin:tWm1022pCMb4OtIw@demo-gameserver.b7prw.mongodb.net/demo_gameserver?retryWrites=true&w=majority";

// tWm1022pCMb4OtIw

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return mongoose;
};
