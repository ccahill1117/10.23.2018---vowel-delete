function splitString(stringToSplit, separator) {
    return (stringToSplit.split(separator));
  }

function letterDelete(inputArray, deleteArrayFunc) {
  var returnArray = [];
  for (var i = 0; i <= (inputArray.length)-1; i++) {
    if (deleteArrayFunc.includes(inputArray[i]))
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

    $("#inputStringHere").empty();
    $("#removeLetters").empty();
    $("#deletedStringHere").empty();

    var inputString = $("#stringInput").val();
    var deleteString = $("#letterInput").val();

    var stringArray = splitString(inputString, "");
    var deleteArray = splitString(deleteString, "")

    var deletedLetters = letterDelete(stringArray, deleteArray);

    $("#inputStringHere").append(stringArray);
    $("#removeLetters").append(deleteArray);
    $("#deletedStringHere").append(deletedLetters);

    console.log(stringArray);
    console.log(deleteArray);
    console.log(deletedLetters);

  });

});


// if ("aeiouAEIOU")
