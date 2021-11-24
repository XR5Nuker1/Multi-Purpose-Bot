/*CMD
  command: Domain Tools
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Domain tools
  answer: 
  keyboard: 
  aliases: 
CMD*/

var ttt = User.getProperty("dev")

if(!ttt){
   Bot.runCommand("/devlogin")
}else{
  Bot.runCommand("/devok")}
