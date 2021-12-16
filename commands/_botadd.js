/*CMD
  command: /botadd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Please enter your bot user name.
  keyboard: 
  aliases: 
CMD*/

User.setProperty("botaddname", message)
Bot.runCommand("/botadd2")
