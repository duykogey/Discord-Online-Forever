const Eris = require("eris");
const keep_alive = require('./keep_alive.js');

const bot = new Eris(process.env.token);

bot.on("ready", () => {
  console.log("Bot is online as " + bot.user.username);
  bot.editStatus("online", [
    {
      name: ".gg/rollbet", // <-- Custom status text
      type: 4               // Type 4 = Custom Status
    }
  ]);
});

bot.on("error", (err) => {
  console.error(err);
});

bot.connect();
