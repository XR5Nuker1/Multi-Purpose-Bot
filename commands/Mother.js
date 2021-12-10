/*CMD
  command: Mother
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let text = "Hello! " +
    '<a href="' + 'tg://user?id=' + 
       user.telegramid + '">' + user.first_name +
    '</a> ' +
    "welcome to demo keyboard button tools bot " +
    'Demo bot builded by <a href="' + 'tg://user?id=606228013">' +
    'SRB </a>'

let fo = User.getProperty("convert")
var keyboard = [
    [{
        text: fo
    }],
    [{
        text: "Send Location"
    }]
]

Api.sendMessage({
    text: text,
    parse_mode: "html",
    reply_markup: {
        keyboard: keyboard,
        resize_keyboard: false   }
});
