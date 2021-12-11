/*CMD
  command: /orobot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Talk to Admin
  answer: Mxnxxndn
  keyboard: 
  aliases: 
CMD*/

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

sendMessage(message, message)
Bot.sendMessage("Message has been sent to your channel")
