/*CMD
  command: /aeiou
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Checking your bot balance🕛")
let money = Libs.ResourcesLib.userRes("money");

if(money.have(50000)){
  money.remove(50000);
User.setProperty("ultraplan", chat.chatid)
User.setProperty("pstbin", chat.chatid)
Bot.sendMessage("You have successfully bought Ultra Access Valid for 1 month")
}else{
  Bot.sendMessage("You do not have 50000XR5Coins")
}
