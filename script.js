/* declare variables */
let upperLimit;
let guessedNumber;
let randomNumber;
let numberToGuess;
let numberOfTries;
// $("#alert-el").hide();

/* get Nickname */
document
  .getElementById("nick-el")
  .addEventListener("click", function nickname() {
    nickEl = document.getElementById("userInputNickname").value;
    document.getElementById("playersNickname").innerHTML =
      "Your nickname is: " + nickEl;
    return nickEl;
  });

/* set range of number and generate the the number to guess  */
document
  .getElementById("rangeOfNumber")
  .addEventListener("click", function rangeOfNumber() {
    upperLimit = Number(document.getElementById("userInputNumber").value);
    randomNumber = Math.floor(Math.random() * upperLimit);
    document.getElementById("maxNumber").innerHTML =
      "Distance from 0 to: " + upperLimit;
    numberToGuess = randomNumber;
    return numberToGuess;
  });

/* set the attempts */
document
  .getElementById("playersTry")
  .addEventListener("click", function playersTry() {
    numberOfTries = Number(document.getElementById("trys").value);
    document.getElementById("count").innerHTML =
      "Remaining attempts: " + numberOfTries;
    return numberOfTries;
  });

/* restart game */
document.getElementById("restartGame").addEventListener("click", restartGame);
function restartGame() {
  trys.value = "";
  userInputNumber.value = "";
  guess.value = "";
  userInputNickname.value = "";
  location.reload();
}

/* save history tries*/
let historyTries = [];

/* transfer parameter */
document.getElementById("startGame").addEventListener("click", function () {
  startGame(numberToGuess); // not numberOfTries
});

/* start game and change DOM */
function startGame(numberToGuess) {
  guessedNumber = document.getElementById("guess").value;
  console.log(
    "Your guessed number is: " +
      guessedNumber +
      " The number to guess is: " +
      numberToGuess +
      " Remaining attempts: " +
      numberOfTries
  );
  historyTries.push(guessedNumber);
  document.getElementById("trysHistory").textContent =
    "Your attempted numbers: " + historyTries;
  numberOfTries--;
  if (numberOfTries > 0) {
    if (guessedNumber < numberToGuess) {
      document.getElementById("count").innerHTML =
        "Remaining attempts: " + numberOfTries;
      document.getElementById("textInfo").innerHTML = "You guessed to low!";
    } else if (guessedNumber > numberToGuess) {
      document.getElementById("count").innerHTML =
        "Remaining attempts: " + numberOfTries;
      document.getElementById("textInfo").innerHTML = "You guessed to high!";
    } else {
      document.getElementById("textInfo").style.display = "none";
      document.getElementById("count").innerHTML =
        "Remaining attempts: " + numberOfTries;
      a = 1;
      show_hide();
    }
  } else {
    document.getElementById("count").innerHTML =
      "Remaining attempts: " + numberOfTries;
    a = 2;
    show_hide();
    // show_hide();
    // $("#alert-el").show();
    // alert("Spiel beendet, keine Versuche mehr übrig!")
    // restartGame();
  }

  /* Save Highscore */
  // const highScores = JSON.parse(localStorage.getItem("highScores")) || []; // String becomes an Object with parse
  // console.log(highScores);

  // document
  //   .getElementById("saveScore")
  //   .addEventListener("click", function save() {
  //     const score = {
  //       name: nickEl,
  //       versuche: numberOfTries,
  //     };

  //     document.getElementById('trysLocalSt').innerText = numberOfTries;
  //     document.getElementById('nickname-el').innerText = nickEl;
  //     highScores.push(score);

  //     localStorage.setItem("highScores", JSON.stringify(highScores)); // convert an String to an Array with stringify
  //     // console.log(highScores);

  //     /* Insert in the table */
  //     storageFunction();
  //   });
}

/* hide and show bootstrap alert*/
let a;
show_hide();

function show_hide() {
  if (a == 1) {
    document.getElementById("alert-success").style.display = "inline";
  } else if (a == 2) {
    document.getElementById("alert-el").style.display = "inline";
  } else {
    document.getElementById("alert-el").style.display = "none";
    document.getElementById("alert-success").style.display = "none";
  }
}

/* Save in local storage */
// function storageFunction() {
//   let item = JSON.parse(localStorage.getItem("highScores"));
//   let insertTable = [];
//   for (let j = 0; j < item.length; j++) {
//     insertTable += "<tr>";
//     for (let key in item[j]) {
//       insertTable += "<td class= text-center>" + item[j][key] + "</td>";
//     }
//     insertTable += "</tr>";
//   }
//   insertScore.innerHTML = insertTable;
//   console.log(insertTable);
// }

/* Clear localStorage */
// function deleteLocalStorage() {
//   localStorage.clear();
// }

/* check if localStorage */
// if (localStorage) {
//   storageFunction();
// }
