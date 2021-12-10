/*CMD
  command: /euros
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var red = User.getProperty("ultraplan")

if(!red){
Bot.runCommand("/euros5")
}else{
// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Already Redeemed.",
  show_alert: is_alert 
})
}
