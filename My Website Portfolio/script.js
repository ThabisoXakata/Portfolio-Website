document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-widget input');
    stars.forEach(star => {
        star.addEventListener('change', function () {
            updateStars(star);
        });
    });
});

function updateStars(star) {
    const stars = document.querySelectorAll('.star-widget input');
    stars.forEach(s => {
        const label = s.nextElementSibling;
        if (s.checked || s === star) {
            label.classList.add('checked');
        } else {
            label.classList.remove('checked');
        }
    });
}