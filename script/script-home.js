// NEWSLETTER SUBSCRIPTION BUTTON

const subscribeButton = document.getElementById("subscribe__button");
const subscribeInput = document.getElementById("subscribe__form");
const subscribeMessage = document.getElementById("subscribe__message");

subscribeButton.addEventListener("click", function() {
    checkSubscribeForm();
});

subscribeInput.addEventListener("keypress", function(e) {
    if (e.key == 'Enter') {
        checkSubscribeForm();
    }
})

function checkSubscribeForm() {
    if (subscribeInput.value.includes('@')) {
        subscribeMessage.innerHTML = "Thank you for your subscription.";
        subscribeMessage.classList.remove("subscribe__message__error");
        subscribeMessage.classList.add("subscribe__message__passed"); 
    } else {
        subscribeMessage.innerHTML = "Please enter a valid email address";
        subscribeMessage.classList.remove("subscribe__message__passed");
        subscribeMessage.classList.add("subscribe__message__error");
    }
}

// BACKGROUND SLIDER //

const servicesSlider = document.getElementById("services__slider");
const images = [
    "../img/services/plane.jpg",
    "../img/services/ship.jpg",
    "../img/services/train.jpg",
    "../img/services/warehouse.jpg",
    "../img/services/van.jpg",
    "../img/services/forklift.jpg"
    ];
var currentImage = 0;

function change() {
    if (currentImage < (images.length - 1)) {
        currentImage = currentImage + 1;
        servicesSlider.style.backgroundImage = `url(${images[currentImage]})`;
    } else if (currentImage = (images.length - 1)) {
        currentImage = 0;
        servicesSlider.style.backgroundImage = `url(${images[currentImage]})`;
    }
    setTimeout(change, 5000);
}

setTimeout(change, 3000);

