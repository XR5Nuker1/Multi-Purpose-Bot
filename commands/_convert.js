/*CMD
  command: /convert
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


if(params){
  let arr = params.split(" ");
  
  let to = arr[0];

if(!arr[0]){
    Bot.sendMessage("error occurred");
  }else{
Bot.setProperty("link", to)
Bot.runCommand("/345")
}
}
