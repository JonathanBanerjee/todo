let input = document.getElementById("userInput");
let firstItem = document.getElementById("list-0");
let list = document.getElementById("myList");

document.getElementById("add").addEventListener("click", function () {
  // console.log(input, "hello world");
  // firstItem.innerHTML = input.value;
  const newLi = document.createElement("li");

  // and give it some content
  const newItem = document.createTextNode(input.value);

  // add the text node to the newly created div
  newLi.appendChild(newItem);

  list.appendChild(newLi);
  Event.preventDefault();
});

// document.getElementById("remove").addEventListener("click", function () {
//   alert("Stop poking me too!");
// });
