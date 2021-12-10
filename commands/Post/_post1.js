/*CMD
  command: /post1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post
  answer: Nmdmddn
  keyboard: 
  aliases: 
CMD*/

var tyt = User.getProperty("channel")
function sendMessage(chat_id, text) {
  if (!chat_id) {
    return
  }
  Api.sendMessage({
    chat_id: chat_id,
    text: message,
    parse_mode: "Markdown"
  })
}

sendMessage(tyt, message)

