/*CMD
  command: Assistance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: HTML Converter
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  photo: "https://telegra.ph/file/f1c82fb1de2e81b992015.jpg",
  caption: "HTML Mode\n \n*Bold text*:\n<b>Your Text</b>\n \n_Italic text_:\n<i>Your Text</i>\n \n[Hyperlink text](t.me/8383838e):\n`<a href='your link'>Your text</a>`\n \n`inline fixed-width code`:\n<code>Your text</code>, parse_mode: "Markdown"})
