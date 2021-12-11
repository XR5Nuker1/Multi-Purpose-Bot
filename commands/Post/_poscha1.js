/*CMD
  command: /poscha1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Post

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var nee1 = User.getProperty("post1")
var cha1 = User.getProperty("cha1")

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

sendMessage(cha1, nee1)
Bot.sendMessage("Message has been sent to your channel")
