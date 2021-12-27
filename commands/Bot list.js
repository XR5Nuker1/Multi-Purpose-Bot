/*CMD
  command: Bot list
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
{ title: "Add bot", command: "/botadd"}
];

Bot.sendInlineKeyboard(buttons, "Hello user this is my bot list mode. you can add your own bot or go inline.");
