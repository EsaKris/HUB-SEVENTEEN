        
        // Auto-update copyright year
        const currentYearSpan = document.getElementById('currentYear');
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
        
        // Newsletter form submission
        const newsletterForm = document.getElementById('newsletterForm');
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            // Show success message
            alert(`Thank you for subscribing with ${email}! You'll receive updates from HUB 17.`);
            this.reset();
        });
        
        // Back to Top Button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Smooth scroll for anchor links
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
        
        // Country flag hover effect
        document.querySelectorAll('.country-flag').forEach(flag => {
            flag.addEventListener('mouseenter', () => {
                flag.style.transform = 'translateY(-3px)';
                flag.style.boxShadow = '0 5px 15px rgba(255, 215, 0, 0.2)';
            });
            
            flag.addEventListener('mouseleave', () => {
                flag.style.transform = '';
                flag.style.boxShadow = '';
            });
        });
        
        // Social media share buttons
        document.querySelectorAll('.social-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const platform = this.querySelector('i').className.split(' ')[1].split('-')[1];
                const urls = {
                    facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
                    twitter: 'https://twitter.com/intent/tweet?url=',
                    linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=',
                    instagram: 'https://www.instagram.com/'
                };
                
                if (urls[platform]) {
                    const url = window.location.href;
                    const shareUrl = platform === 'instagram' ? urls[platform] : `${urls[platform]}${encodeURIComponent(url)}`;
                    window.open(shareUrl, '_blank', 'width=600,height=400');
                } else if (platform === 'youtube') {
                    // YouTube channel link
                    window.open('https://www.youtube.com/channel/UCOAn2YmSvJQS0clhdqciKFQ', '_blank');
                }
            });
        });
        
        // Add current year to page load for demonstration
        document.addEventListener('DOMContentLoaded', () => {
            console.log(`Copyright automatically updated to ${currentYear}`);
            
            // If it's not 2026, show a note
            if (currentYear !== 2026) {
                console.log(`Note: Current year is ${currentYear}, not 2026 as mentioned in prompt.`);
            }
        });
        
        // Touch device optimizations
        if ('ontouchstart' in window) {
            // Better touch feedback
            document.querySelectorAll('.footer-links a, .social-link, .newsletter-btn').forEach(el => {
                el.addEventListener('touchstart', () => {
                    el.style.opacity = '0.7';
                });
                
                el.addEventListener('touchend', () => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                    }, 150);
                });
            });
            
            // Ensure touch targets are large enough
            document.querySelectorAll('.footer-links a, .social-link').forEach(el => {
                el.style.minHeight = '44px';
                el.style.display = 'flex';
                el.style.alignItems = 'center';
            });
        }