const images = [ "image1.jpeg", "image2.jpeg", "image3.jpeg" ];

const image = images[Math.floor(Math.random()*images.length)];

console.log(image);

document.body.style.backgroundImage = `url("img/${image}")`;
document.body.style.backgroundSize = "100%";