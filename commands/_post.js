/*CMD
  command: /post
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

// You can inspect all result:
// Bot.inspect(options)
var buttons = [
    {title: "Conversion Option", command: "/touchutton1" },
    {title: "Change Mode", command: "/start" }
];
let re = Libs.Random.randomInt(10, 30)
let msg_id = options.result.message_id;
Bot.editInlineKeyboard(buttons, re, msg_id);

