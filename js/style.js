$(document).ready(function(){
  $("form").submit(function (event){
    event.preventDefault();
//;
  //  var question1 = $("#question1").val(); for the text box
  var question1 = $("input:radio[name=question1]:checked").val();
  var question2 = $("input:radio[name=question2]:checked").val();
  var question3 = $("input:radio[name=question3]:checked").val();
  var question4 = $("input:radio[name=question4]:checked").val();
  var question5 = $("input:radio[name=question5]:checked").val();


    if(question1 === "seattle" && question2 ===  "Math" && question3 === "Basketball" && question4 === "Pho" && question5 == "Yes") { 

      $("#output h1").text("Your Match is the University Of Washington!");
    }
    else {
      $("#output h1").text("Your Match is the University Of Oregon!");
    }

  });
});
