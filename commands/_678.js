/*CMD
  command: /678
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var mega = User.getProperty("qrtext")
var qrChartUrl =
  "http://chart.apis.google.com/chart?cht=qr&chs=500x500&" +
  "chl=" +
  mega +
  "&chld=H|0"

Api.sendPhoto({
  photo: qrChartUrl,
  caption: "*Your or code has been generated.*\n \n *Message text*: " + mega + "\n \n_Thank You for using the bot_",
  parse_mode: "Markdown"});
