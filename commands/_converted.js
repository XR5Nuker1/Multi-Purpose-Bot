/*CMD
  command: /converted
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
var node = User.getProperty("convert")
var js = User.getProperty("convert1",)
let from_cur = User.getProperty("from-currency")
let to_cur = User.getProperty("to-currency")


let re = "Currency set " + from_cur + " to " + to_cur + "\n \n" + js + from_cur + " => " + node + to_cur + "\n \n*You can set other Currencies*"

let msg_id = options.result.message_id;
Bot.editMessage(re, msg_id);

Bot.sendMessage(User.telegramid)
