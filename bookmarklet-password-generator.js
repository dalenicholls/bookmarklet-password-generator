javascript: (function() {
  var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_';
  
  var pwd = '';
  for(var i = 0; i<12; i++){
  		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  var person = prompt("Suggested password:", pwd);
})();
