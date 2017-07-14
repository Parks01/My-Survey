$(document).ready(function(){
  $("form").submit(function (event){
    event.preventDefault();

  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("input:radio[name=question3]:checked").val();
  var question4 = $("input:radio[name=question4]:checked").val();
  var question5 = $("input:radio[name=question5]:checked").val();


    if(question1 === "seattle" && question2 ===  "math" && question3 === "basketball" && question4 === "pho" && question5 == "yes"){

      $("#output h1").text("Your match is the University Of Washington!")
    }
    else if(question1 === "oregon" && question2 ===  "english" && question3 === "soccer" && question4 === "fish" && question5 == "no") {

      $("#output h1").text("Your match is the University Of Oregon!");
    }

  });
});
