document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME SWITCHER ENGINE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check system preference or prior stored theme selections
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        bodyElement.classList.add('dark');
        themeToggleBtn.textContent = '🌙 Mode';
    }

    themeToggleBtn.addEventListener('click', () => {
        bodyElement.classList.toggle('dark');
        
        if (bodyElement.classList.contains('dark')) {
            themeToggleBtn.textContent = '🌙 Mode';
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            themeToggleBtn.textContent = '☀️ Mode';
            localStorage.setItem('portfolio-theme', 'light');
        }
    });

    // --- 2. FLOATING BACK-TO-TOP BUTTON ---
    const toTopBtn = document.getElementById('to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.classList.add('show');
        } else {
            toTopBtn.classList.remove('show');
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 3. SCROLL REVEAL (FADE-IN ANIMATION) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible'); // Optional: removes class when scrolling back up
            }
        });
    };

    // Initialize checking and attach engine listener
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Runs once on load to show elements already in view
});