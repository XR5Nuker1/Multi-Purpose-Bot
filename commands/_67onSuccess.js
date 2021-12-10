/*CMD
  command: /67onSuccess
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
var link = User.getProperty("link")
var content7 = User.getProperty("slink")

var m6sg = user.first_name + ", *Your link has been shortened*\n \n*Your Long link*: `" + link + "`\n \n*Your shortened link*: `" + content7 + "`";

let msg_id = options.result.message_id;
Bot.editMessage(m6sg, msg_id);
