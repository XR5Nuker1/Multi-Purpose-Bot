/*CMD
  command: /setup
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
        }
    ]
}

AdminPanel.setPanel({
    panel_name: "AdminInfo",
    data: panel2
    // force: true // default false - save fields values
});
