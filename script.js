document.addEventListener('DOMContentLoaded', function() {
    // Get all portfolio items
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add click event to each item
    portfolioItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var modalId = item.getAttribute('data-modal-id');
            var modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    // Get all back buttons
    var backButtons = document.querySelectorAll('.back-button');

    // Add click event to each back button
    backButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var modal = button.closest('.modal');
            modal.style.display = 'none';
        });
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        var modals = document.querySelectorAll('.modal');
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});
