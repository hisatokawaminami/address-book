$(document).ready(function() {

//  $("#formOne").submit(function(event) {
//    event.preventDefault();
//    var firstName = $("input#firstName").val();
//    var lastName = $("input#lastName").val();
//    $("ul").prepend(firstName + " " + lastName);
//    });

  $("#formOne").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var streetAddress = $("input#streetAddress").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zipCode = $("input#zipCode").val();
    var phone = $("input#phone").val();
    var email = $("input#email").val();


    console.log(email);

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".streetAddress").text(streetAddress);
    $(".city").text(city);
    $(".state").text(state);
    $(".zipCode").text(zipCode);
    $(".phone").text(phone);
    $(".email").text(email);
    $("ul").prepend("<li>" + firstName + " " + lastName + "</li>");


    // $("#submittedInfo").show();


    $(".mid-col").click(function(event) {
      event.preventDefault();
      $("#submittedInfo").hide();
      $("#submittedInfo").show();
      // var firstName = $("input#firstName").val();
      // var lastName = $("input#lastName").val();
      // $("ul").prepend(firstName + " " + lastName);
      });
  });
});
