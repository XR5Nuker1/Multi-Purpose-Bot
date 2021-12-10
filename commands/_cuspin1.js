/*CMD
  command: /cuspin1
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can inspect all result:
// Bot.inspect(options)
let msg_id = options.result.message_id;
let mess = User.getProperty("userpin")
Bot.editMessage("Your new Pin is: " + mess, msg_id);
