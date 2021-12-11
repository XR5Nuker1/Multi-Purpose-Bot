/*CMD
  command: /payed2
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
let me5 = Libs.Random.randomInt(1000000000, 9999999999)


if(money.have(6000000)){
  money.remove(6000000);
User.setProperty("planlogin", me5)
Bot.sendMessage("You have successfully bought Ultra Access permanently\n\nYour redeem code: `" + me5 + "` Transaction Logs Sent [LOG Channel](t.me/XR5Coinslog)")
Bot.runCommand("/planlog")
}else{
  Bot.sendMessage("You do not have 6000000XR5Coins")
}
