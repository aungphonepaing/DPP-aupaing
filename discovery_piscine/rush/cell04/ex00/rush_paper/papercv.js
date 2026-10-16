document.querySelectorAll('.slided').forEach((slide) => {
    slide.addEventListener('click', () => {
        const nextSelector = slide.dataset.next;
        if (!nextSelector) return;
        const next = document.querySelector(nextSelector);
        if (next) {
            next.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
