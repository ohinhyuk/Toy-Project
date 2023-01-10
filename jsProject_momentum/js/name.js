const form = document.querySelector("#form-name");
const formInput = form.querySelector("input");
const formName = form.querySelector("h2");

const USER_NAME = "username";
const HIDDEN = "hidden";

function handleFormSubmit(event){
    event.preventDefault();

    const newName = formInput.value;
    formInput.value = "";
    
    localStorage.setItem(USER_NAME,newName);
    formInput.classList.add(HIDDEN);

    formName.innerText =`Hello ${newName}`;
    formName.classList.remove(HIDDEN);    

}
const savedName = localStorage.getItem(USER_NAME);
if(savedName === null){
    formInput.classList.remove(HIDDEN);
}
else{
    formName.innerText = `Hello ${savedName}`;
    formName.classList.remove(HIDDEN);
}

form.addEventListener("submit",handleFormSubmit);
