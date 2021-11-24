/*CMD
  command: /68
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Hsnjj
  keyboard: 
  aliases: 
CMD*/

var qrChartUrl =
  "http://chart.apis.google.com/chart?cht=qr&chs=250x250&" +
  "chl=" +
  message +
  "&chld=H|0"

Api.sendPhoto({
  photo: qrChartUrl,
  caption: "Your or code has been generated.", parse_mode: "Markdown"});

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var seconds = (Date.now() - last_run_at) /1000/60;
  
  var seconds_in_minutes = 1*60
  
  if(seconds < seconds_in_minutes){
   Bot.sendMessage("Please return later. ")
   return
  }
  return true;
}

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

// your code here:
// ...
