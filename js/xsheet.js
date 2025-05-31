// js/xsheet.js

const LOGICAL_COLUMNS = [
    { key: "action", displayName: "Action/Description", editable: true, className: "action-col" },
    { key: "frameNumber1", displayName: "Fr", editable: false, className: "frame-col", type: "frameNumber" },
    { key: "audioWaveform", displayName: "Audio Waveform", editable: false, className: "waveform-col", type: "waveform" },
    { key: "dialogue", displayName: "Dialogue", editable: true, className: "dialogue-col" },
    { key: "soundFx", displayName: "Sound FX", editable: true, className: "sound-col" },
    { key: "techNotes", displayName: "Tech. Notes", editable: true, className: "technical-col" },
    { key: "frameNumber2", displayName: "Fr", editable: false, className: "frame-col", type: "frameNumber" },
    { key: "camera", displayName: "Camera Moves", editable: true, className: "camera-col" },
];

class XSheet {
    constructor(projectData, audioHandlerRef) {
        this.projectData = projectData;
        this.audioHandler = audioHandlerRef;
        this.tableBody = document.getElementById('xsheetTableBody');
        this.tableHead = document.getElementById('xsheetTableHead');
        this.xsheetContainer = document.getElementById('xsheet-container');

        this.verticalWaveformCanvas = null;
        this.verticalWaveformCtx = null;
        this.isScrubbingVerticalWaveform = false;
        this.currentFrameHighlight = -1;
        this.activeWaveformPointerId = null; // Track active pointer for waveform scrubbing
        this.waveformPointerType = 'mouse'; // Track pointer type for waveform

        if (!this.tableBody || !this.tableHead || !this.xsheetContainer) {
            console.error("CRITICAL XSheet ERROR: Essential DOM elements not found!");
            return;
        }
        this._renderHeaders();
        this._createVerticalWaveformCanvas();
        this.xsheetContainer.addEventListener('scroll', this._handleScrollOrResize.bind(this));
        window.addEventListener('resize', this._handleScrollOrResize.bind(this));
    }

    _renderHeaders() {
        if (!this.tableHead) return;
        const tr = document.createElement('tr');
        LOGICAL_COLUMNS.forEach(col => {
            const th = document.createElement('th');
            th.textContent = col.displayName; th.className = col.className || '';
            tr.appendChild(th);
        });
        this.tableHead.innerHTML = ''; this.tableHead.appendChild(tr);
    }

    render() {
        if (!this.tableBody || !this.projectData) { return; }
        this.tableBody.innerHTML = '';
        for (let i = 0; i < this.projectData.frameCount; i++) {
            const tr = document.createElement('tr');
            tr.dataset.frameIndex = i;
            if (i === this.currentFrameHighlight) tr.classList.add('highlighted-frame');
            const fps = this.projectData.metadata.fps || 24;
            if ((i + 1) % fps === 0) tr.classList.add('major-second-tick');
            else if ((i + 1) % 8 === 0) tr.classList.add('eighth-frame-tick');
            if (i % 2 === 0) tr.classList.add('even-row');
            LOGICAL_COLUMNS.forEach(colConfig => {
                const td = document.createElement('td');
                td.className = colConfig.className || ''; td.dataset.columnKey = colConfig.key;
                if (colConfig.type === "frameNumber") { td.textContent = i + 1; }
                else if (colConfig.type === "waveform") { /* Placeholder */ }
                else {
                    td.textContent = this.projectData.getCellData(i, colConfig.key);
                    if (colConfig.editable) {
                        td.contentEditable = "true"; td.setAttribute('data-placeholder', '');
                        td.addEventListener('blur', (event) => this.projectData.setCellData(i, colConfig.key, event.target.textContent));
                    }
                }
                tr.appendChild(td);
            });
            this.tableBody.appendChild(tr);
        }
        this.renderVerticalWaveform();
    }

    _createVerticalWaveformCanvas() {
        if (this.verticalWaveformCanvas || !this.xsheetContainer) return;
        this.verticalWaveformCanvas = document.createElement('canvas');
        this.verticalWaveformCanvas.id = 'verticalWaveformCanvas';
        this.verticalWaveformCanvas.style.position = 'absolute';
        this.verticalWaveformCanvas.style.pointerEvents = 'auto';
        this.verticalWaveformCanvas.style.zIndex = '5';
        this.verticalWaveformCanvas.style.touchAction = 'none'; // Prevent default touch behaviors
        this.xsheetContainer.appendChild(this.verticalWaveformCanvas);
        this.verticalWaveformCtx = this.verticalWaveformCanvas.getContext('2d');
        
        // Use pointer events instead of mouse events for better pen/touch support
        this.verticalWaveformCanvas.addEventListener('pointerdown', this._handleVerticalWaveformPointerDown.bind(this));
        document.addEventListener('pointermove', this._handleVerticalWaveformPointerMove.bind(this));
        document.addEventListener('pointerup', this._handleVerticalWaveformPointerUp.bind(this));
        document.addEventListener('pointercancel', this._handleVerticalWaveformPointerUp.bind(this));
    }

    _getWaveformColumnMetrics() {
        if (!this.tableHead || !this.xsheetContainer) return null;
        const thElements = Array.from(this.tableHead.querySelectorAll('tr th'));
        const waveformThIndex = LOGICAL_COLUMNS.findIndex(col => col.type === 'waveform');
        if (waveformThIndex === -1 || waveformThIndex >= thElements.length) return null;
        const waveformTh = thElements[waveformThIndex];
        const thRect = waveformTh.getBoundingClientRect();
        const containerRect = this.xsheetContainer.getBoundingClientRect();
        return {
            leftRelativeToContainer: thRect.left - containerRect.left,
            width: thRect.width,
        };
    }

    _handleScrollOrResize() {
        requestAnimationFrame(() => this.renderVerticalWaveform());
    }

    renderVerticalWaveform() {
        if (!this.verticalWaveformCanvas || !this.verticalWaveformCtx || !this.projectData?.audio || !this.xsheetContainer || !this.tableBody) {
            if (this.verticalWaveformCanvas && this.verticalWaveformCtx) {
                this.verticalWaveformCtx.clearRect(0, 0, this.verticalWaveformCanvas.width, this.verticalWaveformCanvas.height);
            }
            return;
        }
        const colMetrics = this._getWaveformColumnMetrics();
        if (!colMetrics) {
            this.verticalWaveformCanvas.style.display = 'none';
            if (this.verticalWaveformCtx) this.verticalWaveformCtx.clearRect(0, 0, this.verticalWaveformCanvas.width, this.verticalWaveformCanvas.height);
            return;
        }
        this.verticalWaveformCanvas.style.display = 'block';
        const scrollOffsetY = this.xsheetContainer.scrollTop;
        const newCanvasTop = `${scrollOffsetY}px`;
        if (this.verticalWaveformCanvas.style.top !== newCanvasTop) {
            this.verticalWaveformCanvas.style.top = newCanvasTop;
        }
        const newCanvasLeft = `${colMetrics.leftRelativeToContainer + this.xsheetContainer.scrollLeft}px`;
        if (this.verticalWaveformCanvas.style.left !== newCanvasLeft) {
            this.verticalWaveformCanvas.style.left = newCanvasLeft;
        }
        if (this.verticalWaveformCanvas.width !== colMetrics.width) {
            this.verticalWaveformCanvas.width = colMetrics.width;
        }
        if (this.verticalWaveformCanvas.height !== this.xsheetContainer.clientHeight) {
            this.verticalWaveformCanvas.height = this.xsheetContainer.clientHeight;
        }
        
        // Update cursor based on pointer type and whether we have audio
        if (this.projectData?.audio?.audioBuffer && this.projectData.audio.duration > 0) {
            if (this.waveformPointerType === 'pen') {
                this.verticalWaveformCanvas.style.cursor = 'crosshair';
            } else {
                this.verticalWaveformCanvas.style.cursor = 'ew-resize';
            }
        } else {
            this.verticalWaveformCanvas.style.cursor = 'default';
        }

        const ctx = this.verticalWaveformCtx;
        ctx.clearRect(0, 0, this.verticalWaveformCanvas.width, this.verticalWaveformCanvas.height);
        const audioDuration = this.projectData.audio.duration;
        const fps = this.projectData.metadata.fps || 24;
        let rowHeight = 22;
        const firstRowEl = this.tableBody.querySelector('tr');
        if (firstRowEl) {
            const cs = getComputedStyle(firstRowEl);
            rowHeight = parseFloat(cs.height) || firstRowEl.offsetHeight || rowHeight;
        }
        if (rowHeight <= 0) rowHeight = 22;
        const totalAudioPixelHeight = audioDuration > 0 ? (audioDuration * fps * rowHeight) : (this.projectData.frameCount * rowHeight);
        const canvasWidth = this.verticalWaveformCanvas.width;
        const canvasHeight = this.verticalWaveformCanvas.height;
        const centerX = canvasWidth / 2;
        if (this.projectData.audio.audioBuffer && this.projectData.audio.waveformData.length > 0 && audioDuration > 1e-6 && totalAudioPixelHeight > 0) {
            ctx.strokeStyle = '#AAAAAA'; ctx.lineWidth = 0.8;
            ctx.beginPath(); ctx.moveTo(centerX, 0); ctx.lineTo(centerX, canvasHeight); ctx.stroke();
            const wData = this.projectData.audio.waveformData; const numPoints = wData.length;
            ctx.strokeStyle = '#333333'; ctx.lineWidth = 1;
            const maxAmpDeflection = (canvasWidth / 2) * 0.9;
            ctx.beginPath();
            let currentPathSegmentStarted = false;
            for (let i = 0; i < numPoints; i++) {
                const pointTime = (i / (numPoints - 1 || 1)) * audioDuration;
                const yOnFullStrip = (pointTime / audioDuration) * totalAudioPixelHeight;
                const yDrawPos = yOnFullStrip - scrollOffsetY;
                const amplitude = wData[i]; const xPos = centerX + (amplitude * maxAmpDeflection);
                if (yDrawPos >= -rowHeight && yDrawPos <= canvasHeight + rowHeight) {
                    if (!currentPathSegmentStarted) { ctx.moveTo(xPos, yDrawPos); currentPathSegmentStarted = true; }
                    else { ctx.lineTo(xPos, yDrawPos); }
                } else if (currentPathSegmentStarted) { ctx.lineTo(xPos, yDrawPos); currentPathSegmentStarted = false; }
            }
            for (let i = numPoints - 1; i >= 0; i--) {
                const pointTime = (i / (numPoints - 1 || 1)) * audioDuration;
                const yOnFullStrip = (pointTime / audioDuration) * totalAudioPixelHeight;
                const yDrawPos = yOnFullStrip - scrollOffsetY;
                const amplitude = wData[i]; const xPos = centerX - (amplitude * maxAmpDeflection);
                if (yDrawPos >= -rowHeight && yDrawPos <= canvasHeight + rowHeight) {
                    if (!currentPathSegmentStarted && i === numPoints - 1) {
                        ctx.moveTo(xPos, yDrawPos);
                        currentPathSegmentStarted = true;
                    } else { ctx.lineTo(xPos, yDrawPos); currentPathSegmentStarted = true; }
                } else if (currentPathSegmentStarted) { ctx.lineTo(xPos, yDrawPos); currentPathSegmentStarted = false; }
            }
            if (numPoints > 0) { ctx.stroke(); }
        }
        const currentTime = this.projectData.audio.currentTime || 0;
        if (audioDuration > 1e-6 && totalAudioPixelHeight > 0) {
            const playheadYOnFull = (currentTime / audioDuration) * totalAudioPixelHeight;
            const playheadYDrawPos = playheadYOnFull - scrollOffsetY;
            if (playheadYDrawPos >= 0 && playheadYDrawPos <= canvasHeight) {
                ctx.strokeStyle = 'red'; ctx.lineWidth = 1.5;
                ctx.beginPath(); ctx.moveTo(0, playheadYDrawPos); ctx.lineTo(canvasWidth, playheadYDrawPos); ctx.stroke();
            }
        }
    }

    _yPosToAudioTime(canvasY_relativeToCanvas) {
        if (!this.projectData?.audio?.audioBuffer || this.projectData.audio.duration === 0 || !this.tableBody) return 0;
        let rowHeight = 22; const firstRowEl = this.tableBody.querySelector('tr');
        if (firstRowEl) rowHeight = firstRowEl.offsetHeight || rowHeight; if (rowHeight <= 0) rowHeight = 22;
        const audioDuration = this.projectData.audio.duration; const fps = this.projectData.metadata.fps || 24;
        const totalAudioPixelHeightBasedOnAudio = audioDuration * fps * rowHeight;
        if (totalAudioPixelHeightBasedOnAudio <= 0) return 0;
        const scrollOffsetY = this.xsheetContainer.scrollTop;
        const yOnFullCanvas = scrollOffsetY + canvasY_relativeToCanvas;
        let time = (yOnFullCanvas / totalAudioPixelHeightBasedOnAudio) * audioDuration;
        return Math.max(0, Math.min(time, audioDuration));
    }

    _getPointerPositionOnCanvas(event) {
        if (!this.verticalWaveformCanvas) return null;
        const canvasRect = this.verticalWaveformCanvas.getBoundingClientRect();
        
        // Check if pointer is within canvas bounds
        if (event.clientX < canvasRect.left || event.clientX > canvasRect.right || 
            event.clientY < canvasRect.top || event.clientY > canvasRect.bottom) {
            return null;
        }
        
        return {
            x: event.clientX - canvasRect.left,
            y: event.clientY - canvasRect.top
        };
    }

    _handleVerticalWaveformPointerDown(event) {
        if (!this.projectData?.audio?.audioBuffer || this.projectData.audio.duration === 0 || !this.verticalWaveformCanvas) return;
        
        // Only handle primary pointer (left mouse button, pen contact, or primary touch)
        if (event.button !== 0 && event.button !== undefined) return;
        
        const canvasPos = this._getPointerPositionOnCanvas(event);
        if (!canvasPos) return;
        
        // Enhanced palm rejection for pen input
        if (event.pointerType === 'pen' && event.width && event.height) {
            const contactArea = event.width * event.height;
            if (contactArea > 400) { // Adjust threshold as needed
                console.log("XSheet: Large contact area detected on waveform, possibly palm - ignoring");
                return;
            }
        }
        
        this.isScrubbingVerticalWaveform = true;
        this.activeWaveformPointerId = event.pointerId;
        this.waveformPointerType = event.pointerType || 'mouse';
        document.body.style.userSelect = 'none';
        
        // Capture the pointer to ensure we get move and up events
        try {
            this.verticalWaveformCanvas.setPointerCapture(event.pointerId);
        } catch (err) {
            console.warn("Failed to capture pointer for waveform scrubbing:", err);
        }
        
        const time = this._yPosToAudioTime(canvasPos.y);
        this.projectData.audio.currentTime = time;
        
        if (this.audioHandler) {
            const fps = this.projectData.metadata.fps || 24;
            this.audioHandler.playScrubSnippet(time, 1.0 / fps);
        }
        
        document.dispatchEvent(new CustomEvent('playbackPositionChanged', { detail: { position: time } }));
        event.preventDefault();
    }

    _handleVerticalWaveformPointerMove(event) {
        if (!this.isScrubbingVerticalWaveform || 
            event.pointerId !== this.activeWaveformPointerId || 
            !this.projectData?.audio?.audioBuffer || 
            !this.verticalWaveformCanvas) return;
        
        const canvasRect = this.verticalWaveformCanvas.getBoundingClientRect();
        const canvasY = event.clientY - canvasRect.top;
        const clampedCanvasY = Math.max(0, Math.min(canvasY, this.verticalWaveformCanvas.height));
        const time = this._yPosToAudioTime(clampedCanvasY);
        const fps = this.projectData.metadata.fps || 24;
        
        this.projectData.audio.currentTime = time;
        document.dispatchEvent(new CustomEvent('playbackPositionChanged', { detail: { position: time, visualOnly: true } }));
        
        // Throttle audio scrubbing for smoother performance
        if (this.isScrubbingVerticalWaveform && Math.abs(time - (this.projectData.lastScrubPlayTime || 0)) > (0.7 / fps)) {
            if (this.audioHandler) this.audioHandler.playScrubSnippet(time, 1.0 / fps);
            this.projectData.lastScrubPlayTime = time;
        }
        
        event.preventDefault();
    }

    _handleVerticalWaveformPointerUp(event) {
        if (!this.isScrubbingVerticalWaveform || 
            (this.activeWaveformPointerId !== null && event.pointerId !== this.activeWaveformPointerId)) {
            return;
        }
        
        this.isScrubbingVerticalWaveform = false;
        this.activeWaveformPointerId = null;
        document.body.style.userSelect = '';
        
        // Release pointer capture
        if (this.verticalWaveformCanvas && event.pointerId !== undefined) {
            try {
                this.verticalWaveformCanvas.releasePointerCapture(event.pointerId);
            } catch (err) {
                // Ignore errors - pointer might already be released
            }
        }
        
        if (!this.projectData?.audio?.audioBuffer) return;
        
        // Final scrub play on release
        const canvasRect = this.verticalWaveformCanvas.getBoundingClientRect();
        const canvasY = event.clientY - canvasRect.top;
        const clampedCanvasY = Math.max(0, Math.min(canvasY, this.verticalWaveformCanvas.height));
        const time = this._yPosToAudioTime(clampedCanvasY);
        
        this.projectData.audio.currentTime = time;
        
        if (this.audioHandler) {
            const fps = this.projectData.metadata.fps || 24;
            this.audioHandler.playScrubSnippet(time, 1.0 / fps);
        }
        
        document.dispatchEvent(new CustomEvent('playbackPositionChanged', { detail: { position: time } }));
    }

    highlightFrame(frameIndex) {
        if (!this.tableBody || !this.projectData) return;
        const oldFrame = this.currentFrameHighlight;
        this.currentFrameHighlight = frameIndex;
        const oldHighlightedRow = this.tableBody.querySelector(`tr[data-frame-index="${oldFrame}"]`);
        if (oldHighlightedRow) oldHighlightedRow.classList.remove('highlighted-frame');
        if (frameIndex >= 0 && frameIndex < this.projectData.frameCount) {
            const newHighlightedRow = this.tableBody.querySelector(`tr[data-frame-index="${frameIndex}"]`);
            if (newHighlightedRow) newHighlightedRow.classList.add('highlighted-frame');
        }
        const fps = this.projectData.metadata.fps || 24;
        const newTimeFromFrame = frameIndex / fps;
        if (this.projectData.audio?.audioBuffer && this.projectData.audio.duration > 0) {
            if (Math.abs((this.projectData.audio.currentTime || 0) - newTimeFromFrame) > (0.01 / fps)) {
                this.projectData.audio.currentTime = Math.max(0, Math.min(newTimeFromFrame, this.projectData.audio.duration));
            }
        }
        this.renderVerticalWaveform();
    }
}
window.XSheet = XSheet; // Assign to window for dependency check