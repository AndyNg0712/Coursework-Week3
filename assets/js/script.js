var pass=document.getElementById("passwords");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var pass = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   pass += chars.substring(randomNumber, randomNumber +1, randomNumber +2);
  }
        document.getElementById("passwords").value = pass;
 };