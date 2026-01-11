<?php
$page_title = "Animation X-Sheet Help & Documentation";
$page_description = "Complete help documentation for Animation X-Sheet. Find answers to common questions, troubleshooting guides, and detailed feature explanations.";
include 'includes/header.php';
?>

<section class="content-section">
    <div class="container">
        <div class="content-header">
            <h1>Help & Documentation</h1>
            <p>Everything you need to know about Animation X-Sheet</p>
        </div>
        
        <div class="content-grid">
            <main class="content-main">
                <h2 id="overview">Overview</h2>
                <p>Animation X-Sheet is a comprehensive web-based tool designed for creating professional animation timing sheets (also known as exposure sheets or x-sheets). It combines traditional timing sheet functionality with modern digital features including audio synchronization, drawing tools, and professional export capabilities.</p>
                
                <h2 id="system-requirements">System Requirements</h2>
                
                <h3 id="browser-support">Browser Support</h3>
                <p>Animation X-Sheet works best with modern web browsers that support the latest web standards:</p>
                <ul>
                    <li><strong>Recommended:</strong> Google Chrome 90+, Firefox 88+, Safari 14+</li>
                    <li><strong>Minimum:</strong> Any browser with ES6 support and Web Audio API</li>
                    <li><strong>File System Access:</strong> Chrome/Edge 86+ for advanced project management features</li>
                </ul>
                
                <h3 id="hardware-requirements">Hardware Requirements</h3>
                <ul>
                    <li><strong>RAM:</strong> 4GB minimum, 8GB recommended for large projects</li>
                    <li><strong>Storage:</strong> 100MB for the application, additional space for projects</li>
                    <li><strong>Input Devices:</strong> Mouse, trackpad, or drawing tablet/stylus</li>
                    <li><strong>Audio:</strong> Speakers or headphones for audio playback</li>
                </ul>
                
                <h3 id="platform-support">Platform Support</h3>
                <ul>
                    <li><strong>Desktop:</strong> Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)</li>
                    <li><strong>Mobile:</strong> iOS 14+, Android 10+ (limited functionality)</li>
                    <li><strong>Tablets:</strong> Full support on iPad Pro with Apple Pencil</li>
                </ul>
                
                <h2 id="features">Features</h2>
                
                <h3 id="project-management">Project Management</h3>
                <ul>
                    <li><strong>Folder Structure:</strong> Automatic organization of scenes, audio, and exports</li>
                    <li><strong>Version Control:</strong> Auto-versioning to prevent data loss</li>
                    <li><strong>File Association:</strong> Automatic loading of related audio files</li>
                    <li><strong>Cross-Platform:</strong> Works on any operating system with a modern browser</li>
                </ul>
                
                <h3 id="audio-features">Audio Features</h3>
                <ul>
                    <li><strong>Format Support:</strong> MP3, WAV, OGG, M4A, AAC, FLAC</li>
                    <li><strong>Waveform Visualization:</strong> Real-time visual representation</li>
                    <li><strong>Scrubbing:</strong> Precise audio positioning and playback</li>
                    <li><strong>Synchronization:</strong> Frame-accurate timing alignment</li>
                    <li><strong>Auto-Duration:</strong> Automatic frame count adjustment</li>
                </ul>
                
                <h3 id="drawing-tools">Drawing Tools</h3>
                <ul>
                    <li><strong>Pen Tool:</strong> Freehand drawing with pressure sensitivity</li>
                    <li><strong>Shape Tools:</strong> Lines, rectangles, and ellipses</li>
                    <li><strong>Eraser:</strong> Selective removal of drawing elements</li>
                    <li><strong>Stylus Support:</strong> Full pen tablet compatibility</li>
                    <li><strong>Layer System:</strong> Non-destructive drawing overlay</li>
                </ul>
                
                <h3 id="customization">Customization</h3>
                <ul>
                    <li><strong>Column Renaming:</strong> Customize column headers for your workflow</li>
                    <li><strong>Frame Rate Settings:</strong> Support for any frame rate</li>
                    <li><strong>Color Options:</strong> Full color picker for drawing tools</li>
                    <li><strong>Line Weights:</strong> Multiple thickness options</li>
                </ul>
                
                <h3 id="export-options">Export Options</h3>
                <ul>
                    <li><strong>PDF Export:</strong> High-quality professional output</li>
                    <li><strong>Multi-Page Support:</strong> Automatic pagination for long animations</li>
                    <li><strong>Vector Graphics:</strong> Scalable drawings in exports</li>
                    <li><strong>Metadata Inclusion:</strong> Project information embedded</li>
                </ul>
                
                <h2 id="file-formats">File Formats</h2>
                
                <h3 id="project-files">Project Files</h3>
                <ul>
                    <li><strong>Scene Files:</strong> JSON format (.json) for timing sheet data</li>
                    <li><strong>Human Readable:</strong> Text-based format for easy inspection</li>
                    <li><strong>Version Control Friendly:</strong> Works well with Git and other VCS</li>
                    <li><strong>Cross-Platform:</strong> Identical files work on any system</li>
                </ul>
                
                <h3 id="audio-formats">Audio Formats</h3>
                <ul>
                    <li><strong>MP3:</strong> Universal compatibility, good compression</li>
                    <li><strong>WAV:</strong> Uncompressed, best quality</li>
                    <li><strong>OGG:</strong> Open source, good compression</li>
                    <li><strong>M4A/AAC:</strong> Apple/modern standard</li>
                    <li><strong>FLAC:</strong> Lossless compression</li>
                </ul>
                
                <h3 id="export-formats">Export Formats</h3>
                <ul>
                    <li><strong>PDF:</strong> Professional printing and sharing</li>
                    <li><strong>JSON:</strong> Scene data backup and transfer</li>
                </ul>
                
                <h2 id="keyboard-shortcuts">Keyboard Shortcuts</h2>
                
                <h3 id="navigation">Navigation</h3>
                <ul>
                    <li><strong>Tab:</strong> Move to next editable cell</li>
                    <li><strong>Shift + Tab:</strong> Move to previous editable cell</li>
                    <li><strong>Enter:</strong> Move to cell below</li>
                    <li><strong>Escape:</strong> Exit cell editing mode</li>
                </ul>
                
                <h3 id="audio-controls">Audio Controls</h3>
                <ul>
                    <li><strong>Spacebar:</strong> Play/Pause audio (when not editing)</li>
                    <li><strong>Home:</strong> Jump to beginning</li>
                    <li><strong>End:</strong> Jump to end</li>
                </ul>
                
                <h3 id="drawing-shortcuts">Drawing Shortcuts</h3>
                <ul>
                    <li><strong>S:</strong> Select tool</li>
                    <li><strong>P:</strong> Pen tool</li>
                    <li><strong>L:</strong> Line tool</li>
                    <li><strong>R:</strong> Rectangle tool</li>
                    <li><strong>E:</strong> Eraser tool</li>
                </ul>
                
                <h2 id="faq">Frequently Asked Questions</h2>
                
                <h3 id="general-questions">General Questions</h3>
                
                <h4>Is Animation X-Sheet free to use?</h4>
                <p>Yes! Animation X-Sheet is completely free and open-source. You can use it for personal projects, commercial work, or educational purposes without any licensing fees.</p>
                
                <h4>Do I need to install anything?</h4>
                <p>No installation required! Just download the files and open index.html in your web browser. The tool runs entirely in your browser for maximum compatibility.</p>
                
                <h4>Can I use this offline?</h4>
                <p>Yes, once downloaded, Animation X-Sheet works completely offline. No internet connection is required for any features.</p>
                
                <h4>Is my data secure?</h4>
                <p>Absolutely. All your data stays on your computer. Nothing is uploaded to any servers. Your projects, audio files, and timing sheets remain completely private.</p>
                
                <h3 id="technical-questions">Technical Questions</h3>
                
                <h4>Why isn't the project folder feature working?</h4>
                <p>The advanced project management features require the File System Access API, which is currently supported in Chrome and Edge 86+. In other browsers, you can still save/load individual files using the traditional file dialogs.</p>
                
                <h4>Can I import video files?</h4>
                <p>Currently, only audio files are supported. If you need to work with video, extract the audio track first using tools like VLC Media Player or online converters.</p>
                
                <h4>What's the maximum project size?</h4>
                <p>There's no hard limit, but performance depends on your browser and computer. Very long animations (10,000+ frames) or large audio files (>100MB) may cause slower performance.</p>
                
                <h4>Can I collaborate with team members?</h4>
                <p>Yes! Since project files are JSON-based, they work great with version control systems like Git. You can also share project folders through cloud storage services.</p>
                
                <h3 id="feature-questions">Feature Questions</h3>
                
                <h4>How do I add more columns?</h4>
                <p>The tool includes three "Extra" columns that you can rename for your needs. Right-click on any column header with a pencil icon to customize its name.</p>
                
                <h4>Can I change the frame rate after starting?</h4>
                <p>Yes, you can change the FPS setting at any time. This will affect how the audio timing aligns with your frames, so you may need to adjust your timing accordingly.</p>
                
                <h4>How do I remove drawings?</h4>
                <p>Use the eraser tool to selectively remove parts of your drawings, or click the trash icon in the drawing toolbar to clear all drawings (with confirmation).</p>
                
                <h4>Can I undo drawing actions?</h4>
                <p>Currently, there's no undo for drawing actions. Use the eraser tool for selective removal, or save your work frequently to create manual restore points.</p>
                
                <h2 id="troubleshooting">Troubleshooting</h2>
                
                <h3 id="audio-problems">Audio Problems</h3>
                
                <h4>Audio file won't load</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Check that your audio file is in a supported format (MP3, WAV, OGG, M4A, AAC, FLAC)</li>
                    <li>Try a different audio file to test if the issue is file-specific</li>
                    <li>Ensure your browser allows audio playback (check for any mute icons in the browser tab)</li>
                    <li>Try refreshing the page and importing again</li>
                </ul>
                
                <h4>No audio playback</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Check your system volume and browser audio settings</li>
                    <li>Try clicking directly on the page before attempting playback (browsers require user interaction for audio)</li>
                    <li>Test with a different browser</li>
                    <li>Disable browser extensions that might block audio</li>
                </ul>
                
                <h4>Waveform not displaying</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Wait a moment for the waveform to process (large files take longer)</li>
                    <li>Check that the audio file actually loaded successfully</li>
                    <li>Try with a smaller audio file to test</li>
                    <li>Refresh the page and try again</li>
                </ul>
                
                <h3 id="performance-problems">Performance Problems</h3>
                
                <h4>Slow drawing or lag</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Clear unnecessary drawings using the trash icon</li>
                    <li>Reduce line width in drawing tools</li>
                    <li>Close other browser tabs to free up memory</li>
                    <li>Try using a different browser (Chrome generally performs best)</li>
                    <li>Restart your browser to clear memory</li>
                </ul>
                
                <h4>Browser freezing</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Reduce the number of frames in very long projects</li>
                    <li>Break large projects into smaller scenes</li>
                    <li>Use smaller audio files when possible</li>
                    <li>Increase available RAM by closing other applications</li>
                </ul>
                
                <h3 id="file-problems">File Problems</h3>
                
                <h4>Can't save files</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Make sure you have write permissions to the target folder</li>
                    <li>Try saving to a different location (like Desktop or Documents)</li>
                    <li>Check available disk space</li>
                    <li>Disable any antivirus software temporarily to test</li>
                    <li>Try using the fallback save method if project folders aren't working</li>
                </ul>
                
                <h4>Project folder features not working</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Use Chrome or Edge 86+ for full project folder support</li>
                    <li>Enable any required browser permissions</li>
                    <li>Fall back to manual file save/load if needed</li>
                    <li>Check that the File System Access API is supported in your browser</li>
                </ul>
                
                <h4>Exported PDF issues</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Clear browser cache and try again</li>
                    <li>Reduce project complexity (fewer drawings, shorter timeline)</li>
                    <li>Try exporting in smaller sections</li>
                    <li>Update your browser to the latest version</li>
                    <li>Check available memory and close other applications</li>
                </ul>
                
                <h3 id="display-problems">Display Problems</h3>
                
                <h4>Layout looks broken</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Refresh the page</li>
                    <li>Clear browser cache and cookies</li>
                    <li>Try zooming to 100% (Ctrl+0 or Cmd+0)</li>
                    <li>Disable browser extensions</li>
                    <li>Try a different browser</li>
                </ul>
                
                <h4>Text too small or large</h4>
                <p><strong>Solutions:</strong></p>
                <ul>
                    <li>Use browser zoom controls (Ctrl/Cmd + or -)</li>
                    <li>Check your system's display scaling settings</li>
                    <li>Try a different browser</li>
                </ul>
                
                <h2 id="best-practices">Best Practices</h2>
                
                <h3 id="workflow-optimization">Workflow Optimization</h3>
                <ul>
                    <li><strong>Set up projects first:</strong> Create project folders before starting work for better organization</li>
                    <li><strong>Import audio early:</strong> Load your audio track before detailed timing work</li>
                    <li><strong>Save frequently:</strong> Use the save feature often to prevent data loss</li>
                    <li><strong>Use meaningful names:</strong> Name your scene files descriptively</li>
                    <li><strong>Break up long projects:</strong> Split very long animations into multiple scenes</li>
                </ul>
                
                <h3 id="collaboration-tips">Collaboration Tips</h3>
                <ul>
                    <li><strong>Version control:</strong> Use Git or similar systems for team projects</li>
                    <li><strong>Naming conventions:</strong> Establish consistent file naming standards</li>
                    <li><strong>Shared standards:</strong> Agree on frame rates and timing approaches</li>
                    <li><strong>Regular exports:</strong> Create PDF exports for review and approval</li>
                </ul>
                
                <h3 id="performance-tips">Performance Tips</h3>
                <ul>
                    <li><strong>Optimize audio:</strong> Use compressed formats like MP3 for better performance</li>
                    <li><strong>Limit drawings:</strong> Avoid excessive drawing detail for better responsiveness</li>
                    <li><strong>Regular cleanup:</strong> Clear unnecessary drawings periodically</li>
                    <li><strong>Modern browsers:</strong> Use the latest browser versions for best performance</li>
                </ul>
                
                <h2 id="getting-help">Getting Additional Help</h2>
                
                <h3 id="community-support">Community Support</h3>
                <ul>
                    <li><strong>GitHub Discussions:</strong> <a href="https://github.com/animationxsheet/Animation_X-Sheet/discussions" target="_blank" rel="noopener">Join community discussions</a></li>
                    <li><strong>Issue Tracker:</strong> <a href="https://github.com/animationxsheet/Animation_X-Sheet/issues" target="_blank" rel="noopener">Report bugs or request features</a></li>
                    <li><strong>Documentation:</strong> Check the project README for developer information</li>
                </ul>
                
                <h3 id="contributing">Contributing</h3>
                <ul>
                    <li><strong>Source Code:</strong> <a href="https://github.com/animationxsheet/Animation_X-Sheet" target="_blank" rel="noopener">View and contribute to the code</a></li>
                    <li><strong>Bug Reports:</strong> Help improve the tool by reporting issues</li>
                    <li><strong>Feature Requests:</strong> Suggest new features for future development</li>
                    <li><strong>Documentation:</strong> Help improve this documentation</li>
                </ul>
                
                <h2 id="license">License and Legal</h2>
                <p>Animation X-Sheet is released under the MIT License, which means:</p>
                <ul>
                    <li><strong>Free to use:</strong> For personal, educational, and commercial projects</li>
                    <li><strong>Open source:</strong> You can view, modify, and distribute the code</li>
                    <li><strong>No warranty:</strong> Use at your own risk (though we do our best to make it reliable)</li>
                    <li><strong>Attribution appreciated:</strong> Not required, but credit is always welcome</li>
                </ul>
                
                <p>For the complete license text, see the <a href="https://github.com/animationxsheet/Animation_X-Sheet/blob/main/LICENSE" target="_blank" rel="noopener">LICENSE file</a> in the project repository.</p>
            </main>
            
            <aside class="content-sidebar">
                <nav class="sidebar-nav">
                    <!-- Table of contents will be generated by JavaScript -->
                </nav>
            </aside>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>