console.log(document.cookie);

// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

function getCookie(name){
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

function checkCookies(){
  var value = getCookie("user");
  if (value === null){
    document.location = ("http://127.0.0.1:3000/");
    console.log("Don't hack my site! ")
  }
}

function signOut() {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.location = "http://127.0.0.1:3000/";
}
