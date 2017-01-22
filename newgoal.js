allGoals = {};

function newGoalSubmit() {
  var goalName = document.getElementById("goaltext").value;
  var numDaysSelected = document.querySelectorAll('input[type="checkbox"]:checked').length;
  alert("Your goal has been recorded!");
}
