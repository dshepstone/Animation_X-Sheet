<?php
$page_title = "How to Use Animation X-Sheet - Complete Tutorial";
$page_description = "Learn how to use Animation X-Sheet effectively. Complete tutorial covering project setup, audio import, drawing tools, timing, and export.";
include 'includes/header.php';
?>

<section class="content-section">
    <div class="container">
        <div class="content-header">
            <h1>How to Use Animation X-Sheet</h1>
            <p>Master the art of animation timing with our comprehensive guide</p>
        </div>
        
        <div class="content-grid">
            <main class="content-main">
                <h2 id="getting-started">Getting Started</h2>
                <p>Animation X-Sheet is a powerful web-based tool for creating professional animation timing sheets. This guide will walk you through every feature and help you create your first timing sheet.</p>
                
                <h3 id="opening-the-tool">Opening the Tool</h3>
                <ol>
                    <li><strong>Download</strong> the Animation X-Sheet from our <a href="download.php">download page</a></li>
                    <li><strong>Extract</strong> the files to a folder on your computer</li>
                    <li><strong>Open</strong> the <code>index.html</code> file in a modern web browser</li>
                    <li><strong>Allow</strong> any browser permissions for file access when prompted</li>
                </ol>
                
                <h2 id="project-management">Project Management</h2>
                <p>The Animation X-Sheet includes a powerful project management system to keep your work organized.</p>
                
                <h3 id="creating-project">Creating a New Project</h3>
                <ol>
                    <li>Click the <strong>"Create Project"</strong> button in the header</li>
                    <li>Select or create a folder where your project will be stored</li>
                    <li>The tool will automatically create subfolders:
                        <ul>
                            <li><code>scenes/</code> - For your timing sheet files</li>
                            <li><code>audio/</code> - For your audio files</li>
                            <li><code>exports/</code> - For your exported PDFs</li>
                        </ul>
                    </li>
                    <li>Your project status will update to show the project folder name</li>
                </ol>
                
                <h3 id="setting-existing-project">Setting an Existing Project</h3>
                <ol>
                    <li>Click <strong>"Set Project"</strong> to use an existing project folder</li>
                    <li>Select a folder that contains your project structure</li>
                    <li>Missing subfolders will be created automatically</li>
                </ol>
                
                <h2 id="basic-setup">Basic Setup</h2>
                <p>Before diving into timing, set up your project parameters.</p>
                
                <h3 id="metadata">Project Metadata</h3>
                <p>Fill in the metadata fields at the top of the workspace:</p>
                <ul>
                    <li><strong>Project #:</strong> Your project identifier</li>
                    <li><strong>Date:</strong> Production date</li>
                    <li><strong>Animator:</strong> Your name or team</li>
                    <li><strong>Version:</strong> Version number (defaults to 1.0)</li>
                    <li><strong>Shot #:</strong> Scene or shot identifier</li>
                </ul>
                
                <h3 id="timing-settings">Timing Settings</h3>
                <ul>
                    <li><strong>Frames:</strong> Set the total number of frames for your animation</li>
                    <li><strong>FPS:</strong> Set your frame rate (24fps is standard for film, 30fps for TV/web)</li>
                </ul>
                
                <h2 id="audio-workflow">Audio Workflow</h2>
                <p>Audio synchronization is one of the most powerful features of Animation X-Sheet.</p>
                
                <h3 id="importing-audio">Importing Audio</h3>
                <ol>
                    <li>Click <strong>"Import Audio"</strong> in the header</li>
                    <li>If you have a project set up, choose audio from your project's audio folder or import new audio</li>
                    <li>Supported formats: MP3, WAV, OGG, M4A, AAC, FLAC</li>
                    <li>The audio waveform will appear in the dedicated waveform column</li>
                    <li>Frame count will automatically adjust to match audio duration</li>
                </ol>
                
                <h3 id="audio-playback">Audio Playback</h3>
                <ul>
                    <li><strong>Play/Pause:</strong> Control audio playback</li>
                    <li><strong>Stop:</strong> Stop playback and return to beginning</li>
                    <li><strong>Scrub Slider:</strong> Drag to jump to specific positions</li>
                    <li><strong>Waveform Scrubbing:</strong> Click and drag on the waveform for precise positioning</li>
                </ul>
                
                <h3 id="waveform-features">Waveform Features</h3>
                <ul>
                    <li><strong>Visual Timing:</strong> See audio peaks and valleys for precise timing</li>
                    <li><strong>Vertical Scrubbing:</strong> Click and drag vertically on the waveform to scrub audio</li>
                    <li><strong>Frame Highlighting:</strong> Current playback position highlights the corresponding frame</li>
                    <li><strong>Pen/Stylus Support:</strong> Enhanced precision when using a drawing tablet</li>
                </ul>
                
                <h2 id="timing-sheet">Working with the Timing Sheet</h2>
                <p>The timing sheet is the heart of your animation planning.</p>
                
                <h3 id="understanding-columns">Understanding Columns</h3>
                <ul>
                    <li><strong>Action/Description:</strong> Main action happening in the frame</li>
                    <li><strong>Fr (Frame Number):</strong> Auto-numbered frames</li>
                    <li><strong>Audio Waveform:</strong> Visual representation of your audio</li>
                    <li><strong>Dialogue:</strong> Dialogue or voice-over notes</li>
                    <li><strong>Sound FX:</strong> Sound effects timing</li>
                    <li><strong>Tech. Notes:</strong> Technical animation notes</li>
                    <li><strong>Extra Columns:</strong> Three customizable columns for your workflow</li>
                    <li><strong>Camera Moves:</strong> Camera movement and positioning notes</li>
                </ul>
                
                <h3 id="customizing-columns">Customizing Columns</h3>
                <ol>
                    <li><strong>Right-click</strong> on any column header with a pencil icon (✏️)</li>
                    <li>Select <strong>"Rename Column"</strong> from the context menu</li>
                    <li>Enter your custom name (e.g., "Lip Sync", "Effects", "Props")</li>
                    <li>Select <strong>"Reset to Default"</strong> to restore original names</li>
                </ol>
                
                <h3 id="editing-cells">Editing Cells</h3>
                <ul>
                    <li><strong>Click</strong> on any editable cell to start typing</li>
                    <li><strong>Tab</strong> to move to the next cell</li>
                    <li><strong>Enter</strong> to move to the cell below</li>
                    <li>Text is automatically saved as you type</li>
                </ul>
                
                <h3 id="frame-indicators">Frame Indicators</h3>
                <ul>
                    <li><strong>Second Marks:</strong> Bold lines every 24 frames (at 24fps)</li>
                    <li><strong>Eighth Marks:</strong> Dashed lines every 8 frames</li>
                    <li><strong>Frame 1:</strong> Highlighted in green as the start frame</li>
                    <li><strong>Current Frame:</strong> Highlighted in blue during audio playback</li>
                </ul>
                
                <h2 id="drawing-tools">Drawing Tools</h2>
                <p>Add visual notes and sketches directly to your timing sheet.</p>
                
                <h3 id="tool-selection">Tool Selection</h3>
                <p>Choose from the toolbar on the left:</p>
                <ul>
                    <li><strong>Select Tool (👆):</strong> Default navigation tool</li>
                    <li><strong>Pen Tool (✏️):</strong> Freehand drawing</li>
                    <li><strong>Line Tool (—):</strong> Straight lines</li>
                    <li><strong>Rectangle Tool (□):</strong> Rectangular shapes</li>
                    <li><strong>Ellipse Tool (○):</strong> Circular and oval shapes</li>
                    <li><strong>Eraser Tool (🧽):</strong> Remove drawings</li>
                </ul>
                
                <h3 id="drawing-options">Drawing Options</h3>
                <ul>
                    <li><strong>Color:</strong> Choose drawing color from the color picker</li>
                    <li><strong>Line Width:</strong> Select from 1px to 5px thickness</li>
                    <li><strong>Clear All:</strong> Remove all drawings (with confirmation)</li>
                </ul>
                
                <h3 id="pen-stylus-support">Pen/Stylus Support</h3>
                <ul>
                    <li><strong>Pressure Sensitivity:</strong> Automatically adjusts line width based on pen pressure</li>
                    <li><strong>Palm Rejection:</strong> Ignores large contact areas (palm touches)</li>
                    <li><strong>Hover Preview:</strong> Visual feedback when pen hovers over drawing area</li>
                    <li><strong>Enhanced Precision:</strong> Optimized for professional drawing tablets</li>
                </ul>
                
                <h2 id="saving-loading">Saving and Loading</h2>
                <p>Preserve your work and collaborate with team members.</p>
                
                <h3 id="saving-scenes">Saving Scenes</h3>
                <ol>
                    <li>Click <strong>"Save Scene"</strong> in the header</li>
                    <li>With a project folder set up, choose a filename in your scenes folder</li>
                    <li>Files are saved in JSON format for easy version control</li>
                    <li>Auto-versioning prevents accidental overwrites</li>
                </ol>
                
                <h3 id="loading-scenes">Loading Scenes</h3>
                <ol>
                    <li>Click <strong>"Load Scene"</strong> in the header</li>
                    <li>Select a JSON file from your scenes folder</li>
                    <li>Associated audio files will be loaded automatically if found</li>
                    <li>All drawings, timing data, and settings are restored</li>
                </ol>
                
                <h2 id="exporting">Exporting Your Work</h2>
                <p>Create professional PDF timing sheets for production use.</p>
                
                <h3 id="pdf-export">PDF Export</h3>
                <ol>
                    <li>Click <strong>"Export PDF"</strong> in the header</li>
                    <li>The tool automatically captures your entire timing sheet</li>
                    <li>Multi-page PDFs are created for long animations</li>
                    <li>With a project folder, PDFs are automatically saved to the exports folder</li>
                    <li>Auto-versioning prevents overwriting previous exports</li>
                </ol>
                
                <h3 id="export-features">Export Features</h3>
                <ul>
                    <li><strong>High Quality:</strong> Vector-based output for crisp printing</li>
                    <li><strong>Complete Content:</strong> Includes all drawings, waveforms, and text</li>
                    <li><strong>Professional Layout:</strong> Optimized for standard paper sizes</li>
                    <li><strong>Page Numbers:</strong> Automatic pagination for multi-page documents</li>
                    <li><strong>Metadata Included:</strong> Project information appears on each sheet</li>
                </ul>
                
                <h2 id="tips-tricks">Tips and Tricks</h2>
                <p>Master techniques for efficient timing sheet creation.</p>
                
                <h3 id="workflow-tips">Workflow Tips</h3>
                <ul>
                    <li><strong>Start with Audio:</strong> Import your audio track first to establish timing</li>
                    <li><strong>Use Frame Markers:</strong> Mark key poses and beats before detailed timing</li>
                    <li><strong>Color Coding:</strong> Use different drawing colors for different types of notes</li>
                    <li><strong>Layer Information:</strong> Use multiple columns to separate different aspects</li>
                    <li><strong>Save Frequently:</strong> Use the project system to save iterations</li>
                </ul>
                
                <h3 id="collaboration-tips">Collaboration Tips</h3>
                <ul>
                    <li><strong>Version Control:</strong> JSON files work well with Git for team collaboration</li>
                    <li><strong>Shared Folders:</strong> Use cloud storage for project folders</li>
                    <li><strong>Naming Conventions:</strong> Establish consistent file naming for scenes</li>
                    <li><strong>Export Standards:</strong> Create PDF exports for review and approval</li>
                </ul>
                
                <h3 id="efficiency-tips">Efficiency Tips</h3>
                <ul>
                    <li><strong>Keyboard Shortcuts:</strong> Use Tab and Enter for quick cell navigation</li>
                    <li><strong>Audio Scrubbing:</strong> Use vertical waveform scrubbing for precise timing</li>
                    <li><strong>Column Customization:</strong> Rename columns to match your workflow</li>
                    <li><strong>Drawing Layers:</strong> Use drawing tools for quick visual references</li>
                </ul>
                
                <h2 id="troubleshooting">Common Issues</h2>
                <p>Solutions to frequently encountered problems.</p>
                
                <h3 id="audio-issues">Audio Issues</h3>
                <ul>
                    <li><strong>Audio Won't Play:</strong> Check browser permissions and audio format</li>
                    <li><strong>No Waveform:</strong> Ensure audio file is properly loaded and supported</li>
                    <li><strong>Sync Issues:</strong> Verify frame rate matches your audio's intended playback</li>
                </ul>
                
                <h3 id="performance-issues">Performance Issues</h3>
                <ul>
                    <li><strong>Slow Drawing:</strong> Reduce line width or clear unnecessary drawings</li>
                    <li><strong>Large Files:</strong> Break long animations into multiple scenes</li>
                    <li><strong>Browser Issues:</strong> Use Chrome, Firefox, or Safari for best performance</li>
                </ul>
                
                <h3 id="file-issues">File Issues</h3>
                <ul>
                    <li><strong>Can't Save:</strong> Ensure you have write permissions to the target folder</li>
                    <li><strong>Project Folder Issues:</strong> Check if the File System Access API is supported</li>
                    <li><strong>Export Problems:</strong> Clear browser cache and try again</li>
                </ul>
                
                <h2 id="next-steps">Next Steps</h2>
                <p>Now that you understand the basics, explore advanced features:</p>
                <ul>
                    <li>Experiment with different drawing tools and colors</li>
                    <li>Try complex timing with multiple audio tracks</li>
                    <li>Set up team workflows with shared project folders</li>
                    <li>Explore the open-source code for customization opportunities</li>
                </ul>
                
                <p>For additional help, visit our <a href="help.php">Help section</a> or join the community discussions on GitHub.</p>
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