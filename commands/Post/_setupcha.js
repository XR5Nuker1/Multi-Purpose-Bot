/*CMD
  command: /setupcha
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Post
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(params){
  let arr = params.split(" ");
  
  let cha = arr[0];
  let chanoi = arr[1]; 
User.setProperty(cha, chanoi)
 Bot.sendMessage("Setup ok")
}else{
Bot.sendMessage("Setup like this: /setupcha (channel slot) (channel username or id)")
}
