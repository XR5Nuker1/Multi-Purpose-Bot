/*CMD
  command: Au
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Domain tools
  answer: 
  keyboard: 
  aliases: 
CMD*/

let coins = Libs.Random.randomInt(10000, 99999)

User.setProperty("vip", coins)
