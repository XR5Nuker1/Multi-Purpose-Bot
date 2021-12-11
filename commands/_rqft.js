/*CMD
  command: /rqft
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "Rt Feature", command: "/rqft" },
    {title: "Ree/app", command: "/rqapp" }
];

Bot.editInlineKeyboard(buttons, message_id, chat_id)
