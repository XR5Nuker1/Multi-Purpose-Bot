/*CMD
  command: /ex3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wood = Libs.ResourcesLib.userRes("wood");
let money = Libs.ResourcesLib.userRes("money");
let bod = User.getProperty("ex1")
let bud = User.getProperty("ex2")

if(wood.have(bud)){
 wood.remove(bud);
 money.add(bod);
Bot.sendMessage("Exchange done successfully your new balances are:\n \n*XR5Coins*: " + money.value().toFixed(2) + "\n💰*Coins*: " + wood.value().toFixed(2))
} else {
Bot.sendMessage("You don't have " + bud + "💰coins")
}
