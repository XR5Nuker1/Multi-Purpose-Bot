/*CMD
  command: /euros5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter code.
  keyboard: 
  aliases: 
CMD*/

var nit = User.getProperty("planlogin")

if(message==nit){
User.setProperty("ultraplan", chat.chatid)
User.setProperty("pstbin", chat.chatid)
Bot.sendMessage("Your Ultra Plan has been activated successfully\nTransaction Logs Sent [LOG Channel](t.me/XR5Coinlog)")
Bot.runCommand("/lobs")
} else { 
Bot.sendMessage("Wrong Code")
}
