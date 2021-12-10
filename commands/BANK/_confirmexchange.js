/*CMD
  command: /confirmexchange
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK

  <<ANSWER
Do you want to transfer <exchange>00 for <exchange>

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
