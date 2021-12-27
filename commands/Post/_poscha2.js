/*CMD
  command: /poscha2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

var nee2 = User.getProperty("post2")
var cha2 = User.getProperty("cha2")

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
sendMessage(cha2, nee2)
Bot.sendMessage("Message has been sent to your channel")
