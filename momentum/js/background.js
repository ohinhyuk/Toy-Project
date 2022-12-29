const images = [ "food1.png" , "food2.jpeg" , "food3.jpeg" , "food4.jpeg"];

const image = images[ Math.floor( Math.random() * images.length )];

const bgImage = document.createElement("img");
bgImage.src = `img/${image}`;

document.body.appendChild(bgImage);