/*CMD
  command: captcha
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
?[1/5]

WhatsApp messenger and Instagram are made from the same company
  ANSWER
  keyboard: True, False
  aliases: /try
CMD*/

if(message=="True"){
   Bot.runCommand("cp2")
}else{
  Bot.sendMessage("Wrong answer /try again")}
