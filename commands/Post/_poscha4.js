/*CMD
  command: /poscha4
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

var nee4 = User.getProperty("post4")
var cha4 = User.getProperty("cha4")

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

sendMessage(cha4, nee4)
Bot.sendMessage("Message has been sent to your channel")
