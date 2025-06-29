/**
 * Site JavaScript for palette.css demo
 * Handles theme switching and interactive features
 */

document.addEventListener('DOMContentLoaded', function() {
    // Theme switcher functionality
    const themeSelect = document.getElementById('theme-select');
    const radiusSelect = document.getElementById('radius-select');
    const fontSelect = document.getElementById('font-select');
    const shadowSelect = document.getElementById('shadow-select');
    const spacingSelect = document.getElementById('spacing-select');
    const animSelect = document.getElementById('anim-select');

    // Set initial values based on current body attributes
    function initializeSelects() {
        const body = document.body;
        
        if (themeSelect) themeSelect.value = body.dataset.theme || 'default';
        if (radiusSelect) radiusSelect.value = body.dataset.radius || 'soft';
        if (fontSelect) fontSelect.value = body.dataset.font || 'sans';
        if (shadowSelect) shadowSelect.value = body.dataset.shadow || 'soft';
        if (spacingSelect) spacingSelect.value = body.dataset.spacing || 'normal';
        if (animSelect) animSelect.value = body.dataset.anim || 'smooth';
    }

    // Update body data attributes when select values change
    function updateTheme(attribute, value) {
        document.body.dataset[attribute] = value;
        
        // Add a visual feedback
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // Event listeners for theme controls
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            updateTheme('theme', e.target.value);
        });
    }

    if (radiusSelect) {
        radiusSelect.addEventListener('change', (e) => {
            updateTheme('radius', e.target.value);
        });
    }

    if (fontSelect) {
        fontSelect.addEventListener('change', (e) => {
            updateTheme('font', e.target.value);
        });
    }

    if (shadowSelect) {
        shadowSelect.addEventListener('change', (e) => {
            updateTheme('shadow', e.target.value);
        });
    }

    if (spacingSelect) {
        spacingSelect.addEventListener('change', (e) => {
            updateTheme('spacing', e.target.value);
        });
    }

    if (animSelect) {
        animSelect.addEventListener('change', (e) => {
            updateTheme('anim', e.target.value);
        });
    }

    // Initialize selects with current values
    initializeSelects();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add some interactive features
    const showcaseItems = document.querySelectorAll('.showcase-item');
    showcaseItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });

    // Add keyboard shortcuts for theme switching
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + 1-7 for color themes
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '7') {
            e.preventDefault();
            const themes = ['default', 'forest', 'ocean', 'neon', 'pastel', 'dark', 'sunset'];
            const themeIndex = parseInt(e.key) - 1;
            if (themes[themeIndex] && themeSelect) {
                themeSelect.value = themes[themeIndex];
                updateTheme('theme', themes[themeIndex]);
            }
        }
    });

    // Add theme persistence using localStorage
    function saveTheme() {
        const theme = {
            theme: document.body.dataset.theme,
            radius: document.body.dataset.radius,
            font: document.body.dataset.font,
            shadow: document.body.dataset.shadow,
            spacing: document.body.dataset.spacing,
            anim: document.body.dataset.anim
        };
        localStorage.setItem('palette-css-theme', JSON.stringify(theme));
    }

    function loadTheme() {
        const saved = localStorage.getItem('palette-css-theme');
        if (saved) {
            try {
                const theme = JSON.parse(saved);
                Object.entries(theme).forEach(([key, value]) => {
                    if (value) {
                        document.body.dataset[key] = value;
                    }
                });
                // Update selects to reflect loaded theme
                setTimeout(initializeSelects, 100);
            } catch (e) {
                console.warn('Failed to load saved theme:', e);
            }
        }
    }

    // Load saved theme on page load
    loadTheme();

    // Save theme when it changes
    [themeSelect, radiusSelect, fontSelect, shadowSelect, spacingSelect, animSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', saveTheme);
        }
    });

    // Add a "Reset to Default" button functionality
    function resetToDefault() {
        const defaultTheme = {
            theme: 'default',
            radius: 'soft',
            font: 'sans',
            shadow: 'soft',
            spacing: 'normal',
            anim: 'smooth'
        };
        
        Object.entries(defaultTheme).forEach(([key, value]) => {
            document.body.dataset[key] = value;
        });
        
        initializeSelects();
        saveTheme();
    }

    // Add randomize theme functionality
    function randomizeTheme() {
        const themes = ['default', 'forest', 'ocean', 'neon', 'pastel', 'dark', 'sunset'];
        const radiuses = ['soft', 'sharp', 'pill'];
        const fonts = ['sans', 'serif', 'mono', 'fun', 'tech'];
        const shadows = ['soft', 'deep', 'neumorphic', 'none'];
        const spacings = ['compact', 'normal', 'relaxed'];
        const anims = ['smooth', 'bounce', 'pop', 'none'];
        
        const randomTheme = {
            theme: themes[Math.floor(Math.random() * themes.length)],
            radius: radiuses[Math.floor(Math.random() * radiuses.length)],
            font: fonts[Math.floor(Math.random() * fonts.length)],
            shadow: shadows[Math.floor(Math.random() * shadows.length)],
            spacing: spacings[Math.floor(Math.random() * spacings.length)],
            anim: anims[Math.floor(Math.random() * anims.length)]
        };
        
        Object.entries(randomTheme).forEach(([key, value]) => {
            document.body.dataset[key] = value;
        });
        
        initializeSelects();
        saveTheme();
    }

    // Create button container and add buttons
    const themeSwitcher = document.querySelector('.theme-switcher .container');
    if (themeSwitcher) {
        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'theme-actions';
        
        // Create reset button
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset to Default';
        resetButton.className = 'btn btn-secondary';
        resetButton.addEventListener('click', resetToDefault);
        
        // Create randomize button
        const randomizeButton = document.createElement('button');
        randomizeButton.textContent = '🎲 Randomize Theme';
        randomizeButton.className = 'btn btn-primary';
        randomizeButton.addEventListener('click', randomizeTheme);
        
        // Add buttons to container
        buttonContainer.appendChild(resetButton);
        buttonContainer.appendChild(randomizeButton);
        
        // Add container to theme switcher
        themeSwitcher.appendChild(buttonContainer);
    }

    // Add theme info display
    function updateThemeInfo() {
        const currentTheme = {
            theme: document.body.dataset.theme || 'default',
            radius: document.body.dataset.radius || 'soft',
            font: document.body.dataset.font || 'sans',
            shadow: document.body.dataset.shadow || 'soft',
            spacing: document.body.dataset.spacing || 'normal',
            anim: document.body.dataset.anim || 'smooth'
        };

        const infoText = `Current: ${currentTheme.theme} + ${currentTheme.radius} + ${currentTheme.font} + ${currentTheme.shadow} + ${currentTheme.spacing} + ${currentTheme.anim}`;
        
        // Create or update info display
        let infoDisplay = document.getElementById('theme-info');
        if (!infoDisplay) {
            infoDisplay = document.createElement('div');
            infoDisplay.id = 'theme-info';
            infoDisplay.style.cssText = `
                text-align: center;
                margin-top: var(--space-md);
                padding: var(--space-sm);
                background-color: var(--code-bg);
                border-radius: var(--radius-sm);
                font-family: var(--font-mono);
                font-size: var(--font-size-sm);
                color: var(--text-muted);
            `;
            themeSwitcher.appendChild(infoDisplay);
        }
        infoDisplay.textContent = infoText;
    }

    // Update theme info when theme changes
    [themeSelect, radiusSelect, fontSelect, shadowSelect, spacingSelect, animSelect].forEach(select => {
        if (select) {
            select.addEventListener('change', updateThemeInfo);
        }
    });

    // Initial theme info display
    setTimeout(updateThemeInfo, 100);
}); 