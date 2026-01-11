// Animation X-Sheet Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileNavigation();
    initBackToTop();
    initSmoothScrolling();
    initContentNavigation();
    
    console.log('Animation X-Sheet website loaded successfully');
});

// ====== Mobile Navigation ======
function initMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!navToggle || !navMenu) return;
    
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ====== Back to Top Button ======
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // Show/hide back to top button based on scroll position
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(toggleBackToTop);
            ticking = true;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add visual feedback
        backToTopBtn.style.transform = 'translateY(-2px) scale(0.95)';
        setTimeout(() => {
            backToTopBtn.style.transform = '';
        }, 150);
    });
}

// ====== Smooth Scrolling for Anchor Links ======
function initSmoothScrolling() {
    // Handle anchor links for smooth scrolling
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without causing scroll
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// ====== Content Navigation (for help and how-to pages) ======
function initContentNavigation() {
    const sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;
    
    // Generate table of contents from headings
    const headings = document.querySelectorAll('.content-main h2, .content-main h3');
    if (headings.length === 0) return;
    
    // Clear existing nav if any
    sidebarNav.innerHTML = '<li><h4>On This Page</h4></li>';
    
    headings.forEach((heading, index) => {
        // Create ID if it doesn't exist
        if (!heading.id) {
            heading.id = heading.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-|-$/g, '');
        }
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        a.className = heading.tagName === 'H3' ? 'sub-heading' : '';
        
        li.appendChild(a);
        sidebarNav.appendChild(li);
    });
    
    // Highlight current section on scroll
    function highlightCurrentSection() {
        const scrollPosition = window.pageYOffset + 100;
        const navLinks = sidebarNav.querySelectorAll('a[href^="#"]');
        
        let currentSection = null;
        
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                currentSection = heading.id;
            }
        });
        
        // Update active state
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (currentSection && link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttled scroll listener
    let scrollTicking = false;
    function requestScrollTick() {
        if (!scrollTicking) {
            requestAnimationFrame(highlightCurrentSection);
            scrollTicking = true;
        }
        scrollTicking = false;
    }
    
    window.addEventListener('scroll', requestScrollTick);
    
    // Initial highlight
    highlightCurrentSection();
}

// ====== Utility Functions ======

// Debounce function for performance optimization
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add loading states to download buttons
document.addEventListener('click', function(e) {
    if (e.target.matches('.download-btn, .btn[href*="github"]')) {
        const btn = e.target;
        const originalText = btn.textContent;
        
        btn.style.opacity = '0.7';
        btn.style.pointerEvents = 'none';
        
        setTimeout(() => {
            btn.style.opacity = '';
            btn.style.pointerEvents = '';
        }, 1000);
    }
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Website error:', e.error);
    // Could send to analytics or error reporting service
});

// Performance monitoring
if (window.performance && window.performance.mark) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = window.performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
        }, 0);
    });
}

// Add copy-to-clipboard functionality for code blocks
function initCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre code, .code-block');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.25rem 0.5rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;
        
        const container = block.parentElement;
        container.style.position = 'relative';
        container.appendChild(button);
        
        container.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        container.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy code:', err);
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
    });
}

// Initialize code copy buttons when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodeCopyButtons);
} else {
    initCodeCopyButtons();
}