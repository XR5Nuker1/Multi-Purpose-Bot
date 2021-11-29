/*CMD
  command: sendmoney
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BANK
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = User.getProperty("sendmoney")

let telegramid = User.getProperty("TGramID")
amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("money");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("money", telegramid);


if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
Bot.sendMessage("Transfered XR5Coins: " + amount + "\nTo User" + telegramid)
Bot.runCommand("/paymentlog")
User.setProperty("TGramID", telegramid)
User.setProperty("Sendmoney", amount)
} else { 
Bot.sendMessage("You don't have " + amount + "XR5Coins")
}
}

