/*CMD
  command: /clearwholebin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("Paste bin1")
User.setProperty("Paste bin2")
User.setProperty("Paste bin3")
User.setProperty("Paste bin4")
User.setProperty("Paste bin5")
User.setProperty("Paste bin6")
// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "All your paste bin text has been cleared.",
  show_alert: is_alert 
})
