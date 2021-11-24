/*CMD
  command: 674onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var link = User.getProperty("link")
//Automatic fix
var msg;

msg = user.first_name + ", *Your link has been shortened*\n \n*Your Long link*: `" + link + "`\n \n*Your shortened link*: `" + content + "`";

Bot.sendMessage(msg)
