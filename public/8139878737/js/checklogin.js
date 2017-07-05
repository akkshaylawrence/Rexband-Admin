window.onload = function () {
   var user = firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
         window.location = 'admin-login.html';
      }
   });
};