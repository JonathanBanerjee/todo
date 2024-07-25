let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];

let input = document.getElementById("userInput");
input.focus();
let list = document.getElementById("myList");

renderList();

// Add a task
document.getElementById("add").addEventListener("click", function (e) {
  e.preventDefault();

  if (input.value.trim() !== "") {
    tasksArray.push({ task: input.value, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    renderList();
    input.value = "";
    input.focus();
  }
});

function renderList() {
  list.innerHTML = "";
  tasksArray.forEach((task, index) => {
    list.appendChild(renderItem(task, index));
  });
}

function renderItem(task, index) {
  let newLi = document.createElement("li");
  newLi.classList.add("listitems");

  const newItem = document.createElement("p");
  newItem.innerText = task.task;
  newItem.classList.add("task");
  if (task.completed) {
    newItem.classList.add("completed");
    newItem.style.textDecoration = "line-through";
  }

  const completed = document.createElement("input");
  completed.type = "checkbox";
  completed.checked = task.completed;

  completed.addEventListener("change", function () {
    tasksArray[index].completed = this.checked;
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    newItem.classList.toggle("completed", this.checked);
    this.checked
      ? (newItem.style.textDecoration = "line-through")
      : (newItem.style.textDecoration = "none");
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove 🗑️";
  removeButton.addEventListener("click", function () {
    tasksArray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    renderList();
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit 📝";
  editButton.addEventListener("click", function () {
    newItem.contentEditable = true;
    newItem.style.backgroundColor = "gainsboro";
    newItem.style.color = "black";
    newItem.focus();
  });

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save 🛟";
  saveButton.addEventListener("click", function () {
    newItem.contentEditable = false;
    newItem.style.backgroundColor = "";
    tasksArray[index].task = newItem.innerText;
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
  });

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  buttonContainer.appendChild(newItem);
  buttonContainer.appendChild(saveButton);
  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(removeButton);
  buttonContainer.appendChild(completed);

  newLi.appendChild(buttonContainer);

  return newLi;
}
