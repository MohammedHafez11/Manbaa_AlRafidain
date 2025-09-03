// ===== MOBILE NAVIGATION ===== 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const navbar = document.getElementById('navbar');
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on nav links
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
    
    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'hsla(45, 15%, 97%, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'hsla(45, 15%, 97%, 0.8)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.product-card, .feature-card, .contact-card, .about-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===== HERO SCROLL INDICATOR =====
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // ===== PRODUCT CARDS HOVER EFFECT =====
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('offset-card') ? 
                'translateY(24px)' : 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('offset-card') ? 
                'translateY(32px)' : 'translateY(0)';
        });
    });
    
    // ===== CONTACT BUTTONS FUNCTIONALITY =====
    const phoneBtn = document.querySelector('.btn:has(.fa-phone)');
    const emailBtn = document.querySelector('.btn:has(.fa-envelope)');
    
    if (phoneBtn) {
        phoneBtn.addEventListener('click', function() {
            window.location.href = 'tel:+9647701234567';
        });
    }
    
    if (emailBtn) {
        emailBtn.addEventListener('click', function() {
            window.location.href = 'mailto:info@iraqistone.com?subject=استفسار عن المنتجات العراقية&body=السلام عليكم، أرغب في الاستفسار عن منتجاتكم.';
        });
    }
    
    // ===== PARALLAX EFFECT FOR HERO =====
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // ===== LOADING ANIMATION =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // ===== PRODUCT BUTTONS FUNCTIONALITY =====
    const productButtons = document.querySelectorAll('.product-content .btn');
    productButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Get the product category from the card
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title-ar').textContent;
            
            // Show alert or redirect to product page
            alert(`سيتم عرض منتجات: ${productTitle}\nThis will show products: ${productTitle}`);
            
            // You can replace this with actual navigation to product pages
            // window.location.href = `/products/${productSlug}`;
        });
    });
    
    // ===== CTA BUTTONS FUNCTIONALITY =====
    const ctaButtons = document.querySelectorAll('.btn-premium');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent.includes('طلب عرض سعر') || this.textContent.includes('اتصل بنا')) {
                window.location.href = 'tel:+9647701234567';
            }
        });
    });
    
    // ===== SCROLL TO TOP FUNCTIONALITY =====
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--gradient-gold);
        border: none;
        color: var(--accent-foreground);
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition-smooth);
        z-index: 1000;
        box-shadow: var(--shadow-soft);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape key
        if (e.key === 'Escape') {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
        }
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    // Lazy load images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
});

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

