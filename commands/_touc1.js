/*CMD
  command: /touc1
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
  text: "Max Ping (ms): 500ms\nTotal Storage: 1012.8MB\nTotal RAM: 256.7MB \nMinimum Upload Speed: 2Mbps\nMax Upload Speed: 10 Mbps",
  show_alert: is_alert 
})
