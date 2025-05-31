// js/drawingTools.js
console.log("drawingTools.js loaded.");
window.XSheetApp = window.XSheetApp || {};
window.XSheetApp.DrawingTools = {
    activeTool: 'pen',
    activeColor: '#FF0000',
    activeLineWidth: 2,

    init: function (projectData, toolbarContainerEl) {
        console.log("DrawingTools init.");
        this.projectData = projectData;
        this.toolbarContainer = toolbarContainerEl;

        // Get tool buttons
        this.toolButtons = this.toolbarContainer.querySelectorAll('[data-tool]');
        this.colorPicker = document.getElementById('drawingColor');
        this.lineWidthSelect = document.getElementById('lineWidth');
        this.clearButton = document.getElementById('btnClearAllDrawings');

        // Set up tool button listeners
        this.toolButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const tool = button.getAttribute('data-tool');
                this.setActiveTool(tool);
            });
        });

        // Set up color picker
        if (this.colorPicker) {
            this.colorPicker.addEventListener('change', (e) => {
                this.activeColor = e.target.value;
                document.dispatchEvent(new CustomEvent('drawingColorChanged', {
                    detail: { color: this.activeColor }
                }));
            });
        }

        // Set up line width
        if (this.lineWidthSelect) {
            this.lineWidthSelect.addEventListener('change', (e) => {
                this.activeLineWidth = parseInt(e.target.value);
                document.dispatchEvent(new CustomEvent('drawingLineWidthChanged', {
                    detail: { lineWidth: this.activeLineWidth }
                }));
            });
        }

        // Set up clear button
        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => {
                if (confirm('Clear all drawings? This cannot be undone.')) {
                    this.projectData.clearAllDrawings();
                    document.dispatchEvent(new CustomEvent('drawingChanged', { detail: { allLayers: true } }));
                }
            });
        }

        // Set initial tool
        this.setActiveTool(this.activeTool);
    },

    setActiveTool: function (toolName) {
        console.log("Setting active tool:", toolName);
        this.activeTool = toolName;

        // Update UI
        this.toolButtons.forEach(button => {
            if (button.getAttribute('data-tool') === toolName) {
                button.classList.add('active-tool');
            } else {
                button.classList.remove('active-tool');
            }
        });

        // Dispatch event - PATCHED EVENT NAME
        document.dispatchEvent(new CustomEvent('toolChanged', { // Corrected event name
            detail: { tool: toolName }
        }));
    },

    getActiveTool: function () {
        return this.activeTool;
    },

    getActiveColor: function () {
        return this.activeColor;
    },

    getActiveLineWidth: function () {
        return this.activeLineWidth;
    },

    // New method for eraser functionality
    isEraser: function () {
        return this.activeTool === 'eraser';
    },

    // Method to erase objects at a point
    eraseAtPoint: function (worldX, worldY, eraserRadius = 10) {
        if (!this.projectData || !this.projectData.drawingLayers) return false;

        const activeLayerIndex = this.projectData.activeDrawingLayerIndex;
        if (activeLayerIndex < 0 || activeLayerIndex >= this.projectData.drawingLayers.length) return false;

        const activeLayer = this.projectData.drawingLayers[activeLayerIndex];
        if (!activeLayer.objects) return false;

        let erasedSomething = false;
        const objectsToKeep = [];

        activeLayer.objects.forEach(obj => {
            if (this._isObjectNearPoint(obj, worldX, worldY, eraserRadius)) {
                erasedSomething = true;
                // Don't keep this object (erase it)
            } else {
                objectsToKeep.push(obj);
            }
        });

        if (erasedSomething) {
            activeLayer.objects = objectsToKeep;
            this.projectData.isModified = true;
            document.dispatchEvent(new CustomEvent('drawingChanged', {
                detail: { layerIndex: activeLayerIndex }
            }));
        }

        return erasedSomething;
    },

    // Helper method to check if an object is near a point
    _isObjectNearPoint: function (obj, pointX, pointY, radius) {
        if (!obj.points || obj.points.length === 0) return false;

        // For pen tool - check if any segment is near the point
        if (obj.tool === 'pen') {
            for (let i = 0; i < obj.points.length; i++) {
                const p = obj.points[i];
                const distance = Math.sqrt((p.x - pointX) ** 2 + (p.y - pointY) ** 2);
                if (distance <= radius) return true;

                // Also check line segments between points
                if (i > 0) {
                    const prevP = obj.points[i - 1];
                    if (this._distanceFromPointToLineSegment(pointX, pointY, prevP.x, prevP.y, p.x, p.y) <= radius) {
                        return true;
                    }
                }
            }
        }
        // For line tool - check the line segment
        else if (obj.tool === 'line' && obj.points.length >= 2) {
            const p0 = obj.points[0];
            const p1 = obj.points[1];
            return this._distanceFromPointToLineSegment(pointX, pointY, p0.x, p0.y, p1.x, p1.y) <= radius;
        }
        // For rectangle tool - check if point is inside or near the rectangle
        else if (obj.tool === 'rectangle' && obj.points.length >= 2) {
            const p0 = obj.points[0];
            const p1 = obj.points[1];
            const left = Math.min(p0.x, p1.x);
            const right = Math.max(p0.x, p1.x);
            const top = Math.min(p0.y, p1.y);
            const bottom = Math.max(p0.y, p1.y);

            // Check if point is inside rectangle or near its edges
            if (pointX >= left - radius && pointX <= right + radius &&
                pointY >= top - radius && pointY <= bottom + radius) {
                // If inside rectangle, definitely erase
                if (pointX >= left && pointX <= right && pointY >= top && pointY <= bottom) {
                    return true;
                }
                // Check distance to edges
                const distToLeft = Math.abs(pointX - left);
                const distToRight = Math.abs(pointX - right);
                const distToTop = Math.abs(pointY - top);
                const distToBottom = Math.abs(pointY - bottom);

                if ((pointY >= top && pointY <= bottom && (distToLeft <= radius || distToRight <= radius)) ||
                    (pointX >= left && pointX <= right && (distToTop <= radius || distToBottom <= radius))) {
                    return true;
                }
            }
        }
        // For ellipse tool - check if point is inside or near the ellipse
        else if (obj.tool === 'ellipse' && obj.points.length >= 2) {
            const p0 = obj.points[0];
            const p1 = obj.points[1];
            const centerX = (p0.x + p1.x) / 2;
            const centerY = (p0.y + p1.y) / 2;
            const radiusX = Math.abs(p1.x - p0.x) / 2;
            const radiusY = Math.abs(p1.y - p0.y) / 2;

            if (radiusX > 0 && radiusY > 0) {
                // Check if point is inside ellipse
                const normalizedX = (pointX - centerX) / radiusX;
                const normalizedY = (pointY - centerY) / radiusY;
                const distanceFromCenter = Math.sqrt(normalizedX ** 2 + normalizedY ** 2);

                // If inside ellipse or near its edge
                return distanceFromCenter <= 1 + (radius / Math.min(radiusX, radiusY));
            }
        }

        return false;
    },

    // Helper method to calculate distance from point to line segment
    _distanceFromPointToLineSegment: function (px, py, x1, y1, x2, y2) {
        const lineLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (lineLength === 0) {
            return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
        }

        const t = Math.max(0, Math.min(1, ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / (lineLength ** 2)));
        const projectionX = x1 + t * (x2 - x1);
        const projectionY = y1 + t * (y2 - y1);

        return Math.sqrt((px - projectionX) ** 2 + (py - projectionY) ** 2);
    }
};

// js/uiControls.js
console.log("uiControls.js loaded (placeholder).");
window.XSheetApp = window.XSheetApp || {};
window.XSheetApp.UiControls = {
    init: function (projectData, audioHandler, xsheet, domElements) {
        console.log("Placeholder UiControls init.");
        // Example: General purpose buttons from header could be handled here
        // domElements.refreshButton?.addEventListener('click', () => {
        //     if (xsheet?.render) xsheet.render();
        // });
    }
};