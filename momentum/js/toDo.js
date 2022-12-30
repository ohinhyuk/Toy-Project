const form_toDo = document.querySelector("#form-toDo");
const input_toDo = document.querySelector("#form-toDo input");
const ul_toDo = document.querySelector("#form-toDo ul");

let toDos = [];

function handleDelete(event){
    event.preventDefault();
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    li.remove();
    saveToDo(toDos);
}

function saveToDo(toDos){
    const convertedToDos = JSON.stringify(toDos);
    localStorage.setItem("todos",convertedToDos);
}


function inputElementInUl(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const button = document.createElement("button");
    button.innerText = "✗";
    button.id = "btn";
    button.type = "button";
    li.appendChild(button);
    button.addEventListener("click",handleDelete);
    
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    li.appendChild(span);
    
    ul_toDo.appendChild(li);
    toDos.push(newToDoObj);
    saveToDo(toDos);
}

function handleFormSubmit(event){
    event.preventDefault();

    const newToDoObj ={
        text : input_toDo.value,
        id : Date.now(),
    };
    input_toDo.value= "";

    inputElementInUl(newToDoObj);
}

const savedToDos = localStorage.getItem("todos");

if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(inputElementInUl);
}

form_toDo.addEventListener("submit", handleFormSubmit);