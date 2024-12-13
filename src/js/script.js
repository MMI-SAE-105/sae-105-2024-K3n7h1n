document.addEventListener('DOMContentLoaded', function() {
   
    const nav = document.querySelector('.nav');
    const toggleBtn = document.querySelector('.header__toggle');
    const closeBtn = document.querySelector('.nav__close');

    if (nav && toggleBtn && closeBtn) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.add('nav--open');
        });

        closeBtn.addEventListener('click', () => {
            nav.classList.remove('nav--open');
        });

        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav--open');
            });
        });
    }
    // création du JS par IA à partir d'ici 
    // Countdown (uniquement si les éléments du compte à rebours existent)
    const eventDate = new Date("Aug 21, 2025 00:00:00").getTime();
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                daysEl.textContent = 0;
                hoursEl.textContent = 0;
                minutesEl.textContent = 0;
                secondsEl.textContent = 0;
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Gestion de plusieurs carrousels 
    const carousels = document.querySelectorAll('.programme__carousel');

    if (carousels.length > 0) {
        carousels.forEach(carousel => {
            const track = carousel.querySelector('.programme__carousel-track');
            const prevBtn = carousel.querySelector('.programme__carousel-btn--prev');
            const nextBtn = carousel.querySelector('.programme__carousel-btn--next');

            // Vérification des éléments clés du carrousel
            if (track && prevBtn && nextBtn) {
                const items = Array.from(track.children);
                let currentIndex = 0;

                function updateCarousel() {
                    const itemWidth = items[0].getBoundingClientRect().width;
                    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                }

                nextBtn.addEventListener('click', () => {
                    if (currentIndex < items.length - 1) {
                        currentIndex++;
                        updateCarousel();
                    }
                });

                prevBtn.addEventListener('click', () => {
                    if (currentIndex > 0) {
                        currentIndex--;
                        updateCarousel();
                    }
                });

                window.addEventListener('resize', updateCarousel);
            }
        });
    }
});
