/*CMD
  command: *
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!request) {
  return
}

let new_members = request.new_chat_members
let msg = "Hello, "
let comma = ""
let nne = Libs.Random.randomInt(1000000000, 9999999999)

if (new_members.length > 0) {
  for (var i = 0; i < new_members.length; i++) {
    msg = msg + comma + Libs.commonLib.getNameFor(new_members[i])
    comma = ", "
  }
  User.setProperty("code", nne);
  msg =
    msg +
    "\n\nThank you for joining this group.\n\nHere is your code: `" + nne "` \n \nUse this code to unlock Multi Purpose Robot";
  Bot.sendMessage(msg, { is_reply: true })
}
