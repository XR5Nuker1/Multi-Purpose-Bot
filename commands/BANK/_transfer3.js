/*CMD
  command: /transfer3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: BANK

  <<ANSWER
Your want to Transfer <Sendmoney>XR5Coins to User <TGramID> for <ref>

Enter your pin to confirm.
  ANSWER
  keyboard: 
  aliases: 
CMD*/


var memo = User.setProperty("userpin")
if(message==memo){
Bot.runCommand("sendmoney")
}else{
Bot.sendMessage("Wrong Pin Operation canceled")
}
