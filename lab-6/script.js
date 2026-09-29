document.querySelectorAll('[data-image-target]').forEach((input) => {
    input.addEventListener('change', () => {
        const file = input.files && input.files[0];
        if (!file || !file.type.startsWith('image/')) return;

        const imageUrl = URL.createObjectURL(file);
        const target = input.dataset.imageTarget;

        if (target === 'hero' || target === 'about') {
            const section = document.querySelector(`.${target}`);
            section.style.setProperty('--custom-background-image', `url("${imageUrl}")`);
            section.classList.add('has-custom-background');
        } else if (target === 'card') {
            const image = input.closest('.card').querySelector('img');
            image.src = imageUrl;
        }
    });
});
