// js/projectManager.js
console.log("projectManager.js loaded");
window.XSheetApp = window.XSheetApp || {};

window.XSheetApp.ProjectManager = {
    projectDataRef: null,
    audioHandlerRef: null,
    fileHandlerRef: null,
    uiElements: null,
    isSupported: false,

    init: function (projectData, audioHandler, fileHandler, domElements) {
        console.log("ProjectManager: init");
        this.projectDataRef = projectData;
        this.audioHandlerRef = audioHandler;
        this.fileHandlerRef = fileHandler;
        this.uiElements = domElements;
        this.isSupported = 'showDirectoryPicker' in window;

        if (!this.isSupported) {
            console.warn("ProjectManager: File System Access API not supported - project management will be limited");
        }

        // Set up event listeners
        if (this.uiElements.btnCreateProject) {
            this.uiElements.btnCreateProject.addEventListener('click', () => this.createProject());
        }

        if (this.uiElements.btnSetProject) {
            this.uiElements.btnSetProject.addEventListener('click', () => this.setProject());
        }

        if (this.uiElements.btnReset) {
            this.uiElements.btnReset.addEventListener('click', () => this.resetProject());
        }

        // Listen for project folder changes to update UI
        document.addEventListener('projectFolderChanged', (e) => {
            this.updateProjectStatus();
        });

        this.updateProjectStatus();
    },

    async createProject() {
        if (!this.isSupported) {
            alert("Project management requires a modern browser with File System Access API support.");
            return false;
        }

        if (this.uiElements.statusBar) {
            this.uiElements.statusBar.textContent = "Status: Creating project...";
        }

        try {
            const projectFolderHandle = await window.showDirectoryPicker({
                mode: 'readwrite'
            });

            // Create subfolders - NOW INCLUDING EXPORTS FOLDER
            const sceneFolderHandle = await projectFolderHandle.getDirectoryHandle('scenes', { create: true });
            const audioFolderHandle = await projectFolderHandle.getDirectoryHandle('audio', { create: true });
            const exportsFolderHandle = await projectFolderHandle.getDirectoryHandle('exports', { create: true });

            console.log("ProjectManager: Created project subfolders: scenes, audio, exports");

            // Create a README file
            const readmeHandle = await projectFolderHandle.getFileHandle('README.txt', { create: true });
            const writable = await readmeHandle.createWritable();
            await writable.write(`X-Sheet Project Created: ${new Date().toISOString()}

This folder contains your X-Sheet animation project:
- scenes/ - Contains your scene files (.json)
- audio/ - Contains your audio files
- exports/ - Contains your exported PDF files

To use this project:
1. Click "Set Project" and select this folder
2. Import audio files to the audio/ folder
3. Save scenes to the scenes/ folder
4. Export PDFs will be saved to the exports/ folder automatically
`);
            await writable.close();

            // UPDATED: Pass exports folder handle to setProjectFolder
            this.projectDataRef.setProjectFolder(
                projectFolderHandle,
                sceneFolderHandle,
                audioFolderHandle,
                exportsFolderHandle,  // NEW: Pass exports folder handle
                projectFolderHandle.name
            );

            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = "Status: Project created successfully with exports folder";
            }

            console.log("ProjectManager: Project created with exports folder support");
            return true;
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("ProjectManager: Error creating project:", error);
                alert("Error creating project: " + error.message);
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Project creation failed";
                }
            } else {
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Project creation cancelled";
                }
            }
            return false;
        }
    },

    async setProject() {
        if (!this.isSupported) {
            alert("Project management requires a modern browser with File System Access API support.");
            return false;
        }

        if (this.uiElements.statusBar) {
            this.uiElements.statusBar.textContent = "Status: Setting project folder...";
        }

        try {
            const projectFolderHandle = await window.showDirectoryPicker({
                mode: 'readwrite'
            });

            // Check for required subfolders - NOW INCLUDING EXPORTS
            let sceneFolderHandle, audioFolderHandle, exportsFolderHandle;

            try {
                sceneFolderHandle = await projectFolderHandle.getDirectoryHandle('scenes');
            } catch (e) {
                sceneFolderHandle = await projectFolderHandle.getDirectoryHandle('scenes', { create: true });
                console.log("ProjectManager: Created missing scenes folder");
            }

            try {
                audioFolderHandle = await projectFolderHandle.getDirectoryHandle('audio');
            } catch (e) {
                audioFolderHandle = await projectFolderHandle.getDirectoryHandle('audio', { create: true });
                console.log("ProjectManager: Created missing audio folder");
            }

            try {
                exportsFolderHandle = await projectFolderHandle.getDirectoryHandle('exports');
            } catch (e) {
                exportsFolderHandle = await projectFolderHandle.getDirectoryHandle('exports', { create: true });
                console.log("ProjectManager: Created missing exports folder");
            }

            // UPDATED: Pass all folder handles including exports
            this.projectDataRef.setProjectFolder(
                projectFolderHandle,
                sceneFolderHandle,
                audioFolderHandle,
                exportsFolderHandle,  // NEW: Pass exports folder handle
                projectFolderHandle.name
            );

            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = "Status: Project folder set successfully with exports folder";
            }

            console.log("ProjectManager: Project folder set with exports support");
            return true;
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("ProjectManager: Error setting project:", error);
                alert("Error setting project: " + error.message);
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Project folder selection failed";
                }
            } else {
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Project folder selection cancelled";
                }
            }
            return false;
        }
    },

    resetProject() {
        if (this.projectDataRef.isModified) {
            if (!confirm('You have unsaved changes. Are you sure you want to reset?')) {
                return;
            }
        }

        console.log("ProjectManager: Starting project reset");

        // Stop any audio playback
        if (this.audioHandlerRef) {
            this.audioHandlerRef.stopContinuous();
            // Clear the main audio buffer to ensure clean reset
            this.audioHandlerRef.mainAudioBuffer = null;
        }

        // Reset project data to initial state (48 frames, 24 fps, etc.)
        // This should clear project folder handles and dispatch events
        this.projectDataRef.initNewProject(24, 48);

        // Clear any drawing tools state
        if (window.XSheetApp.DrawingTools) {
            window.XSheetApp.DrawingTools.setActiveTool('pen');
            if (window.XSheetApp.DrawingTools.colorPicker) {
                window.XSheetApp.DrawingTools.colorPicker.value = '#FF0000';
                window.XSheetApp.DrawingTools.activeColor = '#FF0000';
            }
            if (window.XSheetApp.DrawingTools.lineWidthSelect) {
                window.XSheetApp.DrawingTools.lineWidthSelect.value = '2';
                window.XSheetApp.DrawingTools.activeLineWidth = 2;
            }
        }

        // Refresh the drawing canvas
        if (window.XSheetApp.DrawingCanvas && window.XSheetApp.DrawingCanvas.refresh) {
            window.XSheetApp.DrawingCanvas.refresh();
        }

        // Force UI updates - this should happen automatically via events but let's ensure it
        setTimeout(() => {
            // Update project status (should show "No project set")
            this.updateProjectStatus();

            // Trigger UI updates in main.js
            document.dispatchEvent(new CustomEvent('projectDataChanged', {
                detail: { reason: 'reset' }
            }));

            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = "Status: Reset to new X-Sheet - Set up project folder to save/load";
            }
        }, 100);

        console.log("ProjectManager: Project reset completed - all project folder paths cleared");
    },

    async saveScene() {
        if (!this.projectDataRef.sceneFolderHandle) {
            console.error("ProjectManager: No scene folder set - cannot save");
            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = "Status: No project folder set - create or set project first";
            }
            return { success: false, error: "No project folder set" };
        }

        if (this.uiElements.statusBar) {
            this.uiElements.statusBar.textContent = "Status: Saving scene...";
        }

        try {
            const serializable = this.projectDataRef.toSerializableObject();
            const jsonData = JSON.stringify(serializable, null, 2);

            // Generate default filename
            const defaultFileName = (this.projectDataRef.projectName || 'scene')
                + '_' + new Date().toISOString().slice(0, 10).replace(/-/g, '')
                + '.json';

            let fileHandle;
            let finalFileName;

            if (window.showSaveFilePicker) {
                // Let user choose filename via save dialog
                console.log("ProjectManager: Using save dialog for scene file");
                fileHandle = await window.showSaveFilePicker({
                    suggestedName: defaultFileName,
                    startIn: this.projectDataRef.sceneFolderHandle,
                    types: [{
                        description: "X-Sheet Scene",
                        accept: { "application/json": [".json"] }
                    }]
                });
                finalFileName = fileHandle.name;
            } else {
                // Fallback: Auto-version to prevent overwriting
                console.log("ProjectManager: Auto-versioning scene file");
                finalFileName = await this._getVersionedFileName(defaultFileName);
                fileHandle = await this.projectDataRef.sceneFolderHandle.getFileHandle(finalFileName, { create: true });
            }

            // Write the file
            const writable = await fileHandle.createWritable();
            await writable.write(jsonData);
            await writable.close();

            this.projectDataRef.isModified = false;

            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = `Status: Scene saved as ${finalFileName}`;
            }

            console.log(`ProjectManager: Scene saved as ${finalFileName}`);
            return { success: true, fileName: finalFileName };
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("ProjectManager: Error saving scene:", error);
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = `Status: Save failed - ${error.message}`;
                }
                return { success: false, error: error.message };
            } else {
                console.log("ProjectManager: Save cancelled by user");
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Save cancelled";
                }
                return { success: false, error: 'Cancelled' };
            }
        }
    },

    // Helper method to generate versioned filename to prevent overwriting
    async _getVersionedFileName(baseFileName) {
        let version = 1;
        let finalFileName = baseFileName;

        // Keep checking if file exists and increment version
        while (true) {
            try {
                await this.projectDataRef.sceneFolderHandle.getFileHandle(finalFileName);
                // File exists, try next version
                version++;
                const nameWithoutExt = baseFileName.replace('.json', '');
                finalFileName = `${nameWithoutExt}_v${version}.json`;
            } catch (e) {
                // File doesn't exist, we can use this filename
                break;
            }
        }

        console.log(`ProjectManager: Auto-versioned filename: ${finalFileName}`);
        return finalFileName;
    },

    async loadScene() {
        if (!this.projectDataRef.sceneFolderHandle) {
            console.error("ProjectManager: No scene folder set - cannot load");
            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = "Status: No project folder set - create or set project first";
            }
            return { success: false, error: "No project folder set" };
        }

        if (this.uiElements.statusBar) {
            this.uiElements.statusBar.textContent = "Status: Loading scene...";
        }

        try {
            const [fileHandle] = await window.showOpenFilePicker({
                types: [{ description: "X-Sheet Scene", accept: { "application/json": [".json"] } }],
                startIn: this.projectDataRef.sceneFolderHandle
            });

            const file = await fileHandle.getFile();
            const text = await file.text();
            const data = JSON.parse(text);

            this.projectDataRef.fromSerializableObject(data);

            // Try to load associated audio file from project audio folder
            if (data.audio && data.audio.fileName && this.projectDataRef.audioFolderHandle) {
                const audioLoaded = await this.tryLoadProjectAudio(data.audio.fileName);
                if (audioLoaded) {
                    console.log(`ProjectManager: Associated audio "${data.audio.fileName}" loaded automatically`);
                    if (this.uiElements.statusBar) {
                        this.uiElements.statusBar.textContent = `Status: Scene ${file.name} loaded with audio`;
                    }
                } else {
                    console.log(`ProjectManager: Audio file "${data.audio.fileName}" not found in project audio folder`);

                    // Dispatch event to let UI know audio should be re-imported
                    document.dispatchEvent(new CustomEvent('audioMetadataLoaded', {
                        detail: {
                            filename: data.audio.fileName,
                            duration: data.audio.duration || 0,
                            needsReimport: true
                        }
                    }));

                    if (this.uiElements.statusBar) {
                        this.uiElements.statusBar.textContent = `Status: Scene ${file.name} loaded (audio needs re-import)`;
                    }
                }
            } else {
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = `Status: Scene ${file.name} loaded`;
                }
            }

            return { success: true, fileName: file.name };
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("ProjectManager: Error loading scene:", error);
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = `Status: Load failed - ${error.message}`;
                }
                return { success: false, error: error.message };
            } else {
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Load cancelled";
                }
                return { success: false, error: 'Cancelled' };
            }
        }
    },

    async tryLoadProjectAudio(audioFileName) {
        if (!this.projectDataRef.audioFolderHandle || !this.audioHandlerRef) {
            return false;
        }

        try {
            console.log(`ProjectManager: Attempting to load audio "${audioFileName}" from project folder`);
            const audioFileHandle = await this.projectDataRef.audioFolderHandle.getFileHandle(audioFileName);
            const audioFile = await audioFileHandle.getFile();

            // Load the audio using the AudioHandler
            await this.audioHandlerRef.loadAudioFile(audioFile);
            console.log(`ProjectManager: Successfully loaded project audio "${audioFileName}"`);
            return true;
        } catch (error) {
            console.log(`ProjectManager: Audio file "${audioFileName}" not found in project audio folder:`, error.message);
            return false;
        }
    },

    async importAudio() {
        console.log("ProjectManager: importAudio called");

        if (!this.isSupported) {
            console.log("ProjectManager: File System Access API not supported, falling back to regular import");
            // Fallback to regular audio import
            if (this.uiElements.fileInputAudio) {
                this.uiElements.fileInputAudio.click();
            }
            return false;
        }

        if (!this.projectDataRef.audioFolderHandle) {
            console.log("ProjectManager: No audio folder handle, falling back to regular import");
            // Fallback to regular audio import
            if (this.uiElements.fileInputAudio) {
                this.uiElements.fileInputAudio.click();
            }
            return false;
        }

        if (this.uiElements.statusBar) {
            this.uiElements.statusBar.textContent = "Status: Importing audio to project...";
        }

        try {
            console.log("ProjectManager: Showing file picker for audio import, starting in project audio folder");
            const [fileHandle] = await window.showOpenFilePicker({
                types: [
                    {
                        description: "Audio files",
                        accept: {
                            "audio/*": [".mp3", ".wav", ".ogg", ".m4a", ".aac", ".flac"]
                        }
                    }
                ],
                startIn: this.projectDataRef.audioFolderHandle  // Start in project's audio folder
            });

            const file = await fileHandle.getFile();
            console.log(`ProjectManager: Selected audio file: ${file.name}`);

            // Check if file is already in the project audio folder
            let audioFileInProject = file;
            let needToCopy = true;

            try {
                // Try to get the file from project folder to see if it's already there
                const existingFileHandle = await this.projectDataRef.audioFolderHandle.getFileHandle(file.name);
                const existingFile = await existingFileHandle.getFile();

                // If file exists and has same size, assume it's the same file
                if (existingFile.size === file.size) {
                    console.log("ProjectManager: File already exists in project folder, using existing file");
                    audioFileInProject = existingFile;
                    needToCopy = false;
                }
            } catch (e) {
                // File doesn't exist in project folder, need to copy
                console.log("ProjectManager: File not in project folder, will copy");
            }

            // Copy to project audio folder if needed
            if (needToCopy) {
                console.log("ProjectManager: Copying file to project audio folder");
                const audioFileHandle = await this.projectDataRef.audioFolderHandle.getFileHandle(file.name, { create: true });
                const writable = await audioFileHandle.createWritable();
                await writable.write(file);
                await writable.close();
                console.log("ProjectManager: File copied to project folder");

                // Get the file from the project folder for loading
                const copiedFileHandle = await this.projectDataRef.audioFolderHandle.getFileHandle(file.name);
                audioFileInProject = await copiedFileHandle.getFile();
            }

            // Load the audio using AudioHandler - use the file from project folder
            if (this.audioHandlerRef) {
                console.log("ProjectManager: Loading audio via AudioHandler from project folder");
                await this.audioHandlerRef.loadAudioFile(audioFileInProject);
                console.log("ProjectManager: Audio loaded successfully onto x-sheet");
            } else {
                console.error("ProjectManager: AudioHandler not available");
                throw new Error("AudioHandler not available");
            }

            if (this.uiElements.statusBar) {
                this.uiElements.statusBar.textContent = `Status: Audio "${file.name}" imported and loaded`;
            }

            return true;
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error("ProjectManager: Error importing audio:", error);
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = `Status: Audio import failed - ${error.message}`;
                }
                // Show user-friendly error message
                alert(`Failed to import audio: ${error.message}`);
            } else {
                console.log("ProjectManager: Audio import cancelled by user");
                if (this.uiElements.statusBar) {
                    this.uiElements.statusBar.textContent = "Status: Audio import cancelled";
                }
            }
            return false;
        }
    },

    updateProjectStatus() {
        if (!this.uiElements.projectStatus) return;

        if (this.projectDataRef.projectPath) {
            this.uiElements.projectStatus.textContent = `Project: ${this.projectDataRef.projectPath}`;
            this.uiElements.projectStatus.style.color = '#2e7d32';
        } else {
            this.uiElements.projectStatus.textContent = 'No project set';
            this.uiElements.projectStatus.style.color = '#666';
        }
    }
};