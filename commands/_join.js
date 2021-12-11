/*CMD
  command: /join
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter the welcome code from joining this chat 👉 [click here](https://t.me/XR5Updatesgroup)
  keyboard: 
  aliases: 
CMD*/

var fourth = User.getProperty("code")

if(message==fourth){
User.setProperty("allowed", chat.chatid)
Bot.runCommand("/start3")
}else{
Bot.sendMessage("wrong code")
}
