var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {

    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

//Render a new li for each to do 
for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
//code here



    todoList.appendChild(li);
    }
}


todoForm.addEventListener("submit", function(event) {
    event.preventDefault();


    var todoText = todoInput.value.trim();

    if(todoText === "") {
        return;
    }

    todos.push(todoText);
    todoInput.value = "";


    renderTodos();
});


todoList.addEventListener("click", function(event) {
    var element = event.target;

    if(element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        
    }
})
