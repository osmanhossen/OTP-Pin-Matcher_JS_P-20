function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 6) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 1000000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();

  // display pin
  const displayPinField = document.getElementById("show-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (events) {
    const character = events.target.innerText;
    const typePinField = document.getElementById("typed_pin");
    const previousTypeNumber = typePinField.value;

    if (isNaN(character)) {
      if (character === "C") {
        typePinField.value = "";
      } else if (character === "<") {
        const digits = previousTypeNumber.split("");
        digits.pop();
        const remainDigits = digits.join("");
        typePinField.value = remainDigits;
      }
    } else {
      const newTypeNumber = previousTypeNumber + character;
      typePinField.value = newTypeNumber;
      console.log(typePinField);
    }
  });
document.getElementById("verify_pin").addEventListener("click", function () {
  // generate Pin
  const generatePinField = document.getElementById("show-pin");
  const currentCreatePin = generatePinField.value;
  // typed Pin
  const typePinNumber = document.getElementById("typed_pin");
  const typePin = typePinNumber.value;

  //jodi kono mgs (if else)er vitore use korte cay tahole oi gula opore declare kore dite hobe
  const correctPinMgs = document.getElementById("correct_pin");
  const incorrectPinMgs = document.getElementById("incorrect_pin");

  if (currentCreatePin === typePin) {
    // const correctPin = document.getElementById("correct_pin");
    correctPinMgs.style.display = "block";
    incorrectPinMgs.style.display = "none";
  } else {
    // const incorrectPin = document.getElementById("incorrect_pin");
    correctPinMgs.style.display = "none";
    incorrectPinMgs.style.display = "block";
  }
});
