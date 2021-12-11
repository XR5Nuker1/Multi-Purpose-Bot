/*CMD
  command: /adminlog
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mid = User.getProperty("TGramID")
var end = User.getProperty("Sendmoney")
var setu = User.getProperty("ref")

var mel = Libs.Random.randomInt(10000000000000000, 99999999999999999)
let admin_phone_text =
  "Admin has sent XR5Coins.\n \n*User ID* : " +
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
var channel_name = AdminPanel.getPanelValues("Chanell").channel_name
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

let po =
  "Admin has sent XR5Coins.\n \n*User ID* : " +
  user.telegramid +
  "\n*Transaction ID*: " +
  mel +
  "\n*Amount sent*: " +
  end +
  "\n*Sent to*: " +
  mid +
  "\n*Reference*: " +
  setu

Bot.sendMessageToChatWithId(mid, po)
