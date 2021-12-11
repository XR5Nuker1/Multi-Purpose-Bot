/*CMD
  command: /postpolicy
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Post

  <<ANSWER
*Please accept our post policy*

_Before you can use this feature please accept our post policy_.
1. We are not responsible for ads or sponsored message and links sent to your channel. 
_Reason_: These ads are not sent by us there are sent by the bot server. This was done to cover costs of the bot (not money)
_Solution_: If this so happens you can delete the ad if you are Admin of the channel.

2. Do not use the bot to send bot post porn links. You can't upload photos or videos. If you do so you will be restricted from using this mode. This is what will happen if your have number of cases.
Case 1: Warning
Case 2: Final Warning
Case 3: Mode Suspension (1 week)
            : Get Special Case
Special Case 1: Mode Suspension (2 month)
Special Case 2: Mode Suspension (Permanent)
_Reason_: No answer (the answer is obvious)
_Solution_: Don't upload porn links

3. Use the bot wisely, don't not use the bot to upload to much message. Also read Instructions on how to use the bot.
_Reason_: Bot runs on costs, 1 command is a cost so please save the bot from costs unless you want to donate.
_Solution_: Don't upload a lot of messages

If you accept press accept if you don't press decline. (If press decline you will not use this mode)
  ANSWER
  keyboard: Accept, Decline
  aliases: 
CMD*/

if(message=="Accept"){
Bot.setProperty("postallow", chat.chatid)
Bot.runCommand("/postok")
}else{
Bot.sendMessage("Declined")
}
