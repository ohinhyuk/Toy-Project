const clock = document.querySelector("h2");

function sayHello(){
    console.log("Hello");
}

function updateClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const mins = String(now.getMinutes()).padStart(2,"0");
    const secs = String(now.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${mins} : ${secs}`;
}

updateClock();
setInterval(updateClock,1000);