/*CMD
  command: /makebbacc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Account creation
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let email23 = arr[0];

if(!arr[0]){
Bot.sendMessage("Please use command like this: /makebbacc (email address)")
}else{
User.setProperty("bbacc", email23)
Bot.runCommand("/createbb")
}
}

