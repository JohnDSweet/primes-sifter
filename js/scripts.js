var primeVar = 2;
console.log(primeNums[0]);
var prime = function(index) {
 var numbers = [];
 for (i = index; i > 0; i -= 1) {
   numbers.push(i);
 };
 console.log(numbers);
  for (var i = numbers.length; i < 0; i -= 1){
    if (i % prime === 0) {
      numbers.slice(i);
    }
  }
}

};

$(document).ready(function() {
  $("form#pal").submit(function(event) {
    event.preventDefault();
    var palInput = parseInt($("input#pal-input").val());
    var result = prime(palInput);

    $(".pal").text(palInput);
    if (result === true) {
      $(".not").text(" ");
    } else {
      $(".not").text("not");
    }

    $("#result").show();
  });
});
