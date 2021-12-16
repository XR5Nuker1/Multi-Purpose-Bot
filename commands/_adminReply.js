/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please send message to user.

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = User.getProperty("replyto")

var msg = "📥Answer from admin: " + "\nMessage contents: " + message + "\n\n Reply again: /userreply";

Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Message was sent to user📤")
