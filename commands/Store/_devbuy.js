/*CMD
  command: /devbuy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: unlock domain tools
CMD*/

var Bit = User.getProperty("devlogin")

if(!Bit){
var buttons = [
    {title: "Buy with XR5Coins", command: "/aeiou3" }
];

Bot.sendInlineKeyboard(buttons, "Are you sure you want to unlock Domain tools with XR5Coins?\n\n*Validity*: lifetime \n*Price*: 5000XR5Coins");
}else{
Bot.sendMessage("Already purchased")
}
