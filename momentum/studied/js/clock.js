// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
// const h1 = document.querySelector("h1");
// const USERNAME_KEY = "username";

// function handleLoginButtonClick(tomato){
//     const username = loginInput.value;
//     tomato.preventDefault();
//     console.log(username);
//     localStorage.setItem(USERNAME_KEY,username);
//     loginForm.classList.add("hidden");
//     h1.innerText = `Hello ${username}`;
//     h1.classList.remove("hidden");
    
// }

// function handleAtag(event){
//     event.preventDefault();
//     console.dir(event);
// }

// link.addEventListener("click", handleAtag);
// loginButton.addEventListener("click" , handleLoginButtonClick);

// const savedUserName = localStorage.getItem(USERNAME_KEY);
// if(savedUserName === null){
//     loginForm.classList.remove("hidden");
//     // h1.classList.add("hidden");
// }
// else{
//     // loginForm.classList.add("hidden");
//     h1.innerText = `Hello ${savedUserName}`;
//     h1.classList.remove("hidden");
// }




const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const loginInput = document.querySelector("#login-form input");
const h1_tag = document.querySelector("h1");


function handleLoginButton(event){
    event.preventDefault();
    const username = loginInput.value;
    
    localStorage.setItem("username" , username);
    loginForm.classList.add("hidden");
    
    // h1_tag.innerText = `Hello ${username}`;
    // h1_tag.classList.remove("hidden");
    paintGreeintgs(username);
}

function paintGreeintgs(name){
    h1_tag.classList.remove("hidden");
    h1_tag.innerText = `Hello ${name}`;
}

const savedUserName = localStorage.getItem("username");

if(savedUserName === null){
    loginForm.classList.remove("hidden");
    loginButton.addEventListener("click" , handleLoginButton);
}
else{
    // h1_tag.classList.remove("hidden");
    // h1_tag.innerText = `Hello ${savedUserName}`;
    paintGreeintgs(savedUserName);
}

