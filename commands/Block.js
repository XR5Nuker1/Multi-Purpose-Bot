/*CMD
  command: Block
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Bbbbnn
  keyboard: 
  aliases: 
CMD*/

let tgID = message;  // any tgID for ban. You can pass it via message with wait for reply
var badUsers = Bot.getProperty("badUsers", { list: {} });
badUsers.list[tgID] = true;

// for unban:
// badUsers.list[tgID] = false;

Bot.setProperty("badUsers", badUsers, "json");

Bot.sendMessage("User with TG id: " + tgID + " banned");

// You can also use hard block
// It is save your iterations:
// Bot.blockChat(chat.id);

// But with this BeforeAll will be also not working
