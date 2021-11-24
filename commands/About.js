/*CMD
  command: About
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
{title: "Bot Info", command: "iinfo" },
    {title: "User info", command: "/uinfo" },
{title: "Plan💠", command: "/plann"},
    {title: "Bot settings", command: "/oneto2" },
{title: "Bot Status", command: "/2525" }
];

Bot.sendInlineKeyboard(buttons, "Get info about user and the bot");
