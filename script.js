// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Navigation Background Change on Scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(5, 5, 5, 0.9)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.padding = '15px 10%';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '25px 10%';
    }
});

// Smooth Scrolling for Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission (Mock)
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Sending...';
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        btn.innerText = 'Message Sent!';
        btn.style.background = '#4CAF50';
        btn.style.color = 'white';
        e.target.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = 'var(--primary)';
            btn.style.color = '#000';
            btn.disabled = false;
        }, 3000);
    }, 1500);
});

// Mouse parallax effect for hero image
const heroImage = document.querySelector('.hero-image-container img');
if (heroImage) {
  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    heroImage.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
  });
}
