const bill = document.querySelector("#bill-amt");
const cash = document.querySelector("#cash");
const btnNext = document.querySelector("#btn-next");
const btnCheck = document.querySelector("#btn-check");
const noOfNotes = document.querySelectorAll(".noOfNotes");
const checkDiv = document.querySelector("#cash-div");
const returnChange = document.querySelector(".changeReturn");
const loader = document.querySelector("#loading");

let notes = [2000, 500, 100, 20, 10, 5, 1];
let returnNotes = [];

btnNext.addEventListener("click", function () {
  checkDiv.className = "show";
});

btnCheck.addEventListener("click", function () {
  let billAmt = bill.value;
  let cashAmt = cash.value;
  for (const notes of noOfNotes) {
    notes.innerText = "";
  }

  if (billAmt === "") {
    alert("Please, Enter Billing Amount!");
  } else if (cashAmt === "") {
    alert("Please, Enter Cash Amount!");
  } else if (billAmt > cashAmt) {
    alert("Unsufficient cash, please enter adequate cash amount!");
  } else if (cashAmt === billAmt) {
    alert("No Change!");
  } else {
    loader.className = "show";
    setTimeout(function () {
      loader.className = loader.className.replace("show", "");
      returnChange.className = output.className.replace("", "show");
    }, 2000);
    let returnAmount = parseInt(cashAmt) - parseInt(billAmt);

    for (let i = 0; i < notes.length; i++) {
      returnNotes[i] = Math.floor(returnAmount / notes[i]);
      returnAmount = returnAmount - notes[i] * returnNotes[i];
      noOfNotes[i].innerText = returnNotes[i];
      if (returnAmount === 0) {
        break;
      }
    }

    for (const notes of noOfNotes) {
      if (notes.innerText == "0") {
        notes.innerText = "";
      }
    }

    returnNotes = [];
  }
});
