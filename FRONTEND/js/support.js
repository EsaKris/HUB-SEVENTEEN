// Partners carousel infinite scroll
const partnersTrack = document.getElementById('partnersTrack');
const partnersCarousel = document.querySelector('.partners-carousel');

// Pause animation on hover
partnersCarousel.addEventListener('mouseenter', () => {
    partnersTrack.style.animationPlayState = 'paused';
});

partnersCarousel.addEventListener('mouseleave', () => {
    partnersTrack.style.animationPlayState = 'running';
});

// Reset animation to avoid lag
setInterval(() => {
    const scrollPosition = partnersTrack.getBoundingClientRect().left;
    if (scrollPosition <= -partnersTrack.scrollWidth / 2) {
        partnersTrack.style.animation = 'none';
        partnersTrack.offsetHeight; // Trigger reflow
        partnersTrack.style.animation = 'scroll 35s linear infinite';
    }
}, 1000);

// Get Started button
const getStartedBtn = document.getElementById('getStartedBtn');
getStartedBtn.addEventListener('click', () => {
    alert('This would open a form or redirect to a contact page. In production, implement a modal or redirect.');
});

// Card button interactions
document.querySelectorAll('.card-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const action = this.querySelector('i').className;
        let message = '';
        
        if (action.includes('fa-heart')) {
            message = 'Redirecting to secure donation page...';
        } else if (action.includes('fa-user-plus')) {
            message = 'Opening volunteer application form...';
        } else if (action.includes('fa-briefcase')) {
            message = 'Loading partnership inquiry form...';
        }
        
        alert(message + ' (Demo - would redirect in production)');
    });
});

// Partner item click
document.querySelectorAll('.partner-item').forEach(partner => {
    partner.addEventListener('click', () => {
        const name = partner.querySelector('.partner-name').textContent;
        alert(`This would show more details about our partnership with ${name}.`);
    });
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
    el.style.animationPlayState = 'paused';
});

// Touch device optimizations
if ('ontouchstart' in window) {
    // Improve touch feedback
    document.querySelectorAll('.involvement-card, .partner-item, button').forEach(el => {
        el.addEventListener('touchstart', () => {
            el.style.transform = 'scale(0.98)';
            el.style.transition = 'transform 0.1s ease';
        });
        
        el.addEventListener('touchend', () => {
            setTimeout(() => {
                el.style.transform = '';
            }, 100);
        });
    });
    
    // Larger touch targets for mobile
    document.querySelectorAll('.card-btn, .footer-btn').forEach(btn => {
        btn.style.minHeight = '50px';
    });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});