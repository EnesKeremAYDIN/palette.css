/**
 * palette.css Theme Loader
 * Dynamically loads theme files based on data-* attributes on the body element
 */

(function() {
  'use strict';

  // Configuration for theme attributes and their corresponding folders
  const themeConfig = [
    { name: 'theme', folder: 'colors' },
    { name: 'radius', folder: 'radius' },
    { name: 'font', folder: 'font' },
    { name: 'shadow', folder: 'shadow' },
    { name: 'spacing', folder: 'spacing' },
    { name: 'anim', folder: 'anim' }
  ];

  // Base path for palette files
  const basePath = '/palette.css/palettes/';

  /**
   * Remove old theme CSS for a given type
   */
  function removeOldThemeCSS(folder) {
    const selector = `link[data-palette-type="${folder}"]`;
    document.querySelectorAll(selector).forEach(link => link.parentNode.removeChild(link));
  }

  /**
   * Load a CSS file dynamically, ensuring only one per type
   * @param {string} href - The path to the CSS file
   * @param {string} folder - The theme type (colors, radius, ...)
   * @returns {Promise} - Promise that resolves when the CSS is loaded
   */
  function loadCSS(href, folder) {
    return new Promise((resolve, reject) => {
      // Remove old theme CSS for this type
      removeOldThemeCSS(folder);
      // Check if the stylesheet is already loaded (should not happen, but safe)
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (existingLink) {
        resolve();
        return;
      }
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.setAttribute('data-palette-type', folder);
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
      document.head.appendChild(link);
    });
  }

  /**
   * Load theme files based on data attributes
   */
  function loadThemes() {
    const body = document.body;
    const promises = [];
    themeConfig.forEach(({ name, folder }) => {
      const value = body.dataset[name];
      if (value) {
        const cssPath = `${basePath}${folder}/${value}.css`;
        promises.push(loadCSS(cssPath, folder));
      } else {
        removeOldThemeCSS(folder);
      }
    });
    return Promise.all(promises);
  }

  /**
   * Update themes when data attributes change
   */
  function updateThemes() {
    const body = document.body;
    themeConfig.forEach(({ name, folder }) => {
      const value = body.dataset[name];
      if (value) {
        const cssPath = `${basePath}${folder}/${value}.css`;
        loadCSS(cssPath, folder).catch(error => {
          console.warn(`Theme loading warning: ${error.message}`);
        });
      } else {
        removeOldThemeCSS(folder);
      }
    });
  }

  /**
   * Initialize theme loading and observer
   */
  function init() {
    function start() {
      loadThemes();
      if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName.startsWith('data-')) {
              updateThemes();
            }
          });
        });
        observer.observe(document.body, {
          attributes: true,
          attributeFilter: ['data-theme', 'data-radius', 'data-font', 'data-shadow', 'data-spacing', 'data-anim']
        });
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', start);
    } else {
      start();
    }
  }

  // Initialize when script loads
  init();

  // Expose functions globally for manual control
  window.paletteCSS = {
    loadThemes,
    updateThemes,
    loadCSS
  };

})(); 