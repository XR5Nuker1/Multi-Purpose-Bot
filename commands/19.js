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
 User.setProperty("convert", value)
User.setProperty("convert1", data.message)
  Bot.sendMessage("Converting " + message + from_cur + " to " + to_cur, {on_result: "/converted" }
  )
}
