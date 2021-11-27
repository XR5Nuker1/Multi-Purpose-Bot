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
Bot.runCommand("/devk")
Bot.sendMessage("Transaction Logs Sent [LOG Channel](t.me/XR5Coinlog")
Bot.runCommand("/devok")
}else{
  Bot.sendMessage("Wrong code")}
