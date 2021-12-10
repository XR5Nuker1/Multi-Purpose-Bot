/*CMD
  command: /moneyremix
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*Post this message to all users*: 

<Post>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tuo = Bot.getProperty("Post")

if(message==Yes){
Bot.sendMessageToAllChats(tuo);
Bot.sendMessage("Sent!")
Bot.runCommand("/start")
}else{
Bot.sendMessage("Canceled post")
}


