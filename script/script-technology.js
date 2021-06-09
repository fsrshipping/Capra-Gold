// BACKGROUND SLIDER
const techSlider = document.getElementById("technology__slider");
const images = [
    "../img/tech/01.jpg",
    "../img/tech/02.jpg",
    "../img/tech/03.jpg",
    "../img/tech/04.jpg",
    "../img/tech/05.jpg",
    ];
var currentImage = 0;

function change() {
    if (currentImage < (images.length - 1)) {
        currentImage = currentImage + 1;
        techSlider.style.backgroundImage = `url(${images[currentImage]})`;
    } else if (currentImage = (images.length - 1)) {
        currentImage = 0;
        techSlider.style.backgroundImage = `url(${images[currentImage]})`;
    }
    setTimeout(change, 5000);
}

setTimeout(change, 3000);