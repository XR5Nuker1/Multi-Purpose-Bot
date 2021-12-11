/*CMD
  command: /convertto2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let from_cur = User.getProperty("from-currency");
let to_cur = User.getProperty("to-currency");

if(!from_cur||!to_cur){
  var buttons = [
    {title: "Settings", command: "Settings⚙️" }
];

Bot.sendInlineKeyboard(buttons, "You need to set a conversion option in settings");;
}else{
  let cu = User.getProperty("conver")
var value = CurrencyQuote.convert({ amount: parseInt(cu), from: from_cur, to: to_cur })
   User.setProperty("convert", value.toFixed(2))
User.setProperty("convert1", cu)
  Bot.sendMessage("Converting " + cu + from_cur + " to " + to_cur, {on_result: "/converted" }
  );
}
