/*CMD
  command: cp4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
?[4/5]

Translate this sentence to French:
_I love my house and my car_ (No full stop)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(message=="J'aime ma maison et ma voiture"){
   Bot.runCommand("cp5")
}else{
  Bot.sendMessage("Wrong answer /try again")}
