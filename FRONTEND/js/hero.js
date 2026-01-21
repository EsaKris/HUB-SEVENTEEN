document.addEventListener('DOMContentLoaded', function() {
    // Carousel elements
    const slides = document.querySelectorAll('.slide');
    const navItems = document.querySelectorAll('.nav-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const pauseBtn = document.querySelector('.pause-btn');
    const progressBar = document.getElementById('progressBar');
    const currentSlideSpan = document.getElementById('currentSlide');
    const totalSlidesSpan = document.getElementById('totalSlides');
    const currentCounter = document.getElementById('currentCounter');
    const totalCounter = document.getElementById('totalCounter');
    
    // Carousel state
    let currentSlide = 0;
    let totalSlides = slides.length;
    let autoRotate = true;
    let rotateInterval;
    let progressInterval;
    const rotateTime = 15000; // 15 seconds
    
    // Initialize
    function initCarousel() {
        totalSlidesSpan.textContent = totalSlides;
        totalCounter.textContent = '07'; // Fixed for 7 slides
        updateCarousel();
        startAutoRotation();
    }
    
    // Update carousel to show current slide
    function updateCarousel() {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        slides[currentSlide].classList.add('active');
        
        // Update navigation items
        navItems.forEach(item => item.classList.remove('active'));
        navItems[currentSlide].classList.add('active');
        
        // Update counters
        currentSlideSpan.textContent = currentSlide + 1;
        currentCounter.textContent = (currentSlide + 1).toString().padStart(2, '0');
        
        // Reset progress bar
        progressBar.style.width = '0%';
    }
    
    // Go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        
        updateCarousel();
        resetAutoRotation();
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Auto rotation functions
    function startAutoRotation() {
        if (autoRotate) {
            rotateInterval = setInterval(nextSlide, rotateTime);
            startProgressBar();
        }
    }
    
    function resetAutoRotation() {
        clearInterval(rotateInterval);
        clearInterval(progressInterval);
        if (autoRotate) {
            startAutoRotation();
        }
    }
    
    function toggleAutoRotation() {
        autoRotate = !autoRotate;
        if (autoRotate) {
            startAutoRotation();
            pauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            clearInterval(rotateInterval);
            clearInterval(progressInterval);
            pauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }
    
    // Progress bar animation
    function startProgressBar() {
        progressBar.style.width = '0%';
        let width = 0;
        
        progressInterval = setInterval(() => {
            if (width >= 100) {
                clearInterval(progressInterval);
            } else {
                width += 100 / (rotateTime / 100); // Calculate increment per 100ms
                progressBar.style.width = width + '%';
            }
        }, 100);
    }
    
    // Event Listeners
    
    // Circular navigation item clicks
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Control buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    pauseBtn.addEventListener('click', toggleAutoRotation);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === ' ') {
            e.preventDefault();
            toggleAutoRotation();
        }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.querySelector('.hero-section').addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.querySelector('.hero-section').addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            nextSlide();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            prevSlide();
        }
    }
    
    // Pause auto-rotation on hover over circular nav
    const circularNav = document.querySelector('.circular-nav');
    circularNav.addEventListener('mouseenter', function() {
        if (autoRotate) {
            clearInterval(rotateInterval);
            clearInterval(progressInterval);
        }
    });
    
    circularNav.addEventListener('mouseleave', function() {
        if (autoRotate) {
            startAutoRotation();
        }
    });
    
    // Initialize
    initCarousel();
});