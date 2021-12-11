/*CMD
  command: Zmssm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Request Feature", command: "/rqft" },
    {title: "Request Game/app", command: "/rqapp" }
];

Bot.sendInlineKeyboard(buttons, "What would you like to request to Admin?");
