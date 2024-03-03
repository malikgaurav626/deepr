var buttons = document.querySelectorAll('.row');
var backdrop = document.querySelector('.backdrop');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Get the popup ID from the data attribute
        var popupId = button.getAttribute('data-popup-id');
        var popup = document.getElementById(popupId);

        popup.style.display = 'block';
        backdrop.style.display = 'block';
        document.body.classList.add('showing-popup');
    });
});

// Assuming each popup has a close button
var closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        // Find the parent '.show' div to hide
        var popup = this.closest('.show');
        popup.style.display = 'none';
        backdrop.style.display = 'none';
        document.body.classList.remove('showing-popup');
    });
});
