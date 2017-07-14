$(document).ready(function(){
  $("form").submit(function (event){
    event.preventDefault();

    var question1 = $("#question1").val();
    console.log(question1);

  });
});
