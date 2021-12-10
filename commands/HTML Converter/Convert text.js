/*CMD
  command: Convert text
  help: 
  need_reply: true
  auto_retry_time: 
  folder: HTML Converter
  answer: Please enter your text.
  keyboard: 
  aliases: 
CMD*/

var html = User.getProperty("html")
if(!html){
Api.sendMessage({
    chat_id: user.telegramid,
    text: message,
    parse_mode: "Markdown"
  })

}else{
Api.sendMessage({
    chat_id: user.telegramid,
    text: message,
    parse_mode: "HTML"
  })
}
