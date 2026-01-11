<?php
require_once __DIR__ . '/includes/config.php';           // keep if you use constants
$page_title       = "Download Animation X-Sheet - Free Animation Timing Tool";
$page_description = "Download Animation X-Sheet for free. Get the complete animation timing tool with audio sync, drawing tools, and professional export features.";
include 'includes/header.php';
?>

<section class="content-section">
    <div class="container">

        <!-- ░░░ Header ░░░ -->
        <div class="content-header">
            <h1>Download Animation X-Sheet</h1>
            <p>Get started with professional animation timing sheets</p>
        </div>

        <!-- ░░░ Download grid ░░░ -->
        <div class="download-grid">

            <!-- Ready-to-Use build -->
            <div class="download-card">
                <div class="download-icon">📦</div>
                <h3>Ready-to-Use Application</h3>
                <p>Download the complete tool, ready to run in your browser.</p>
                <a href="https://github.com/dshepstone/Animation_X-Sheet/releases/download/v1.0.0/animation_xsheet_build_v1.0.0.zip"
                    class="btn btn-primary btn-lg download-btn" target="_blank" rel="noopener">
                    <span>📥</span> Download Application
                </a>
                <p class="mb-2"><strong>Latest&nbsp;Version:</strong> v1.0.0</p>
                <p><strong>File&nbsp;Size:</strong> ~2&nbsp;MB</p>
            </div>

            <!-- Web App -->
            <div class="download-card">
                <div class="download-icon">⚡</div>
                <h3>Web Application</h3>
                <p>Use Animation X-Sheet directly in your browser—no download required.</p>
                <a href="https://dshepstone.github.io/Animation_X-Sheet/"
                    class="btn btn-secondary btn-lg" target="_blank" rel="noopener">
                    <span>🌐</span> Launch Web App
                </a>
                <p class="mb-2"><strong>Requirements:</strong> Modern browser</p>
                <p><strong>Storage:</strong> Local browser storage</p>
            </div>

            <!-- Source code -->
            <div class="download-card">
                <div class="download-icon">🔧</div>
                <h3>Source&nbsp;Code</h3>
                <p>Developers can grab the v1.0.0 tag or clone the repo.</p>
                <a href="https://github.com/dshepstone/Animation_X-Sheet/archive/refs/tags/v1.0.0.zip"
                    class="btn btn-outline btn-lg download-btn" target="_blank" rel="noopener">
                    <span>📋</span> Download Source
                </a>
                <p class="mb-2"><strong>Format:</strong> ZIP&nbsp;archive</p>
                <p><strong>License:</strong> MIT</p>
            </div>

        </div><!-- /.download-grid -->

        <!-- ░░░ System requirements ░░░ -->
        <div class="system-requirements">
            <h3>System Requirements</h3>
            <div class="requirements-grid">

                <div class="requirement-item">
                    <h4>Browser Support</h4>
                    <ul>
                        <li>Chrome&nbsp;90+ (recommended)</li>
                        <li>Firefox&nbsp;88+</li>
                        <li>Safari&nbsp;14+</li>
                        <li>Edge&nbsp;90+</li>
                    </ul>
                </div>

                <div class="requirement-item">
                    <h4>Operating System</h4>
                    <ul>
                        <li>Windows 10+</li>
                        <li>macOS 10.15+</li>
                        <li>Linux (Ubuntu 18.04+)</li>
                        <li>Chrome OS</li>
                    </ul>
                </div>

                <div class="requirement-item">
                    <h4>Hardware</h4>
                    <ul>
                        <li>4&nbsp;GB RAM minimum</li>
                        <li>100&nbsp;MB storage space</li>
                        <li>Audio output device</li>
                        <li>Mouse / trackpad / stylus</li>
                    </ul>
                </div>

                <div class="requirement-item">
                    <h4>Optional Features</h4>
                    <ul>
                        <li>Drawing tablet / stylus</li>
                        <li>File System Access API</li>
                        <li>Web Audio API</li>
                        <li>Local file access</li>
                    </ul>
                </div>

            </div><!-- /.requirements-grid -->
        </div><!-- /.system-requirements -->

        <!-- ░░░ Installation & Usage ░░░ -->
        <div class="content-main">

            <h2 id="installation">Installation Instructions</h2>

            <h3 id="quick-start">Quick Start (Recommended)</h3>
            <ol>
                <li><strong>Download</strong> the ready-to-use application using the button above.</li>
                <li><strong>Extract</strong> the ZIP file to a folder on your computer.</li>
                <li><strong>Open</strong> <code>index.html</code> in your web browser.</li>
                <li><strong>Start creating</strong> your animation timing sheets!</li>
            </ol>

            <h3 id="web-app">Using the Web Application</h3>
            <ol>
                <li><strong>Click</strong> the “Launch Web App” button above.</li>
                <li><strong>Bookmark</strong> the page for easy access.</li>
                <li><strong>Allow</strong> any browser permissions for file access.</li>
                <li><strong>Start working</strong> immediately — no download required!</li>
            </ol>

            <h3 id="developer-setup">Developer Setup</h3>
            <ol>
                <li><strong>Clone</strong> the repository:<br>
                    <code>git clone https://github.com/dshepstone/Animation_X-Sheet.git</code>
                </li>
                <li><strong>Navigate</strong> to the project directory.</li>
                <li><strong>Open</strong> <code>index.html</code> in your browser or serve with a local web server.</li>
                <li><strong>Start developing</strong> — no build process required!</li>
            </ol>

            <!-- What's included -->
            <h2 id="whats-included">What’s Included</h2>

            <h3 id="application-files">Application Files</h3>
            <ul>
                <li><strong>index.html</strong> — Main application file</li>
                <li><strong>css/</strong> — Stylesheets for the interface</li>
                <li><strong>js/</strong> — JavaScript modules for functionality</li>
                <li><strong>README.txt</strong> — Quick-start guide</li>
                <li><strong>LICENSE</strong> — MIT license file</li>
            </ul>

            <h3 id="core-features">Core Features Included</h3>
            <ul>
                <li>Complete timing-sheet interface</li>
                <li>Audio import and synchronization</li>
                <li>Waveform visualization</li>
                <li>Drawing tools with pen/stylus support</li>
                <li>Project management system</li>
                <li>PDF export functionality</li>
                <li>Column customization</li>
                <li>Save / load project files</li>
            </ul>

            <!-- GitHub repo cards -->
            <h2 id="github-repository">GitHub Repository</h2>
            <p>Animation X-Sheet is hosted on GitHub as an open-source project. Visit the repository for:</p>

            <div class="features-grid">

                <div class="feature-card">
                    <h4>📋 Source Code</h4>
                    <p>View and download the complete source code.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        View Repository
                    </a>
                </div>

                <div class="feature-card">
                    <h4>🐛 Issue Tracking</h4>
                    <p>Report bugs and request new features.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/issues"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        Report Issues
                    </a>
                </div>

                <div class="feature-card">
                    <h4>💬 Discussions</h4>
                    <p>Join community discussions and get help.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/discussions"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        Community Forum
                    </a>
                </div>

                <div class="feature-card">
                    <h4>🔄 Releases</h4>
                    <p>Download specific versions and view changelog.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/releases"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        View Releases
                    </a>
                </div>

                <div class="feature-card">
                    <h4>📖 Documentation</h4>
                    <p>Technical documentation for developers.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/wiki"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        Developer Docs
                    </a>
                </div>

                <div class="feature-card">
                    <h4>⭐ Star Project</h4>
                    <p>Support the project by starring it on GitHub.</p>
                    <a href="https://github.com/dshepstone/Animation_X-Sheet"
                        class="btn btn-outline" target="_blank" rel="noopener">
                        ⭐ Star Project
                    </a>
                </div>

            </div><!-- /.features-grid -->

            <!-- Contributing -->
            <h2 id="contributing">Contributing to the Project</h2>
            <p>Animation X-Sheet is an open-source project that welcomes contributions from the community:</p>

            <h3>Ways to Contribute</h3>
            <ul>
                <li><strong>Bug Reports:</strong> Help us fix issues by reporting them.</li>
                <li><strong>Feature Requests:</strong> Suggest new features or improvements.</li>
                <li><strong>Code Contributions:</strong> Submit pull requests with improvements.</li>
                <li><strong>Documentation:</strong> Help improve documentation and tutorials.</li>
                <li><strong>Testing:</strong> Test new features and provide feedback.</li>
                <li><strong>Community Support:</strong> Help other users in discussions.</li>
            </ul>

            <h3>Development Workflow</h3>
            <ol>
                <li><strong>Fork</strong> the repository on GitHub.</li>
                <li><strong>Clone</strong> your fork locally.</li>
                <li><strong>Create</strong> a new branch for your feature/fix.</li>
                <li><strong>Make</strong> your changes and test thoroughly.</li>
                <li><strong>Submit</strong> a pull request with a clear description.</li>
            </ol>

            <!-- Version history -->
            <h2 id="version-history">Version History</h2>

            <h3 id="current-version">Current Version: 1.0.0</h3>
            <ul>
                <li>Initial public release</li>
                <li>Complete timing-sheet functionality</li>
                <li>Audio synchronization and waveform display</li>
                <li>Drawing tools with pen/stylus support</li>
                <li>Project management system</li>
                <li>PDF export functionality</li>
                <li>Column customization features</li>
            </ul>

            <h3 id="upcoming-features">Upcoming Features</h3>
            <ul>
                <li>Video import and synchronization</li>
                <li>Additional export formats</li>
                <li>Enhanced collaboration features</li>
                <li>Template system</li>
                <li>Keyboard-shortcut customization</li>
                <li>Multi-language support</li>
            </ul>

            <!-- License -->
            <h2 id="license">License Information</h2>
            <p>Animation X-Sheet is released under the <strong>MIT License</strong>, which means:</p>
            <ul>
                <li><strong>Free to use</strong> for personal, educational, and commercial projects.</li>
                <li><strong>Free to modify</strong> and distribute your own versions.</li>
                <li><strong>No warranty</strong> — use at your own risk.</li>
                <li><strong>Attribution appreciated</strong> but not required.</li>
            </ul>
            <p>For the complete license text, visit the
                <a href="https://github.com/dshepstone/Animation_X-Sheet/blob/main/LICENSE"
                    target="_blank" rel="noopener">LICENSE file</a> on GitHub.
            </p>

            <!-- Support -->
            <h2 id="support">Getting Support</h2>
            <p>If you need help with Animation X-Sheet:</p>
            <ol>
                <li><strong>Check</strong> the <a href="help.php">Help Documentation</a>.</li>
                <li><strong>Read</strong> the <a href="how-to-use.php">How-to Use guide</a>.</li>
                <li><strong>Search</strong> <a href="https://github.com/dshepstone/Animation_X-Sheet/issues"
                        target="_blank" rel="noopener">existing issues</a> on GitHub.</li>
                <li><strong>Join</strong> the
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/discussions"
                        target="_blank" rel="noopener">community discussions</a>.
                </li>
                <li><strong>Create</strong> a new issue if you’ve found a bug or need help with a specific problem.</li>
            </ol>

            <!-- CTA -->
            <div class="cta-section"
                style="margin-top:3rem;padding:2rem;background:linear-gradient(135deg,var(--primary-color),var(--primary-dark));border-radius:var(--radius-xl);color:white;text-align:center;">
                <h3>Ready to Start Animating?</h3>
                <p>Download Animation X-Sheet now and create professional timing sheets for your projects.</p>

                <div class="cta-buttons">
                    <a href="https://github.com/dshepstone/Animation_X-Sheet/releases/download/v1.0.0/animation_xsheet_build_v1.0.0.zip"
                        class="btn btn-primary btn-lg download-btn"
                        style="background:#fff;color:var(--primary-color);" target="_blank" rel="noopener">
                        <span>📥</span> Download Now
                    </a>

                    <a href="how-to-use.php"
                        class="btn btn-outline btn-lg"
                        style="border-color:#fff;color:#fff;">
                        <span>📚</span> Learn How to Use
                    </a>
                </div>
            </div>

        </div><!-- /.content-main -->
    </div><!-- /.container -->
</section>

<?php include 'includes/footer.php'; ?>