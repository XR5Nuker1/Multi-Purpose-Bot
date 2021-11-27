/*CMD
  command: /give
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("money");
let amount = rnd.randomFloat(899, 900) 
money.add(amount);

Bot.sendMessage("Hello new user welcome to Multi Purpose Robot, there is " + amount.toFixed(2) + "XR5Coins as a welcome gift")

