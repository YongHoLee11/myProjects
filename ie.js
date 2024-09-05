document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');
    const profileCard = document.getElementById('profile-card');

    colorButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const selectedColor = button.getAttribute('data-color');
            profileCard.style.backgroundColor = selectedColor;
        });
    });
});
