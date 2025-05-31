// js/audioHandler.js
class AudioHandler {
    constructor(projectData) {
        this.projectData = projectData;
        this.audioContext = null;
        this.mainAudioBuffer = null;
        this.currentMainSourceNode = null;
        this.currentScrubSourceNode = null;
        this.isPlayingContinuous = false;
        this.continuousPlayStartTimeInAc = 0;
        this.continuousPlaybackOffset = 0;

        this._init();
    }

    _init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log("AudioHandler: Web Audio API Context created.");
        } catch (e) {
            console.error("AudioHandler: Web Audio API is not supported in this browser.", e);
        }
    }

    async loadAudioFile(file) {
        if (!this.audioContext || !file) {
            console.error("AudioHandler: AudioContext not available or no file provided for loading.");
            this.projectData.clearAudioData();
            document.dispatchEvent(new CustomEvent('audioLoadFailed'));
            return null;
        }
        console.log(`AudioHandler: Loading audio file: ${file.name}`);
        this.stopContinuous();
        this.projectData.clearAudioData(false);

        try {
            const arrayBuffer = await file.arrayBuffer();
            this.mainAudioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            console.log("AudioHandler: Audio decoded successfully.");
            this.projectData.loadAudioData(this.mainAudioBuffer, file.name, null);
            document.dispatchEvent(new CustomEvent('audioLoaded', {
                detail: { filename: file.name, duration: this.mainAudioBuffer.duration }
            }));
            return this.mainAudioBuffer;
        } catch (e) {
            console.error(`AudioHandler: Error decoding audio data for ${file.name}:`, e);
            this.projectData.clearAudioData();
            document.dispatchEvent(new CustomEvent('audioLoadFailed'));
            return null;
        }
    }

    playContinuous(startOffsetSeconds = 0) {
        if (!this.mainAudioBuffer || !this.audioContext) { return; }
        if (this.isPlayingContinuous && this.currentMainSourceNode) { return; }
        this.stopContinuous();
        this.currentMainSourceNode = this.audioContext.createBufferSource();
        this.currentMainSourceNode.buffer = this.mainAudioBuffer;
        this.currentMainSourceNode.connect(this.audioContext.destination);
        const offset = Math.max(0, Math.min(startOffsetSeconds || this.continuousPlaybackOffset, this.mainAudioBuffer.duration));
        this.continuousPlaybackOffset = offset;
        try {
            this.currentMainSourceNode.start(0, offset);
            this.continuousPlaybackStartTimeInAc = this.audioContext.currentTime - offset;
            this.isPlayingContinuous = true;
            document.dispatchEvent(new CustomEvent('playbackStateChanged', { detail: { isPlaying: true } }));
            this.currentMainSourceNode.onended = () => {
                if (this.isPlayingContinuous && this.currentMainSourceNode) {
                    const timeWhenEnded = this.audioContext.currentTime - this.continuousPlaybackStartTimeInAc;
                    const endedNaturallyAtEnd = Math.abs(this.mainAudioBuffer.duration - timeWhenEnded) < 0.1;
                    this.isPlayingContinuous = false;
                    this.continuousPlaybackOffset = endedNaturallyAtEnd ? 0 : timeWhenEnded;
                    document.dispatchEvent(new CustomEvent('playbackStateChanged', { detail: { isPlaying: false } }));
                    document.dispatchEvent(new CustomEvent('playbackPositionChanged', { detail: { position: this.continuousPlaybackOffset } }));
                }
                this.currentMainSourceNode = null;
            };
        } catch (e) {
            console.error("AudioHandler: Error starting continuous playback:", e);
            this.isPlayingContinuous = false; this.currentMainSourceNode = null;
        }
    }

    pauseContinuous() {
        if (!this.currentMainSourceNode || !this.isPlayingContinuous || !this.audioContext) return;
        try { this.currentMainSourceNode.onended = null; this.currentMainSourceNode.stop(); }
        catch (e) { /* Might already be stopped */ }
        this.continuousPlaybackOffset = this.audioContext.currentTime - this.continuousPlaybackStartTimeInAc;
        this.isPlayingContinuous = false; this.currentMainSourceNode = null;
        document.dispatchEvent(new CustomEvent('playbackStateChanged', { detail: { isPlaying: false } }));
    }

    stopContinuous() {
        if (this.currentScrubSourceNode) {
            try { this.currentScrubSourceNode.stop(); } catch (e) { }
            this.currentScrubSourceNode.disconnect(); this.currentScrubSourceNode = null;
        }
        if (this.currentMainSourceNode) {
            try { this.currentMainSourceNode.onended = null; this.currentMainSourceNode.stop(); } catch (e) { }
            this.currentMainSourceNode.disconnect(); this.currentMainSourceNode = null;
        }
        this.isPlayingContinuous = false; this.continuousPlaybackOffset = 0;
        if (this.projectData && this.projectData.audio) this.projectData.audio.currentTime = 0;
        document.dispatchEvent(new CustomEvent('playbackStateChanged', { detail: { isPlaying: false } }));
        document.dispatchEvent(new CustomEvent('playbackPositionChanged', { detail: { position: 0 } }));
    }

    playScrubSnippet(timeInSeconds, snippetDurationHintSeconds = 0.05) {
        if (!this.mainAudioBuffer || !this.audioContext) return;
        if (this.currentScrubSourceNode) {
            try { this.currentScrubSourceNode.stop(); } catch (e) { }
            this.currentScrubSourceNode.disconnect(); this.currentScrubSourceNode = null;
        }
        this.currentScrubSourceNode = this.audioContext.createBufferSource();
        this.currentScrubSourceNode.buffer = this.mainAudioBuffer;
        this.currentScrubSourceNode.connect(this.audioContext.destination);
        const actualSnippetDuration = Math.max(0.03, snippetDurationHintSeconds);
        try {
            const startTime = Math.max(0, Math.min(timeInSeconds, this.mainAudioBuffer.duration - actualSnippetDuration));
            this.currentScrubSourceNode.start(0, startTime, actualSnippetDuration);
        } catch (e) {
            console.error("AudioHandler: Error starting scrub snippet:", e);
            this.currentScrubSourceNode = null;
        }
    }

    getCurrentContinuousPlaybackTime() {
        if (!this.audioContext) return this.continuousPlaybackOffset;
        if (!this.isPlayingContinuous) return this.continuousPlaybackOffset;
        return (this.audioContext.currentTime - this.continuousPlaybackStartTimeInAc);
    }
    getDuration() { return this.mainAudioBuffer ? this.mainAudioBuffer.duration : 0; }
}
window.AudioHandler = AudioHandler; // Assign to window for dependency check