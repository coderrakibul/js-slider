// get all the image link from image folder
const images = [
    "images/pic-1.jpg",
    "images/pic-2.jpeg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg"
];

// set funhction and condition here
let imgIndex = 0;
const imgElement = document.getElementById("slider-img");
setInterval( () =>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgElement.setAttribute("src", imgUrl);
    imgIndex++;
}, 1000);