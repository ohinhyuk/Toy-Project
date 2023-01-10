const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = []; 

function saveToDos(){
    localStorage.setItem("todos" , JSON.stringify(toDos));
}

function sexyFilter(item){
    return item.id !== deleteId;
}

function deleteList(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
    li.remove();

}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span =document.createElement("span");
    li.id = newTodo.id;
    span.innerText = newTodo.text;
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
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


function sayHelloo(item){
    console.log(item);
}

const savedToDos = localStorage.getItem("todos");

if(savedToDos){
    
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


