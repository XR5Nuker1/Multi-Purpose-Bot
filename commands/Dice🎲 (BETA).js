/*CMD
  command: Dice🎲 (BETA)
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
  text: "Check your dice result (Lucky 6)",
  show_alert: is_alert 
})

// extract dice emoji from cur message
var curDice = message.split(" ")[0];

// send dice
Api.sendDice({ on_result: "diverse", emoji: curDice })
