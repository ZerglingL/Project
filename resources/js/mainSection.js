document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const liElements = document.querySelectorAll('.main_section_boundary li');

    setInterval(function () {
        liElements[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % liElements.length;
        liElements[currentIndex].classList.add('active');
    }, 10000);
});

setInterval(() => {
    const activeItem = document.querySelector('.main_banner_slide .active');
    if (activeItem) {
        activeItem.classList.remove('active');
        const nextItem = activeItem.nextElementSibling;
        if (!nextItem) {
            const firstItem = document.querySelector('.main_banner_slide div:first-child');
            firstItem.classList.add('active');
        } else {
            nextItem.classList.add('active');
        }
    }
}, 10000);