let input = document.getElementById("userInput");
input.focus();
let list = document.getElementById("myList");

let itemsArray = localStorage.getItem("listitems")
  ? JSON.parse(localStorage.getItem("listitems"))
  : [];

// Save list to localStorage
function saveList() {
  localStorage.setItem("listitems", JSON.stringify(itemsArray));
}

// Add item to the list
function addItem(text, completed = false) {
  if (text.trim() === "") {
    alert("Please enter a todo");
    return;
  }

  let newLi = document.createElement("li");
  newLi.classList.add("listitems");

  const newItem = document.createElement("p");
  newItem.innerText = text;
  newItem.classList.add("task");

  input.value = "";
  input.focus();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  checkbox.addEventListener("change", function () {
    this.checked
      ? (newItem.style.textDecoration = "line-through")
      : (newItem.style.textDecoration = "none");
    saveList();
  });

  if (completed) {
    newItem.style.textDecoration = "line-through";
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove 🗑️";
  removeButton.addEventListener("click", function () {
    newLi.remove();
    itemsArray = itemsArray.filter((item) => item.text !== text);
    saveList();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit 📝";
  editButton.addEventListener("click", function (e) {
    newItem.contentEditable = true;
    newItem.style.backgroundColor = "gainsboro";
    newItem.style.color = "black";
    newItem.focus();
    e.stopPropagation();
  });

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save 🛟";
  saveButton.addEventListener("click", function (e) {
    newItem.contentEditable = false;
    newItem.style.backgroundColor = "";
    itemsArray = itemsArray.map((item) =>
      item.text === text
        ? { text: newItem.innerText, completed: checkbox.checked }
        : item
    );
    saveList();
    e.stopPropagation();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(newItem);
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  buttonContainer.appendChild(checkbox);

  newLi.appendChild(buttonContainer);
  list.appendChild(newLi);

  itemsArray.push({ text, completed });
  saveList();
}

// Load items from localStorage
function loadList() {
  itemsArray.forEach((item) => addItem(item.text, item.completed));
}

document.getElementById("add").addEventListener("click", function (e) {
  addItem(input.value);
  e.preventDefault();
});

loadList();
