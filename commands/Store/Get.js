/*CMD
  command: Get
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Store
  answer: 
  keyboard: 
  aliases: 
CMD*/

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("money");
let amount = rnd.randomFloat(10000, 100000) 
money.add(amount);
