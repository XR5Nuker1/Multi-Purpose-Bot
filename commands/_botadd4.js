/*CMD
  command: /botadd4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Your bot will be added soon. You will be notified")

let aw = User.getProperty("botaddname")
let aw1 = User.getProperty("botaddnaame")
let aw2 = User.getProperty("botaddabout")
let send = "You have a bot add request from [" + user.first_name + " " + user.last_name + "](tg://user?id=" + user.telegramid + ").\n\n*Bot Name*: " + aw1 + "\n*Bot Username*: " + aw + "\n*Bot About*: " + aw2;
var channel_name = AdminPanel.getPanelValues("GROUP").channel_name
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

sendMessage(channel_name, send)

