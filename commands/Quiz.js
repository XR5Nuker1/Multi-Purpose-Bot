/*CMD
  command: Quiz
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var quiz = User.getProperty("quiz")

if(quiz){
   Bot.sendMessage("You have completed the Quiz")
}else{
  Bot.runCommand("captcha")}
