const images = document.querySelectorAll('.carrousel picture');

let carrouselContainer = document.querySelector(".carrouselContainer");
const carrouselLeft = document.getElementById('carrouselLeft');
const carrouselRight = document.getElementById('carrouselRight');

carrouselContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    carrouselContainer.scrollLeft += evt.deltay;
});
carrouselRight.addEventListener("click", () => {
    carrouselContainer.style.scrollBehavior = "smooth";
    carrouselContainer.scrollLeft += 300;
});
carrouselLeft.addEventListener("click", () => {
    carrouselContainer.style.scrollBehavior = "smooth";
    carrouselContainer.scrollLeft -= 300;
});