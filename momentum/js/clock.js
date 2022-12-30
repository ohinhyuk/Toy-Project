const clock = document.querySelector("#clock");

function handleNowTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    // console.log(Date.getHours());
    // console.log(hours);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // console.log("a");
}

handleNowTime();

setInterval(handleNowTime , 1000);