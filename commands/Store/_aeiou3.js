/*CMD
  command: /aeiou3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Checking your bot balance🕛")
let me = Libs.Random.randomInt(1000000000, 9999999999)
let money = Libs.ResourcesLib.userRes("money");

if(money.have(5000)){
  money.remove(5000);
User.setProperty("devlogin", me)
Bot.sendMessage("You have successfully Unlocked Domain tools. \n. \n*Your Key Code*: `" + me + "`\nUse it to unlock Domain tools\nTransaction Logs Sent [LOG Channel](t.me/XR5Coinlog)")
Bot.runCommand("/devlog")
}else{
  Bot.sendMessage("You do not have 5000XR5Coins")
}
