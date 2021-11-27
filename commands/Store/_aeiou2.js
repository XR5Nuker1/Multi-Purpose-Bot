/*CMD
  command: /aeiou2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

let money = Libs.ResourcesLib.userRes("money");

if(money.have(19000)){
  money.remove(19000);
User.setProperty("pstbin", chat.chatid)
Bot.sendMessage("You have successfully Unlocked Paste bin 4,5&6 for 1 month")
Bot.runCommand("/pstbinlog")
}else{
  Bot.sendMessage("You do not have 19000XR5Coins")
}
