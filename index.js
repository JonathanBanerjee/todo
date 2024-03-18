let input = document.getElementById("userInput");
let list = document.getElementById("myList");

let newLi;

document.getElementById("add").addEventListener("click", function (e) {
  // console.log(input, "hello world");
  // firstItem.innerHTML = input.value;
  newLi = document.createElement("li");

  // and give it some content
  const newItem = document.createTextNode(input.value);

  const completed = document.createElement("input");
  completed.type = "checkbox";

  // add the text node to the newly created div

  //Adding to each new List Item

  //Adding remove button to each item.
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove todo";
  removeButton.addEventListener("click", function (e) {
    newLi.remove();
  });

  // Adding edit button to each item.
  const editButton = document.createElement("button");
  editButton.textContent = "Edit todo";
  editButton.addEventListener("click", function (e) {
    //Placeholder for Editing
  });

  newLi.appendChild(newItem);
  newLi.appendChild(completed);
  newLi.appendChild(removeButton);
  list.appendChild(newLi);
  e.preventDefault();
});
