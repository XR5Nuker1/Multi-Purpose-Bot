/*CMD
  command: adding
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Ndjddndjd
  keyboard: 
  aliases: 
CMD*/

var tgID = 1111111;  // any tgID for ban. You can pass it via message with wait for reply

User.setProperty("ultraplan", chat.chat_id);

Bot.sendMessage("User with TG id: " + tgID + " banned");
