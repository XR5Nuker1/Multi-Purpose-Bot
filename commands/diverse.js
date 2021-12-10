/*CMD
  command: diverse
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rnd = Libs.Random; 

let wood = Libs.ResourcesLib.userRes("wood");
let amount = rnd.randomFloat(100, 600) 
wood.add(amount);

var buttons = [
    {title: "Try Again", command: "Dice🎲 (BETA)" }
];

Bot.sendInlineKeyboard(buttons, user.first_name + " " + user.last_name + " (" + user.telegramid + ") Your Result is: \n \n*Dice Number*: " + options.result.dice.value + "\n*Amount added*: " + amount.toFixed(2) + "💰COINS \n*Your Current Balance*: " + wood.value().toFixed(2) + "💰Coins");
