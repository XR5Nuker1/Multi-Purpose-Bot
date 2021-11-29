/*CMD
  command: /scanurl
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var oni = User.getProperty("dev")
if(!oni){
Bot.runCommand("/devlogin")
}else{
if(params){
  let arr = params.split(" ");
  
  let url = arr[0];

if(!arr[0]){
    Bot.sendMessage("To use command use this format: `/scanurl (your url)`");
  }else{
HTTP.get( {
    url: url,
    success: '/onLoading',
    error: '/onError'
    
    // if you need pass headers.
    // By default header "content-type" = 'application/json'
    // headers: { "content-type": null }
    // folow_redirects: true, // if you need folow by redirects
    // background: true - if you have timeout error
  } )

/* also you can send POST request
  HTTP.post( {
    url: url,
    success: '/onLoading ',
    body: {},  // body params
    // cookies: "" // cookies
    // headers: { "content-type": null } // - if you need headers
    // folow_redirects: true, // if you need folow by redirects
  } )
*/
}
}
}

