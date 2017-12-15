function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    Co.accessToken = response.authResponse.accessToken;
    //socket
    // socket.emit("send-access-token", Co.accessToken);
    testAPI();
    Co.checkConnect = response.status;
    // console.log(response.id);
    // return response;
  } else {
  }
}
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
FB.init({
  appId      : '157289944902524',
  cookie     : true,
  xfbml      : true,
  version    : 'v2.8'
});
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function testAPI() {
  // console.log(response.id);
  // console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    // console.log('Successful login for: ' + response.name);
    // console.log('Thanks for logging in, ' + response.name + '!');
    // console.log(response.id);
    Co.checkId = response.id;
    Co.nameFB = response.name;
    // 1068593363280872
    // 114898549297486
    // console.log(response.status);
    // console.log(Co.checkId);
  });
}
