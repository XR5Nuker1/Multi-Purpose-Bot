/*CMD
  command: Oud
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Nnn
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
    chat_id: user.telegramid,
    text: message,
    parse_mode: "Markdown"
  })
