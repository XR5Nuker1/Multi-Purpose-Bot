/*CMD
  command: data
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let data = {
  'Country': User.getProperty("cn")
}

User.setProperty("DDAATTAA", data)
