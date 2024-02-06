function navigation() {
    const categoryButtons = document.querySelectorAll('.global_nav_btns button');
    const allCategories = document.querySelectorAll('.global_nav_list');
    const navigation = document.querySelector('nav');

    categoryButtons.forEach((btn, index) => {
        if (index < 5) {
            btn.addEventListener('mouseover', () => {
                allCategories.forEach(cg => {
                    cg.classList.remove('active');
                });
                const selectedCategory = allCategories[index];
                selectedCategory.classList.add('active');
                navigation.classList.add('active');
            });
        } else {
            btn.addEventListener('click', () => {
                allCategories.forEach(cg => {
                    cg.classList.remove('active');
                });
                const selectedCategory = allCategories[index];
                selectedCategory.classList.add('active');
                navigation.classList.add('active');
            });
        }
    });

    navigation.addEventListener('mouseleave', () => {
        allCategories.forEach(category => {
            category.classList.remove('active');
            navigation.classList.remove('active');
        });
    });

    //-------------------------------------------------------------------------------------------------------------------------

    document.querySelector('.global_nav_keywords').innerHTML = document.querySelector('.global_nav_list_keywords').innerHTML;
    setInterval(() => {
        const activeItem = document.querySelector('.global_nav_keywords .active');
        if (activeItem) {
            activeItem.classList.remove('active');
            const nextItem = activeItem.nextElementSibling;
            if (!nextItem) {
                const firstItem = document.querySelector('.global_nav_keywords li:first-child');
                firstItem.classList.add('active');
            } else {
                nextItem.classList.add('active');
            }
        }
    }, 3000);
}