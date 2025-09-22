
//Slider

const slides = document.querySelectorAll(".slide")
let slide_index = 0

function showSlide(i) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === i ? "block" : "none";
    });
}

function nextSlide() {
    slide_index = (slide_index + 1) % slides.length;
    showSlide(slide_index);
}

showSlide(slide_index)
setInterval(nextSlide, 2500)


//Category
const categories = document.querySelector(".categories");
const category_cards = document.querySelectorAll(".category-card");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

let orderIndex = 0;

function updateOrder() {
    category_cards.forEach((card, i) => {
        card.style.order = (i + orderIndex) % category_cards.length;
    });
}

btnNext.addEventListener("click", () => {
    orderIndex = (orderIndex + 1) % category_cards.length;
    updateOrder();
});

btnPrev.addEventListener("click", () => {
    orderIndex = (orderIndex - 1 + category_cards.length) % category_cards.length;
    updateOrder();
});

updateOrder();


// let category_index = 0;
// const itemWidth = category_cards[0].offsetWidth + 32;

// function updateSlideCategory() {
//     categories.style.transform = `translateX(${-category_index * itemWidth}px)`;
// }

// btnNext.addEventListener("click", () => {
//     if (category_index < category_cards.length - 1) {
//         category_index++;
//     } else {
//         category_index = 0;
//     }
//     updateSlideCategory();
// });

// btnPrev.addEventListener("click", () => {
//     if (category_index > 0) {
//         category_index--;
//     } else {
//         category_index = category_cards.length - 1;
//     }
//     updateSlideCategory();
// });


document.querySelectorAll(".btn-like").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});