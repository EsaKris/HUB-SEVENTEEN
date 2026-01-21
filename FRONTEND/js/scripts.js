document.addEventListener('DOMContentLoaded', function() {
    const topNav = document.getElementById('top-nav');
    const mainNav = document.getElementById('main-nav');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    let lastScrollTop = 0;
    let ticking = false;
    
    // Handle scroll behavior for both navbars
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down - hide top nav
            topNav.classList.add('hidden');
            mainNav.classList.add('scrolled-up');
        } else {
            // Scrolling up - show top nav
            if (scrollTop <= 100) {
                topNav.classList.remove('hidden');
                mainNav.classList.remove('scrolled-up');
            }
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
            });
            ticking = true;
        }
    });
    
    // Mobile menu toggle - FIXED
    mobileToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        mobileMenu.classList.toggle('active');
        this.innerHTML = mobileMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
        
        // Toggle aria-expanded for accessibility
        const isExpanded = mobileMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
    
    // Mobile dropdown toggles
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.querySelector('.fa-chevron-down')) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                // Close other dropdowns
                document.querySelectorAll('.mobile-dropdown').forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                        d.previousElementSibling.classList.remove('active');
                        d.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
                        d.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
                this.classList.toggle('active');
                
                if (dropdown.classList.contains('active')) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                } else {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.setAttribute('aria-expanded', 'false');
            
            // Close all dropdowns
            document.querySelectorAll('.mobile-dropdown').forEach(d => {
                d.classList.remove('active');
                d.previousElementSibling.classList.remove('active');
                d.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
                d.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
            });
        }
    });
    
    // Close mobile menu when clicking a link
    mobileMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A' && !e.target.querySelector('.fa-chevron-down')) {
            mobileMenu.classList.remove('active');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Smooth hover effects for desktop menu
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize scroll position
    handleScroll();
    
    // Search button functionality
    const searchBtn = document.querySelector('.search-btn');
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    
    function handleSearch() {
        alert('Search functionality would open here. In a real implementation, this would open a search bar.');
    }
    
    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    if (mobileSearchBtn) mobileSearchBtn.addEventListener('click', handleSearch);
    
    // Donate button functionality
    const donateBtns = document.querySelectorAll('.donate-btn, .mobile-donate-btn');
    
    donateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('This would redirect to the donation page. In a real implementation, this would link to your donation processor.');
        });
    });
});
