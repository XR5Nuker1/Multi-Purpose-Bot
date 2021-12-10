/*CMD
  command: /rnr2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: BANK
  answer: These are your balances☝️
  keyboard: Change Pin, Transfer Coins, \nExchange Coins, MAIN Menu
  aliases: 
CMD*/

// You can inspect all result:
// Bot.inspect(options)
let msg_id = options.result.message_id;
let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
var se1 = Libs.commonLib.getLinkFor(user)
var red = "User info👤 \n \n*First Name*: [" + user.first_name + "](tg://user?id=" + user.telegramid + ")\n*Last Name*: " + user.last_name + "\n*Username*: " + se1 +
      "\n*TelegramID* : " + user.telegramid +
      "\n \n*Balances*\n \n*XR5Coins*: " + money.value().toFixed(2) + "\n💰*Coins*: " + wood.value().toFixed(2) + "\n \n_100 💰Coins can be exchanged for 10XR5Coins_";
Bot.editMessage(red, msg_id)
