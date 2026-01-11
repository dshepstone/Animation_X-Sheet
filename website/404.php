<?php
http_response_code(404);
$page_title = "Page Not Found - Animation X-Sheet";
$page_description = "The page you're looking for couldn't be found. Return to Animation X-Sheet homepage or browse our documentation.";
include 'includes/header.php';
?>

<section class="content-section" style="min-height: 60vh; display: flex; align-items: center;">
    <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
            <div style="font-size: 6rem; margin-bottom: 1rem;">🎬</div>
            <h1 style="font-size: 3rem; margin-bottom: 1rem; color: var(--text-primary);">404</h1>
            <h2 style="font-size: 1.5rem; margin-bottom: 2rem; color: var(--text-secondary);">Page Not Found</h2>
            
            <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--text-secondary);">
                Looks like this frame is missing from the timeline! The page you're looking for doesn't exist or may have been moved.
            </p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 3rem;">
                <a href="/" class="btn btn-primary">
                    <span>🏠</span>
                    Go Home
                </a>
                <a href="/download" class="btn btn-secondary">
                    <span>📥</span>
                    Download Tool
                </a>
                <a href="/help" class="btn btn-outline">
                    <span>❓</span>
                    Get Help
                </a>
            </div>
            
            <div style="background-color: var(--bg-accent); padding: 2rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Popular Pages</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; text-align: left;">
                    <div>
                        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">
                            <a href="/how-to-use" style="color: var(--primary-color); text-decoration: none;">How to Use</a>
                        </h4>
                        <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">Complete tutorial guide</p>
                    </div>
                    <div>
                        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">
                            <a href="/help" style="color: var(--primary-color); text-decoration: none;">Help & FAQ</a>
                        </h4>
                        <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">Documentation and support</p>
                    </div>
                    <div>
                        <h4 style="font-size: 1rem; margin-bottom: 0.5rem;">
                            <a href="/download" style="color: var(--primary-color); text-decoration: none;">Download</a>
                        </h4>
                        <p style="font-size: 0.875rem; color: var(--text-secondary); margin: 0;">Get the latest version</p>
                    </div>
                </div>
            </div>
            
            <p style="font-size: 0.875rem; color: var(--text-light);">
                If you believe this is an error, please 
                <a href="https://github.com/animationxsheet/Animation_X-Sheet/issues" target="_blank" rel="noopener" style="color: var(--primary-color);">
                    report it on GitHub
                </a>
            </p>
        </div>
    </div>
</section>

<script>
// Track 404 errors for analytics (if implemented)
if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
        page_title: '404 - Page Not Found',
        page_location: window.location.href
    });
}

// Auto-redirect common misspellings
const currentPath = window.location.pathname.toLowerCase();
const redirects = {
    '/animation-xsheet': '/',
    '/animationx-sheet': '/',
    '/xsheet': '/',
    '/x-sheet': '/',
    '/timing-sheet': '/',
    '/exposure-sheet': '/',
    '/how-to': '/how-to-use',
    '/howto': '/how-to-use',
    '/tutorial': '/how-to-use',
    '/tutorials': '/how-to-use',
    '/documentation': '/help',
    '/docs': '/help',
    '/faq': '/help',
    '/support': '/help',
    '/downloads': '/download',
    '/github': 'https://github.com/animationxsheet/Animation_X-Sheet',
    '/source': 'https://github.com/animationxsheet/Animation_X-Sheet'
};

if (redirects[currentPath]) {
    setTimeout(() => {
        window.location.href = redirects[currentPath];
    }, 3000);
    
    // Show redirect message
    const redirectMessage = document.createElement('div');
    redirectMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideDown 0.3s ease-out;
    `;
    redirectMessage.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span>🔄</span>
            Redirecting to the correct page in 3 seconds...
        </div>
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(redirectMessage);
    
    // Remove message after redirect
    setTimeout(() => {
        if (redirectMessage.parentNode) {
            redirectMessage.remove();
        }
    }, 2800);
}
</script>

<?php include 'includes/footer.php'; ?>