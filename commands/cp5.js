/*CMD
  command: cp5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Final

How many states are they in USA?
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (message == "52") {
  User.setProperty("quiz", chat.chatid)
  let rnd = Libs.Random

  let money = Libs.ResourcesLib.userRes("money")
  let amount = rnd.randomFloat(999, 1000)
  money.add(amount)

  Bot.sendMessage(
    "[" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ") you have finished the quiz.\n \n*Amount Added*: " + amount.toFixed(2) + "\n*Your Current balance*: " + money.value().toFixed(4)
  )
  Bot.runCommand("/start")
} else {
  Bot.sendMessage("Wrong answer /try again")
}
