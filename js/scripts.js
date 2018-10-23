function splitString(stringToSplit, separator) {
    return (stringToSplit.split(separator));
  }

function vowelDelete(inputArray) {
  var returnArray = [];
  for (var i = 0; i <= inputArray.length-1; i++)
}

$(document).ready(function() {
  $("form#formSubmit").submit(function(event) {
    event.preventDefault();
    var inputString = $("#stringInput").val();

    var stringArray = splitString(inputString, "");



    console.log(stringArray);

  });

});


if ("aeiouAEIOU")
