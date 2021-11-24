/*CMD
  command: Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var buttons = [
 {title: "Change Mode", command: "/start" }
];

Bot.sendInlineKeyboard(buttons, "Choose setting.");
