const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDos = []; 

function saveToDos(){
    localStorage.setItem("todos" , JSON.stringify(toDos));
}

function deleteList(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span =document.createElement("span");
    span.innerText = newToDo;
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerText = "@";
    li.appendChild(button);
    button.addEventListener("click", deleteList);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo= toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);