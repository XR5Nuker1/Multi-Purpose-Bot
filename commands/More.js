/*CMD
  command: More
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user_name = Libs.commonLib.getNameFor(user)
var buttons = [
   {title: "Changelog", command: "/SAM2009" },
{title: "Bot Mode API", command: "/plaan"},
];

Bot.sendInlineKeyboard(buttons, "More");
