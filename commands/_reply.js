/*CMD
  command: /reply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let telegid = arr[0];
  User.setProperty("replyto", telegid)
  Bot.runCommand("/adminReply")
}
