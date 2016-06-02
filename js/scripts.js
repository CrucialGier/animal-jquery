
$(document).ready(function() {


  $("#pet-choose").click(function() {
    alert("hello");
    var pet = parseInt($("#answer1").val()) + parseInt($("#answer2").val()) + parseInt($("#answer3").val()) + parseInt($("#answer4").val());
    console.log(pet);
    alert(pet);

    debugger;
    if (pet <= 2) {
      $("#rock").show();
      $("#turtle #snake").hide();
      // $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (2 < pet && pet <= 4) {
      $("#rock").hide();
      $("#turtle").show();
      $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (4 < pet && pet <= 6) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").show();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (6 < pet && pet <= 8) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").hide();
      $("#bunny").show();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (8 < pet && pet <= 10) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").show();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (10 < pet && pet <= 12) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").show();
      $("#duck").hide();
      $("#puppy").hide();
    } else if (12 < pet && pet <= 14) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").show();
      $("#puppy").hide();
    } else if (14 < pet && pet <= 16) {
      $("#rock").hide();
      $("#turtle").hide();
      $("#snake").hide();
      $("#bunny").hide();
      $("#hamham").hide();
      $("#hedgehog").hide();
      $("#duck").hide();
      $("#puppy").show();
    } else {
      console.log("don't get a pet");
    };
  });


  $("#turtle").click(function() {
    $("#turtle p").toggle();
  });

  $("#snake").click(function() {
    $("#snake p").toggle();
  });

  $("#rock").click(function() {
    $("#rock p").toggle();
  });

  $("#bunny").click(function() {
    $("#bunny p").toggle();
  });

  $("#duck").click(function() {
    $("#duck p").toggle();
  });


  $("#hamham").click(function() {
    $("#hamham p").toggle();
  });

  $("#hedgehog").click(function() {
    $("#hedgehog p").toggle();
  });

  $("#puppy").click(function() {
    $("#puppy p").toggle();
  });

});
