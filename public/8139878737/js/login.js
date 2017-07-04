document.getElementById('login').addEventListener('click', logIn, false);
function logIn() {
   var password = document.getElementById('password').value;
   if (password.length < 5) {
      document.getElementById('password').classList.add("invalid");
      return;
   }
   document.getElementById('login').innerHTML = "LOGGING YOU IN"
}