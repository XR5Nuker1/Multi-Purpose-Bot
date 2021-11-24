/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please send message to user.
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "📥Answer from admin: " + "\nMessage contents: " + message + "\n\n Reply again: /reply_to_admin";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sent to user📤")
