function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    Co.accessToken = response.authResponse.accessToken;
    //socket
    // socket.emit("send-access-token", Co.accessToken);
    Co.checkConnect = response.status;
    testAPI();
    // console.log(response.id);
    // return response;
  } else {
    console.log('not connected');
  }
}
function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function () {
  FB.init({
    appId: '157289944902524',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
};

(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/vi_VN/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function testAPI() {
  Co.checkCallbackLogin = true;
  FB.api(
    '/me', function (response) {
      Co.checkId = response.id;
      Co.nameFB = response.name;
    });
  FB.api(
    '/me/friends',
    function (response) {
      if (response && !response.error) {
      }
    }
  );
  FB.api(
    '/me/scores',
    'get',
    function (response) {
      // console.log(response)
      Co.userPointStorage = response.data[0].score;
    });
  FB.api(
    '/157289944902524/scores',
    'get',
    function(response){
      // console.log(response.data);
      Co.storagePointFriends = response.data;
    }
  );
  return Co.checkCallbackLogin, Co.userPointStorage, Co.checkId, Co.nameFB;
}
