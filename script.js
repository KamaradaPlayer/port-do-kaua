const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let index = 0;

function updateScaler() {

    slides.style.transform = `translateX(-${index * 100}%)`
}

next.addEventListener('click', () => {

    index++;
    if (index >= slide.length) {

        index = 0;
    }

    updateScaler();
});

prev.addEventListener('click', () => {

    index--;
    if (index < 0) {

        index = slide.length - 1
    }
    
    updateScaler();
});