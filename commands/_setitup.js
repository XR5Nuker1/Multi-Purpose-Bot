/*CMD
  command: /setitup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var panel = {
    // Pabel title
    title: "Group DATA",
    description: "Please fill here your channel name that bot will store all data that got from users",
    icon: "lock",
    fields: [{
            name: "Group",
            title: "DATA",
            description: "Enter your channel @username ⚠️You must needmade bot admin of the channel.",
            type: "string",
            placeholder: "Enter your l @username here"
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "GROUP",
    data: panel
    // force: true // default false - save fields values
});
