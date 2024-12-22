document.querySelectorAll('.videos__carousel__btn').forEach(button => {
    button.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-target'));
        const action = this.getAttribute('data-action');
        const items = target.querySelectorAll('.videos__carousel__list__item');
        const itemWidth = items[0].offsetWidth;
        const totalWidth = itemWidth * items.length;
        const currentTransform = parseInt(getComputedStyle(target).transform.split(',')[4]) || 0;

        if (action === 'next') {
            if (Math.abs(currentTransform) < totalWidth - itemWidth) {
                target.style.transform = `translateX(${currentTransform - itemWidth}px)`;
            }
        } else if (action === 'prev') {
            if (currentTransform < 0) {
                target.style.transform = `translateX(${currentTransform + itemWidth}px)`;
            }
        }
    });
});

document.getElementById('temporadaSelect').addEventListener('change', function() {
    const allContents = document.querySelectorAll('.seasons__temp');
    allContents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('seasons__temp--active');
    });

    const selectedValue = this.value;
    const selectedContent = document.getElementById(selectedValue);
    if (selectedContent) {
        selectedContent.style.display = 'block';
        selectedContent.classList.add('seasons__temp--active');
    }
});