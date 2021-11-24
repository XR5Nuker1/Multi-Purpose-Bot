/*CMD
  command: /rnr
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: balance
CMD*/

let money = Libs.ResourcesLib.userRes("money");

Bot.sendMessage(
      "For user 👤 @" + user.username +
      "/n" + user.telegramid +
      "\nXR5Coins: " + money.value().toFixed(4) + "\n\n*To transfer your XR5Coins*,Type: \n`/send` (User's telegram ID) (amount). Example:\n`/send " + user.telegramid + " 100`"
);

