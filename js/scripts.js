var total = 1;
var calculateFactorial = function(index) {
  for (var index; index > 0; index -= 1) {
    total *= index;
  }
};


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var factorial = parseInt($("input#factorial-input").val());
    var result = calculateFactorial(factorial);
    $(".factorial").text(factorial);

      $(".result").text(total);

    $("#result").show();
  });
});
