/*CMD
  command: /905
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Wwkejeoejenee
  keyboard: 
  aliases: 
CMD*/

function validURL(url) {
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  return regex.test(url)
}

if (validURL(message)) {
  Api.sendVideo({
  video: message,
  caption: "*Your or code has been generated.*\n \n *Message text*: " + message + "\n \n_Thank You for using the bot_",
  parse_mode: "Markdown"});}
