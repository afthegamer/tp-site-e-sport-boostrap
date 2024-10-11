document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselEquipe .carousel-inner');
    const carouselItems = carousel.children;

    // Clone the first and last items
    if (carouselItems.length > 0) {
        const firstItemClone = carouselItems[0].cloneNode(true);
        const lastItemClone = carouselItems[carouselItems.length - 1].cloneNode(true);

        // Append and prepend clones to create a looping effect
        carousel.appendChild(firstItemClone);
        carousel.insertBefore(lastItemClone, carousel.firstChild);
    }

    // Set up Bootstrap's built-in event listeners for looping
    const carouselElement = document.getElementById('carouselEquipe');
    const bsCarousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Change slide every 5 seconds
        wrap: true,
        ride: 'carousel'
    });

    // Remove active class from clones
    document.querySelectorAll('.carousel-item').forEach((item, index) => {
        if (index === 0 || index === carouselItems.length - 1) {
            item.classList.remove('active');
        }
    });
});