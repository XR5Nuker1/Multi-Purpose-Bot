/*CMD
  command: /touchutton1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var from_cur = User.getProperty("from-currency");
var to_cur = User.getProperty("to-currency");
var buttons = [
    {title: "From this Currency: " + from_cur, command: "/touchutton11" },
    {title: "To This Currency: " + to_cur, command: "/6111111" },
{title: "Back🔙", command: "/settings2"}
];

Bot.editInlineKeyboard(buttons);
