const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  // if we click add button without entering the text.
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // if we click add button with some input.
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // To add cross button
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    openPopup();
  }
  // To make input text field empty after clicking on 'Add' button.
  inputBox.value = "";
  saveInfo();
}

listContainer.addEventListener(
  "click",
  function (e) {
    // If we click on 'LI', it will check the LI, if it is already checked, then unchecks it.
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveInfo();
      openPopup();
      closePopup();
    } else if (
      // If we click on span it will remove that task.
      e.target.tagName === "SPAN"
    ) {
      e.target.parentElement.remove();
      saveInfo();
    }
  },
  false
);

// To store tasks in local storage
function saveInfo() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// To display task after refreshing the screen.
function displayTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();

// Popup functionalities
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
