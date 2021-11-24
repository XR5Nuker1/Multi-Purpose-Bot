/*CMD
  command: /345
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var nip = User.getProperty("link")

HTTP.get({
    url: "http://tinyurl.com/api-create.php?url=" + nip,
    success: "67onSuccess"
  })
