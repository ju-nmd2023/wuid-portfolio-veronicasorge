const headingElement = document.getElementById("heading");
const inputElement = document.getElementById("input-name");
const buttonElement = document.getElementById("submit-button");

buttonElement.addEventListener("click", function (event) {
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    headingElement.innerText =
      "thank you for reaching out " + enteredName + "!";
  } else {
    headingElement.innerText = "send your request";
  }
});
