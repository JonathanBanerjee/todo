let input = document.getElementById("userInput");
let list = document.getElementById("myList");

let newLi;

document.getElementById("add").addEventListener("click", function (e) {
  // On click, create a new list item
  newLi = document.createElement("li");

  const newItem = document.createTextNode(input.value);

  //Create a checkbox
  const completed = document.createElement("input");
  completed.type = "checkbox";

  completed.addEventListener("change", function () {
    if (this.checked === true) {
      newLi.style.textDecoration = "line-through";
    } else {
      newLi.style.textDecoration = "none";
    }
  });
  // if (completed.checked) {
  //   console.log("hello world");
  // }

  //Adding remove button to each item.
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove todo";
  removeButton.addEventListener("click", function (e) {
    newLi.remove();
  });

  // Adding edit button to each item.
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function (e) {
    newLi.contentEditable = true;
    newLi.style.backgroundColor = "blue";
    e.stopPropagation();
  });

  // Adding a save button to each item.
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", function (e) {
    newLi.contentEditable = false;
    newLi.style.backgroundColor = "blanchedalmond";
    e.stopPropagation();
  });

  newLi.appendChild(saveButton);
  newLi.appendChild(editButton);

  newLi.appendChild(newItem);
  newLi.appendChild(completed);
  newLi.appendChild(removeButton);
  list.appendChild(newLi);
  e.preventDefault();
});
