/*CMD
  command: /nodejs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK

  <<ANSWER
Do you want to transfer <ex2>💰Coins for <ex1>Xr5Coins

Enter your pin code to confirm
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var butto = User.getProperty("userpin")

if(message==butto){
Bot.runCommand("/givecoins")
}else{
Bot.sendMessage("Wrong code")
}
