/*CMD
  command: /pastebuy
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: unlock paste bins
CMD*/

var B56it = User.getProperty("pstbin")
if(!B56it){
var buttons = [
    {title: "Buy with XR5Coins", command: "/aeiou2" }
];

Bot.sendInlineKeyboard(buttons, "Are you sure you want to Unlock Paste 4,5&6 with XR5Coins?\n\n*Validity*: 1 mouth \n*Price*: 19000XR5Coins");
}else{
Bot.sendMessage("Already purchased")
}
