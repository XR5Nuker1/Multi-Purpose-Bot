/*CMD
  command: /ultrabuy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: buy ultra access
CMD*/

var iit = User.getProperty("planlogin")
if(!iit){
var buttons = [
    {title: "Buy with XR5Coins", command: "/aeiou" }
];

Bot.sendInlineKeyboard(buttons, "Are you sure you want to buy Ultra Access with XR5Coins?\n\n*Validity*: Permanent \n*Price*: 6000000XR5Coins");
}else{
Bot.sendMessage("Already purchased")
}
