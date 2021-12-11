/*CMD
  command: /html
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("html", chat.chatid)
// Automatic fix
var is_alert;

// Automatic fix
var is_alert;

is_alert = ( params!="top")

// help - https://core.telegram.org/bots/api#answercallbackquery
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "Your Text Formatting Method has been saved to HTML.",
  show_alert: is_alert 
})

var buttons = [
    {title: "Current Format: HTML", command: "/markdown"},
{title: "Clear bins", command: "/clearbin" },
    {title: "Conversion Option", command: "/touchutton1" } 
];

Bot.editInlineKeyboard(buttons)
