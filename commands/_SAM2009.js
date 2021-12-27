/*CMD
  command: /SAM2009
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
  text: "🎉🎉V1.4 Update 🎉🎉\nUpdated: 16/12/2021\n \n•Changed UI design\n•Shop option is now User Panel\n•Added Inline bot list and Post Message\n•Added Daily Bonus\n•Fixed bugs",
  show_alert: is_alert 
})
