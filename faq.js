document.addEventListener("DOMContentLoaded", function() {
    // Get all the FAQ buttons
    var faqButtons = document.querySelectorAll('.chakra-accordion__button');

    faqButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the next element after the button, which is the chakra-collapse div
            var collapseContent = this.nextElementSibling;

            if (collapseContent.style.display === "none" || collapseContent.style.display === "") {
                collapseContent.style.display = "block";
                collapseContent.style.opacity = "1";
                collapseContent.style.height = "auto";
                collapseContent.style.overflow = "visible";
            } else {
                collapseContent.style.display = "none";
                collapseContent.style.opacity = "0";
                collapseContent.style.height = "0px";
                collapseContent.style.overflow = "hidden";
            }
        });
    });
});


