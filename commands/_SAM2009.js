/*CMD
  command: /SAM2009
  help: 
  need_reply: 
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
  text: "🎉🎉V1.2.2 Update 🎉🎉\nUpdated: 19/11/2021\n \n>Added Markdown to HTML mode\n>Added BB Account creator\n>Fixed some bugs🛠️\n>All bot settings are now in About\n>Added Changelog",
  show_alert: is_alert 
})
