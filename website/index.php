<?php
$page_title = "Animation X-Sheet - Professional Animation Timing Tool";
$page_description = "Free, open-source animation timing sheet tool for professional animators and students. Create, manage, and export animation timing sheets with audio synchronization.";
include 'includes/header.php';
?>

<main class="hero-section">
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">Animation X-Sheet</h1>
            <p class="hero-subtitle">Professional Animation Timing Tool</p>
            <p class="hero-description">
                Create precise animation timing sheets with audio synchronization, drawing tools, 
                and professional export capabilities. Built for animators, by animators.
            </p>
            <div class="hero-buttons">
                <a href="download.php" class="btn btn-primary">Download Tool</a>
                <a href="how-to-use.php" class="btn btn-secondary">Learn How to Use</a>
            </div>
        </div>
        <div class="hero-visual">
            <div class="app-preview">
                <div class="preview-header">
                    <div class="preview-dots">
                        <span></span><span></span><span></span>
                    </div>
                    <span class="preview-title">Animation X-Sheet</span>
                </div>
                <div class="preview-content">
                    <div class="preview-toolbar"></div>
                    <div class="preview-table">
                        <div class="preview-row header"></div>
                        <div class="preview-row"></div>
                        <div class="preview-row"></div>
                        <div class="preview-row"></div>
                        <div class="preview-waveform"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<section class="features-section">
    <div class="container">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🎵</div>
                <h3>Audio Synchronization</h3>
                <p>Import audio files and visualize waveforms for precise timing. Scrub through audio to match your animation perfectly.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">✏️</div>
                <h3>Drawing Tools</h3>
                <p>Built-in drawing tools with pen/stylus support. Sketch directly on your timing sheets with pressure sensitivity.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">📁</div>
                <h3>Project Management</h3>
                <p>Organize your work with project folders. Automatic file management for scenes, audio, and exports.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">📄</div>
                <h3>PDF Export</h3>
                <p>Export professional timing sheets to PDF with multiple pages, pagination, and high-quality output.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">🎯</div>
                <h3>Customizable Columns</h3>
                <p>Rename and customize columns to match your workflow. Perfect for different animation styles and projects.</p>
            </div>
            
            <div class="feature-card">
                <div class="feature-icon">💾</div>
                <h3>Save & Load</h3>
                <p>Save your work as JSON files and resume later. Version control friendly for team collaboration.</p>
            </div>
        </div>
    </div>
</section>

<section class="who-section">
    <div class="container">
        <h2 class="section-title">Who It's For</h2>
        <div class="audience-grid">
            <div class="audience-card">
                <div class="audience-icon">🎨</div>
                <h3>Professional Animators</h3>
                <p>Streamline your timing workflow with professional-grade tools and export capabilities.</p>
            </div>
            
            <div class="audience-card">
                <div class="audience-icon">🎓</div>
                <h3>Animation Students</h3>
                <p>Learn industry-standard timing practices with a tool that grows with your skills.</p>
            </div>
            
            <div class="audience-card">
                <div class="audience-icon">🏢</div>
                <h3>Studios & Teams</h3>
                <p>Collaborate on timing sheets with standardized formats and version control support.</p>
            </div>
            
            <div class="audience-card">
                <div class="audience-icon">🎬</div>
                <h3>Independent Creators</h3>
                <p>Professional tools without the cost. Perfect for freelancers and indie animators.</p>
            </div>
        </div>
    </div>
</section>

<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Download the Animation X-Sheet tool today and start creating professional timing sheets.</p>
            <div class="cta-buttons">
                <a href="download.php" class="btn btn-primary">Download Now</a>
                <a href="help.php" class="btn btn-outline">View Documentation</a>
            </div>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>