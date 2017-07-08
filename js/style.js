var question = prompt("Are you from Washington?");
if (question === "Yes") {
  alert("Your college options are UW, CWU, EWU, WSU");
}

else {
  alert("Sorry, this survey only purtains to Washington State Colleges");
}

var colleges = ["UW", "CWU", "EWU", "WSU"];
var college0 = "UW";
var college1 = "CWU";
var college2 = "EWU";
var college3 = "WSU";
var doubleQuestion = prompt("Which college do you prefer?");
if (doubleQuestion === college1) {
alert("Great, a application will be sent to your email");
}
else {
  alert("Great Choice! Will send you your application soon!")
}

var name = prompt("Full Name");
var email = prompt("Email");
alert("Application will be sent to you soon!");


var subject = ["Math", "English", "Social Studies", "History"];
var subject1 = "Math";
var subject2 = "English";
var subject3 = "Social Studies";
var subject4 = "History";
var tripleQuestion = prompt("Whats your favorite subject?");
if (tripleQuestion === subject0) {
alert("Great!, we will send you the best Math college program in your area");
}
else {
  alert("Ok, we don't see any colleges that known for this subject in the area.");
}
