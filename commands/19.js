/*CMD
  command: 19
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Please input amount.
For example: 76
  ANSWER
  keyboard: 
  aliases: 
CMD*/


let from_cur = User.getProperty("from-currency")
let to_cur = User.getProperty("to-currency")

if(!from_cur||!to_cur){
  var buttons = [
    {title: "Settings", command: "Settings⚙️" }
];

Bot.sendInlineKeyboard(buttons, "You need to set a conversion option in settings");;
}else{
  var value = CurrencyQuote.convert({ amount: parseFloat(message), from: from_cur, to: to_cur })
   Bot.sendMessage(
    "Currency set " + from_cur + " to " + to_cur + "\n \n" + message + from_cur + " => " + value + to_cur + "\n \n*You can set other Currencies set*"
  )
}

