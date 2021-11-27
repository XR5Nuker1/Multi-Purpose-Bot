/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var panel2 = {
    title: "🆔 Admin ID ",
    description: "Please fill here your admin id where bot will send users location or phone number",
    icon: "key",

    fields: [{
            name: "ADMIN_ID",
            title: "Admin ID",
            description: "you can get your admin_id with BJS Bot.sendMessage(user.telegramid)",
            type: "string",
            placeholder: "Enter your telegram id here"
            // value: 100
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "AdminInfo",
    data: panel2
    // force: true // default false - save fields values
});
