
console.log('app.js is connected')

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("textOne").value;
    var wordTwo = document.getElementById("textTwo").value;
    var wordThree = document.getElementById("textThree").value;
    var wordFour = document.getElementById("textFour").value;
    var wordFive = document.getElementById("textFive").value;
    var wordSix = document.getElementById("textSix").value;
    var wordSeven = document.getElementById("textSeven").value;
    var wordEight = document.getElementById("textEight").value;
    

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight)

    var paragraph = "<p> At the Temple, there can be found a great number of " + wordOne + " ." + "  The rooms theirin hold the key to unlocking the " + wordTwo + "." + " You must carefully " + wordThree + "." + " through the halls and architeture " + wordFour + " expeditiously.  Some areas are "+ wordFive + ". " + "Others have " + wordSix + " treasure! " + wordSeven +" and " + wordEight + " figures.</p>"

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}