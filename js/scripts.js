function splitString(stringToSplit, separator) {
    return (stringToSplit.split(separator));
  }

function letterDelete(inputArray, vowelArray) {
  var returnArray = [];
  for (var i = 0; i <= (inputArray.length)-1; i++) {
    if (vowelArray.includes(inputArray[i]))
    {
    returnArray.push("-")
    }
    else {returnArray.push(inputArray[i])
    }
  }
  return returnArray;
}

$(document).ready(function() {
  $("form#formSubmit").submit(function(event) {
    event.preventDefault();
    var inputString = $("#stringInput").val();
    var deleteString = $("#letterInput").val();

    var stringArray = splitString(inputString, "");
    var deleteArray = splitString(deleteString, "")

    var deletedLetters = letterDelete(stringArray, deleteArray);

    $("#inputStringHere").text(stringArray);
    $("#removeLetters").text(deleteArray);
    $("#deletedStringHere").text(deletedLetters);

    console.log(stringArray);
    console.log(deleteArray);
    console.log(deletedLetters);

  });

});


// if ("aeiouAEIOU")
