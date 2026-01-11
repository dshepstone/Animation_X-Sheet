# Animation X-Sheet

> Professional animation timing sheet tool with audio synchronization, drawing tools, and export capabilities

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/animationxsheet/Animation_X-Sheet.svg)](https://github.com/animationxsheet/Animation_X-Sheet/releases)
[![GitHub stars](https://img.shields.io/github/stars/animationxsheet/Animation_X-Sheet.svg)](https://github.com/animationxsheet/Animation_X-Sheet/stargazers)

**Animation X-Sheet** is a comprehensive web-based tool for creating professional animation timing sheets (exposure sheets). Built for animators, by animators, it combines traditional timing sheet functionality with modern digital features including audio synchronization, drawing tools, and professional export capabilities.

## 🌟 Features

### 📊 Professional Timing Sheets
- **Customizable columns** for action, dialogue, sound effects, technical notes, and more
- **Frame numbering** with automatic second markers and timing indicators
- **Editable cells** for detailed animation planning
- **Custom column naming** to match your workflow

### 🎵 Audio Integration
- **Audio import** supporting MP3, WAV, OGG, M4A, AAC, and FLAC formats
- **Waveform visualization** for precise timing alignment
- **Scrubbing controls** for frame-accurate positioning
- **Automatic frame count** adjustment based on audio duration

### ✏️ Drawing Tools
- **Pen tool** with pressure sensitivity for stylus/tablet users
- **Shape tools** including lines, rectangles, and ellipses
- **Eraser tool** for selective editing
- **Color picker** and adjustable line weights
- **Layer system** for non-destructive overlay drawing

### 📁 Project Management
- **Folder-based organization** with automatic subfolder creation
- **Scene management** for complex projects
- **Audio library** integration within projects
- **Export organization** with automatic PDF storage
- **Version control** friendly JSON file format

### 📄 Professional Export
- **High-quality PDF export** with vector graphics
- **Multi-page support** for long animations
- **Automatic pagination** and page numbering
- **Metadata inclusion** in exported sheets
- **Print-ready output** for production use

### 🎯 Enhanced Usability
- **No installation required** - runs in any modern browser
- **Offline functionality** - works without internet connection
- **Cross-platform compatibility** - Windows, macOS, Linux, ChromeOS
- **Responsive design** - works on tablets and mobile devices
- **Keyboard shortcuts** for efficient workflow

## 🚀 Quick Start

### Option 1: Download and Run Locally
1. **Download** the latest release from the [releases page](https://github.com/animationxsheet/Animation_X-Sheet/releases)
2. **Extract** the ZIP file to your desired location
3. **Open** `index.html` in a modern web browser
4. **Start creating** your animation timing sheets!

### Option 2: Use Web Version
Visit [app.animationxsheet.com](https://app.animationxsheet.com) to use the tool directly in your browser.

### Option 3: Clone Repository
```bash
git clone https://github.com/animationxsheet/Animation_X-Sheet.git
cd Animation_X-Sheet
open index.html  # or start a local web server
```

## 📖 Documentation

- **[How to Use Guide](https://animationxsheet.com/how-to-use.php)** - Complete tutorial covering all features
- **[Help Documentation](https://animationxsheet.com/help.php)** - FAQ, troubleshooting, and detailed reference
- **[Download Instructions](https://animationxsheet.com/download.php)** - Multiple download options and system requirements

## 🖥️ System Requirements

### Browser Support
- **Recommended:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Minimum:** Any browser with ES6 support and Web Audio API
- **Enhanced Features:** File System Access API (Chrome/Edge 86+)

### Hardware Requirements
- **RAM:** 4GB minimum, 8GB recommended
- **Storage:** 100MB for application + project storage
- **Audio:** Speakers or headphones for audio playback
- **Input:** Mouse, trackpad, or drawing tablet/stylus

### Platform Support
- **Desktop:** Windows 10+, macOS 10.15+, Linux (Ubuntu 18.04+)
- **Mobile:** iOS 14+, Android 10+ (limited functionality)
- **Tablets:** Full support on iPad Pro with Apple Pencil

## 🏗️ Architecture

Animation X-Sheet is built as a client-side web application using:

- **Vanilla JavaScript** (ES6+) - No frameworks, maximum compatibility
- **Web Audio API** - For audio playback and waveform generation
- **Canvas API** - For drawing tools and waveform visualization
- **File System Access API** - For enhanced project management (when supported)
- **Web Standards** - PDF generation, local storage, responsive design

### File Structure
```
Animation_X-Sheet/
├── index.html              # Main application entry point
├── css/
│   └── style.css           # Complete application styles
├── js/
│   ├── main.js             # Application initialization
│   ├── projectData.js      # Data management and persistence
│   ├── audioHandler.js     # Audio playback and waveform
│   ├── xsheet.js           # Timing sheet interface
│   ├── drawingTools.js     # Drawing tool management
│   ├── drawingCanvas.js    # Canvas-based drawing system
│   ├── exportHandler.js    # PDF export functionality
│   ├── projectManager.js   # Project folder management
│   ├── fileHandler.js      # File save/load operations
│   └── uiControls.js       # UI interaction handling
├── README.md               # This file
├── LICENSE                 # MIT License
└── docs/                   # Additional documentation
```

## 🎨 Usage Examples

### Basic Workflow
1. **Create or set a project folder** for organization
2. **Import your audio track** to establish timing
3. **Set frame rate and duration** to match your animation
4. **Fill in timing information** using the editable columns
5. **Add visual notes** with the drawing tools
6. **Export to PDF** for production use

### Advanced Features
- **Custom column names:** Right-click column headers to rename
- **Audio scrubbing:** Click and drag on the waveform for precise timing
- **Drawing layers:** Sketch over timing sheets without affecting data
- **Version control:** JSON files work seamlessly with Git workflows
- **Team collaboration:** Share project folders via cloud storage

## 🤝 Contributing

We welcome contributions from the animation community! Here's how you can help:

### Ways to Contribute
- 🐛 **Report bugs** via [GitHub Issues](https://github.com/animationxsheet/Animation_X-Sheet/issues)
- 💡 **Suggest features** through [GitHub Discussions](https://github.com/animationxsheet/Animation_X-Sheet/discussions)
- 🔧 **Submit code** via pull requests
- 📖 **Improve documentation** 
- 🧪 **Test new features** and provide feedback
- 💬 **Help other users** in community discussions

### Development Setup
1. **Fork** this repository
2. **Clone** your fork: `git clone https://github.com/yourusername/Animation_X-Sheet.git`
3. **Create a branch:** `git checkout -b feature/your-feature-name`
4. **Make changes** and test thoroughly
5. **Commit changes:** `git commit -m "Add your feature"`
6. **Push to branch:** `git push origin feature/your-feature-name`
7. **Submit a pull request**

### Development Guidelines
- **No build process** - the application runs directly in browsers
- **Vanilla JavaScript** - keep dependencies minimal
- **Progressive enhancement** - ensure core functionality works everywhere
- **Cross-browser testing** - test in multiple browsers
- **Accessibility** - maintain keyboard navigation and screen reader support

## 🧪 Testing

### Manual Testing
- **Cross-browser compatibility** testing
- **Audio format support** verification
- **Drawing tool accuracy** on various devices
- **Export quality** validation
- **Performance testing** with large projects

### Automated Testing
Currently, testing is primarily manual. Contributions for automated testing setup are welcome!

## 📋 Roadmap

### Current Version (1.0.0)
- ✅ Complete timing sheet functionality
- ✅ Audio synchronization and waveform display
- ✅ Drawing tools with pen/stylus support
- ✅ Project management system
- ✅ PDF export functionality
- ✅ Column customization features

### Planned Features
- 🎬 **Video import and synchronization**
- 📤 **Additional export formats** (CSV, XML)
- 👥 **Enhanced collaboration features**
- 📋 **Template system** for common workflows
- ⌨️ **Keyboard shortcut customization**
- 🌍 **Multi-language support**
- 🔄 **Undo/redo system** for drawing tools
- 📊 **Analytics and timing statistics**

### Community Requests
See our [feature request discussions](https://github.com/animationxsheet/Animation_X-Sheet/discussions/categories/ideas) for community-driven development priorities.

## 🌐 Website and Resources

- **Official Website:** [animationxsheet.com](https://animationxsheet.com)
- **Web Application:** [app.animationxsheet.com](https://app.animationxsheet.com)
- **Documentation:** [animationxsheet.com/help.php](https://animationxsheet.com/help.php)
- **Tutorial Guide:** [animationxsheet.com/how-to-use.php](https://animationxsheet.com/how-to-use.php)

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Free to use** for personal, educational, and commercial projects
- ✅ **Free to modify** and distribute
- ✅ **No warranty** - use at your own risk
- ✅ **Attribution appreciated** but not required

## 🏆 Acknowledgments

- **Animation Community** - For feedback and feature suggestions
- **Open Source Contributors** - For code contributions and bug reports
- **Web Standards Organizations** - For the APIs that make this possible
- **Traditional Animation** - For the timing sheet concepts this tool digitizes

## 📊 Project Stats

- **Language:** JavaScript (ES6+)
- **Size:** ~2MB download
- **Dependencies:** None (vanilla JavaScript)
- **Browser Support:** 95%+ of modern browsers
- **License:** MIT
- **First Release:** 2024

## 🔗 Related Projects

- **OpenToonz** - Professional 2D animation software
- **Blender Grease Pencil** - 2D animation in 3D environment
- **Pencil2D** - Traditional hand-drawn animation
- **Krita** - Digital painting with animation features

## 📞 Support

Having trouble? Here's how to get help:

1. **Check the [Help Documentation](https://animationxsheet.com/help.php)** for common issues
2. **Search [existing issues](https://github.com/animationxsheet/Animation_X-Sheet/issues)** for solutions
3. **Join [community discussions](https://github.com/animationxsheet/Animation_X-Sheet/discussions)** for user support
4. **Create a new issue** for bugs or specific problems

---

**Made with ❤️ for the animation community**

*Animation X-Sheet is an open-source project maintained by animators for animators. Star this repo if you find it useful!*

[![GitHub stars](https://img.shields.io/github/stars/animationxsheet/Animation_X-Sheet.svg?style=social&label=Star)](https://github.com/animationxsheet/Animation_X-Sheet/stargazers)