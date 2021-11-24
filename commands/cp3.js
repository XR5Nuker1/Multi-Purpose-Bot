/*CMD
  command: cp3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
?[3/5]

What is the the name and SDK version of Android 8.1.0
(Hint: SDK: -- A. Name: ---------) answer in this format.
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(message=="SDK: 27 A. Name: Oreo"){
   Bot.runCommand("cp4")
}else{
  Bot.sendMessage("Wrong answer /try again")}
