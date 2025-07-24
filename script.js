document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed(".typed-output", {
        strings: ["", "🎀Welcome to My World!🎀", "Back-End Dev🥶", "Writer📜"],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        showCursor: false
    });
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop && currentScroll > 50) {
            navbar.style.transform = 'translateY(-100%)';
        } else if (currentScroll < lastScrollTop) {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});