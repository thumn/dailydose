var allUsers = [];

class User {
  constructor(username) {
    this.username = username;
    this.goals = [];
    this.motivationalQuotes = [];
  }
}

function checkTextField(field) {
    var userinput = document.getElementById("logintext").value;
    var usernameLength = userinput.length;
    var usernameString = String(userinput).toLowerCase()
    if (usernameLength == 0) {
        alert("Please enter a username.");
    }
    else {
      // if allUsers.indexOf(usernameString) > -1 {
      //   alert("This username is already taken.")
      // }
      // else {
      //   allUsers.push(usernameString);
      //   alert(usernameString);
      // }
      location="../templates/home.html";
}
}


// source: http://stackoverflow.com/questions/14659098/checking-if-a-textbox-is-empty-in-javascript
//
// function checkTextField(field) {
//     var userinput = document.getElementById("logintext").value;
//     var usernameLength = userinput.length;
//     if (usernameLength == 0) {
//         alert("Please enter a username.");
//     }
//     else {
//       const document.getElementById("logintext").value = new User(document.getElementById("logintext").value);
//       allUsers.push(userinput);
//       alert(window.location.href="./home.html");
//     }
//   }
