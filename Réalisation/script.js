const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("button");

button.addEventListener("click", function addTask() {
  if(inputBox.value === "") { 
    alert('You Must Enter something ❗');
  }
   else {
    let li = document.createElement("li"); // create a new list item
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#x2716;";
    li.appendChi,ld(span);
  }
  inputBox.value = "";
  saveData();
})

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function displayTasks() {
  listContainer.innerHTML = localStorage.getItem("data");
}

displayTasks();