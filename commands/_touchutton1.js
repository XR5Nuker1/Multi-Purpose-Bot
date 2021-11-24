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
    {title: "From: " + from_cur, command: "/touchutton11" },
    {title: "To: " + to_cur, command: "/6111111" }
];

Bot.sendInlineKeyboard(buttons, "This is your conversion option.\nFrom Currency: _" + from_cur + "_\n⇓⇓⇓\nTo Currency: " + to_cur + "\nPress to change");
