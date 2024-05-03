let input = document.getElementById("userInput");
let list = document.getElementById("myList");

// let newLi;

document.getElementById("add").addEventListener("click", function (e) {
  // On click, create a new list item
  let newLi = document.createElement("li");
  newLi.classList.add("listitems");

  const newItem = document.createElement("p");
  newItem.innerText = input.value;
  newItem.classList.add("task");

  //Create a checkbox
  const completed = document.createElement("input");
  completed.type = "checkbox";
  newItem.classList.add("completed");

  completed.addEventListener("change", function () {
    this.checked
      ? (newItem.style.textDecoration = "line-through")
      : (newItem.style.textDecoration = "none");
  });

  //Adding remove button to each item.
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove 🗑️";
  removeButton.addEventListener("click", function (e) {
    newLi.remove();
  });

  // Adding edit button to each item.
  const editButton = document.createElement("button");
  editButton.textContent = "Edit 📝";
  editButton.addEventListener("click", function (e) {
    newItem.contentEditable = true;
    newItem.style.backgroundColor = "#ccc5b9";
    newItem.style.color = "white";
    e.stopPropagation();
  });

  // Adding a save button to each item.
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save 🛟";
  saveButton.addEventListener("click", function (e) {
    newItem.contentEditable = false;
    newItem.style.backgroundColor = "#eaddcf";
    newItem.style.color = "black";
    e.stopPropagation();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  buttonContainer.appendChild(completed);
  buttonContainer.appendChild(newItem);

  newLi.appendChild(buttonContainer);

  // newLi.appendChild(newItem);

  list.appendChild(newLi);
  e.preventDefault();
});
