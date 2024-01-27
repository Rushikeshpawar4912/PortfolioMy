document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.Navbar-menu a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get target section id
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section
            }
        });
    });
});
