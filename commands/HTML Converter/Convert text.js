/*CMD
  command: Convert text
  help: 
  need_reply: 
  auto_retry_time: 
  folder: HTML Converter
  answer: 
  keyboard: 
  aliases: 
CMD*/

var html = User.getProperty("html")
if(!html){
Api.sendPhoto({
  photo: "https://telegra.ph/file/6accbde352f833546201f.jpg",
  caption: "Your text" + message, parse_mode: "Markdown"})
}else{
Api.sendPhoto({
  photo: "https://telegra.ph/file/0ced03aa216c359f470c2.jpg",
  caption: "Your text" + message, parse_mode: "HTML"})
}
