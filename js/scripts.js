var palCalc = function(index) {
  var regStr = index.join();
  var reverseStr = index.reverse().join();
  if (regStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("form#pal").submit(function(event) {
    event.preventDefault();
    var input = ($("input#pal-input").val());
    var palInput = input.split('')
    var result = palCalc(palInput);

    $(".pal").text(input);
    if (result === true) {
      $(".not").text(" ");
    } else {
      $(".not").text("not");
    }

    $("#result").show();
  });
});
