/*CMD
  command: /rnr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BANK
  answer: 
  keyboard: 
  aliases: balance
CMD*/

let money = Libs.ResourcesLib.userRes("money");

var buttons = [
    {title: "Transfer XR5Coins", command: "transfer" },
    {title: "Change Pin(Custom)", command: "/cuspin" }
];

Bot.sendInlineKeyboard(buttons, "For user 👤 @" + user.username +
      "/n" + user.telegramid +
      "\nXR5Coins: " + money.value().toFixed(2));

