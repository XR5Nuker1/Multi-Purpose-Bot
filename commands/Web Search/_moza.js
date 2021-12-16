/*CMD
  command: /moza
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Web Search

  <<ANSWER
Please enter your text using the keyboard provided:
*Your current text*: <search>|
_if the text has_ + _it means space_
  ANSWER
  keyboard: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, \nq, w, e, r, t, y, u, i, o, p, \na, s, d, f, g, h, j, k, l, \nz, x, v, b, n, m, \nShift+, ?, Clear, ., Done, \n╰─────┉─────╯
  aliases: shift-
CMD*/

let ato = User.getProperty("search")
let mert = ato + message;
let ness = User.getProperty("sees")
let mes = ato + " "
let nner = ato + "+"
let mes1 = User.getProperty("searching");


if(message=="╰─────┉─────╯"){
User.setProperty("search", ato + "+")
User.setProperty("searchres", mes1 + ato + "+")
User.setProperty("sees", ness + " ")
} else { 
User.setProperty("search", mert)
User.setProperty("searchres", mes1 + ato)
User.setProperty("sees", mert)
}
Bot.runCommand("/meta2")
