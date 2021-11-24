/*CMD
  command: twppp
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⚙️settings⚙️
CMD*/

var buttons = [
    {title: "Clear bins", command: "/clearbin" },
    {title: "Change Mode", command: "/start" }
];

Bot.sendInlineKeyboard(buttons, "Choose which bins you want to clear.");
