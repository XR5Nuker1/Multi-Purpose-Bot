/*CMD
  command: /setup1
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
    title: "📳 Store Channel",
    description: "Please fill here your channel name that bot will store all data that got from users",
    icon: "chatboxes",
    fields: [{
            name: "channel_name",
            title: "Channel name",
            description: "Enter your channel @username ⚠️You must need to made bot admin of the channel.",
            type: "string",
            placeholder: "Enter your channel @username here"
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "Chanell",
    data: panel
    // force: true // default false - save fields values
});
