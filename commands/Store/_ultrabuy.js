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

var buttons = [
    {title: "Buy with XR5Coins", command: "/aeiou" }
];

Bot.sendInlineKeyboard(buttons, "Are you sure you want to buy Ultra Access with XR5Coins?\n\n*Validity*: 1 mouth \n*Price*: 50000XR5Coins");
