// function statusChangeCallback(response) {
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       testAPI();
//     } else {
//       // The person is not logged into your app or we are unable to tell.
//       console.log('Please log ' +
//         'into this app.');
//     }
//   }

//   // This function is called when someone finishes with the Login
//   // Button.  See the onlogin handler attached to it in the sample
//   // code below.
//   function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//     });
//   }

//   window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '167087887367673',
//     cookie     : true,  // enable cookies to allow the server to access
//                         // the session
//     xfbml      : true,  // parse social plugins on this page
//     version    : 'v2.8' // use graph api version 2.8
//   });

//   // FB.login(function(response) {
//   //   if (response.status === 'connected') {
//   //     // Logged into your app and Facebook.
//   //   } else {
//   //     // The person is not logged into this app or we are unable to tell.
//   //   }
//   // });
//   // FB.getLoginStatus(function(response) {
//   //   statusChangeCallback(response);
//   // });

//   };

//   // Load the SDK asynchronously
//   (function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/vi_VN/sdk.js";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'facebook-jssdk'));

//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//     });
//   }


function statusChangeCallback(response) {
  // console.log('statusChangeCallback');
  // console.log(response);
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
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
  appId      : '167087887367673',
  cookie     : true,
  xfbml      : true,
  version    : 'v2.8'
});
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
function testAPI() {
  // console.log(response);
  // console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    // console.log('Successful login for: ' + response.name);
    // console.log('Thanks for logging in, ' + response.name + '!');
    Co.checkId = response.id;
    // console.log(response.status);
    // console.log(Co.checkId);
  });
}
