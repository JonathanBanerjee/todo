let input = document.getElementById("userInput");
let firstItem = document.getElementById("list-0");
let list = document.getElementById("myList");
let newLi;

document.getElementById("add").addEventListener("click", function (e) {
  // console.log(input, "hello world");
  // firstItem.innerHTML = input.value;
  newLi = document.createElement("li");

  // and give it some content
  const newItem = document.createTextNode(input.value);

  // add the text node to the newly created div
  newLi.appendChild(newItem);

  list.appendChild(newLi);
  e.preventDefault();
});

document.getElementById("remove").addEventListener("click", function (e) {
  newLi.remove();
});

document.getElementById("edit").addEventListener("click", function (e) {
  console.log(newLi);
});
