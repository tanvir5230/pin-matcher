let notifyBtn = document.getElementsByClassName("notify");
let generateBtn = document.getElementsByClassName("generate-btn")[0];
let pinGenInpField = document.getElementsByTagName("input")[0];
let pinTypeInpField = document.getElementsByTagName("input")[1];
let numberBtn = document.getElementsByClassName("number");
let clearAllBtn = document.getElementsByClassName("clear-all")[0];
let clearLastBtn = document.getElementsByClassName("clear-last")[0];
let submitBtn = document.querySelector(".submit-btn");
let pinHolderBlock = document.getElementsByClassName("half-width");
let actionLeft = document.getElementsByClassName("action-left")[0];
let tryLeftContainer = document.querySelector(".action-left span");
let tryLeftCount = tryLeftContainer.innerText.trim();
pinHolderBlock[1].style.display = "none";
// adding evnet listener to number buttons
for (let i = 0; i < numberBtn.length; i++) {
  const element = numberBtn[i];
  element.addEventListener("click", displayNumber);
}

// clearAll
clearAllBtn.addEventListener("click", clearAll);
function clearAll() {
  pinTypeInpField.value = "";
  pinTypeInpField.focus();
}

// clearLast
clearLastBtn.addEventListener("click", clearLast);
function clearLast() {
  let inputString = pinTypeInpField.value.trim();
  inputString = inputString.slice(0, inputString.length - 1);
  pinTypeInpField.value = inputString;
  pinTypeInpField.focus();
}
// displaying numbers
function displayNumber() {
  let numberTyped = this.innerText;
  pinTypeInpField.value += numberTyped;
}

// hiding the notify buttons

function hideMe() {
  notifyBtn[0].style.display = "none";
  notifyBtn[1].style.display = "none";
}
window.addEventListener("load", hideMe);

// generation of four digit pin number
function fourDigitNumber() {
  return Math.floor(Math.random() * 9000 + 999);
}

function displayGeneratedPin() {
  const number = fourDigitNumber();
  pinGenInpField.value = number;
  pinHolderBlock[1].style.display = "block";
}
generateBtn.addEventListener("click", displayGeneratedPin);

// submitting the number and check
function submit() {
  if (pinGenInpField.value == pinTypeInpField.value) {
    notifyBtn[1].style.display = "block";
    pinHolderBlock[0].style.display = "none";
    pinHolderBlock[1].style.display = "none";
  } else {
    notifyBtn[0].style.display = "block";
    tryLeftCount = parseInt(tryLeftCount);
    tryLeftCount--;
    tryLeftContainer.innerText = tryLeftCount;
    pinTypeInpField.value = "";
    pinTypeInpField.focus();
    if (tryLeftCount == 0) {
      notifyBtn[0].style.display = "none";
      pinHolderBlock[0].style.display = "none";
      pinHolderBlock[1].style.display = "none";
      document.body.innerHTML = "!!! You are not Human...";
      document.body.classList.add("notHuman");
    }
  }
}
submitBtn.addEventListener("click", submit);
