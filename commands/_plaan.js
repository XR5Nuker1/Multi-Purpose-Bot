/*CMD
  command: /plaan
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
  text: "Mode API Versions\n \nQR Code Gen v1.4\nURL Shortener v1.4\nCurrency Converter v1.4\nAPK Download v1.0\nGame version, Paste Bin v1.6\nDomain tools, Create BB acc v2",
  show_alert: is_alert 
})
