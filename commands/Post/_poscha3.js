/*CMD
  command: /poscha3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

var nee3 = User.getProperty("post3")
var cha3 = User.getProperty("cha3")

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

sendMessage(cha3, nee3)
Bot.sendMessage("Message has been sent to your channel")
