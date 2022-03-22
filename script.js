/* declare variables */
let upperLimit;
let guessedNumber;
let randomNumber;
let numberToGuess;
let numberOfTries;

/* get Nickname */
document
  .getElementById("nick-el")
  .addEventListener("click", function nickname() {
    nickEl = document.getElementById("userInputNickname").value;
    document.getElementById("playersNickname").innerHTML = nickEl;
    return nickEl;
  });

/* set range of number and generate the the number to guess  */
document
  .getElementById("rangeOfNumber")
  .addEventListener("click", function rangeOfNumber() {
    upperLimit = Number(document.getElementById("userInputNumber").value);
    randomNumber = Math.floor(Math.random() * upperLimit);
    document.getElementById("maxNumber").innerHTML = upperLimit;
    numberToGuess = randomNumber;
    return numberToGuess;
  });

/* set the attempts */
document
  .getElementById("playersTry")
  .addEventListener("click", function playersTry() {
    numberOfTries = Number(document.getElementById("trys").value);
    document.getElementById("count").innerHTML = numberOfTries;
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
  // console.log(
  //   "Your guessed number is: " +
  //     guessedNumber +
  //     " The number to guess is: " +
  //     numberToGuess +
  //     " Remaining attempts: " +
  //     numberOfTries
  // );
  historyTries.push(guessedNumber);
  document.getElementById("trysHistory").textContent = historyTries;
  numberOfTries--;
  if (numberOfTries > 0) {
    if (guessedNumber < numberToGuess) {
      document.getElementById("count").innerHTML = numberOfTries;
      document.getElementById("textInfo").innerHTML = "Low";
    } else if (guessedNumber > numberToGuess) {
      document.getElementById("count").innerHTML = numberOfTries;
      document.getElementById("textInfo").innerHTML = "High";
    } else {
      document.getElementById("textInfo").style.display = "none";
      document.getElementById("count").innerHTML = numberOfTries;
      a = 1;
      show_hide();
    }
  } else {
    document.getElementById("count").innerHTML = numberOfTries;
    a = 2;
    show_hide();
  }
}

/* hide and show bootstrap alert*/
let a;
show_hide();

function show_hide() {
  let alertSuccess = document.getElementById("alert-success");
  let alertDanger = document.getElementById("alert-danger");
  if (a == 1) {
    alertSuccess.classList.remove("d-none");
  } else if (a == 2) {
    alertDanger.classList.remove("d-none");
    document.getElementById("correctNumber").innerHTML = numberToGuess;
  } else {
    alertDanger.classList.add("d-none");
    alertSuccess.classList.add("d-none");
  }
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
