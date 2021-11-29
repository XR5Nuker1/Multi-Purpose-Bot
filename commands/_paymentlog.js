/*CMD
  command: /paymentlog
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var top = User.getProperty("admin")

if(top){
User.setProperty("ref", data.message)
Bot.runCommand("/adminlog")
Bot.sendMessage("Transaction Logs Sent [LOG Channel](t.me/XR5Coinlog)")
}else{
User.setProperty("ref", data.message)
Bot.runCommand("/userlog")
Bot.sendMessage("Transaction Logs Sent [LOG Channel](t.me/XR5Coinlog)")
}
