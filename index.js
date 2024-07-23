let tasksArray = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

console.log(tasksArray);
let input = document.getElementById("userInput");
input.focus();
let list = document.getElementById("myList");

renderList();
// Add a task
document.getElementById("add").addEventListener("click", function (e) {
  e.preventDefault();
  // Reading what is in local storage
  // const tasks = JSON.parse(localStorage.getItem("tasks"));
  // console.log(tasks);
  if (!tasksArray) {
    let firstItem = [];
    firstItem.push({ task: input.value, completed: false });
    console.log(firstItem);
    localStorage.setItem("tasks", JSON.stringify(firstItem));
  } else {
    tasksArray.push({ task: input.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  }
  // tasksArray.push(input.value);
  renderList();
  input.value = "";
  input.focus();

  // On click, create a new list item
  e.preventDefault();
});

function renderList() {
  const outputArray = tasksArray.forEach((e) => renderItem(e));

  // const joinedArray = outputArray.join("");
  // list.innerHTML = joinedArray;
}

function renderItem(input) {
  let newLi = document.createElement("li");
  newLi.classList.add("listitems");
  const newItem = document.createElement("p");
  newItem.innerText = input.task;
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
    localStorage.removeItem();
  });

  // Adding edit button to each item.
  const editButton = document.createElement("button");
  editButton.textContent = "Edit 📝";
  editButton.addEventListener("click", function (e) {
    newItem.contentEditable = true;
    newItem.style.backgroundColor = "gainsboro";
    newItem.style.color = "black";
    newItem.focus();
    e.stopPropagation();
  });

  // Adding a save button to each item.
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save 🛟";
  saveButton.addEventListener("click", function (e) {
    newItem.contentEditable = false;
    newItem.style.backgroundColor = "";
    e.stopPropagation();
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(newItem);
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  buttonContainer.appendChild(completed);

  newLi.appendChild(buttonContainer);

  list.appendChild(newLi);
}
