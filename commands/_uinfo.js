/*CMD
  command: /uinfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "ℹ️First Name: " + user.first_name +  "\nℹ️Last Name: " + user.last_name + "\n💳ID: `" + user.telegramid + "`\n👩‍🚒Username: " + user.username + "\n📈Position: User",
  show_alert: is_alert 
})
