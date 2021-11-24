/*CMD
  command: /plaan
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
  text: "Mode API Versions\n \nQR Code Gen v1.2.6\nURL Shortener v1.3.5\nCurrency Converter v1.2\nAPK Download v1.0\nGame version 1.6\nPaste Bin v1.1",
  show_alert: is_alert 
})
