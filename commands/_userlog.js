/*CMD
  command: /userlog
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var mid = User.getProperty("TGramID")
var end = User.getProperty("Sendmoney")
var setu = User.getProperty("ref")

var mel = Libs.Random.randomInt(10000000000000000, 99999999999999999)
let admin_phone_text =
  "[" +
  user.first_name +
  "](tg://user?id=" +
  user.telegramid +
  ") has sent XR5Coins.\n \n*User ID* : " +
  user.telegramid +
  "\n*Transaction ID*: " +
  mel +
  "\n*Amount sent*: " +
  end +
  "\n*Sent to*: " +
  mid +
  "\n*Reference*: " +
  setu

var ADMIN_ID = AdminPanel.getPanelValues("AdminInfo").ADMIN_ID
var channel_name = Bot.getProperty("channel")

function sendMessage(chat_id, text) {
  if (!chat_id) {
    return
  }
  Api.sendMessage({
    chat_id: chat_id,
    text: text,
    parse_mode: "Markdown"
  })
}

sendMessage(ADMIN_ID, admin_phone_text)

sendMessage(channel_name, admin_phone_text)

let sender =
  "[" +
  user.first_name +
  "](tg://user?id=" +
  user.telegramid +
  ") has sent XR5Coins to your.\n \n*Sender's User ID* : " +
  user.telegramid +
  "\n*Transaction ID*: " +
  mel +
  "\n*Amount sent*: " +
  end +
  "\n*Sent to*: " +
  mid +
  "\n*Reference*: " +
  setu

Bot.sendMessageToChatWithId(mid, sender)
