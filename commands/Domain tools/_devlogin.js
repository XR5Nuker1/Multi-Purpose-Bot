/*CMD
  command: /devlogin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Domain tools
  answer: Please enter your Key Code
  keyboard: 
  aliases: 
CMD*/

var open = User.getProperty("devlogin")

if(message==open){
   User.setProperty("dev", chat.chatid)
Bot.runCommand("/devok")
}else{
  Bot.sendMessage("Wrong code")}
