/*CMD
  command: /res12
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");
let anotherRes = Libs.ResourcesLib.anotherUserRes("money", "1136716633");

res.remove(anotherRes, 100)
