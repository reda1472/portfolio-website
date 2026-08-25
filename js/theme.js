/**
 * Theme Engine — Dark / Light Mode Switcher
 * Reda Mohamed Salah Portfolio
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'rms_theme_pref';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Determine initial theme
  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === THEME_DARK || stored === THEME_LIGHT) {
      return stored;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? THEME_LIGHT
      : THEME_DARK;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateThemeToggleButtons(theme);
  }

  function updateThemeToggleButtons(theme) {
    const buttons = document.querySelectorAll('[data-theme-toggle]');
    buttons.forEach((btn) => {
      const isDark = theme === THEME_DARK;
      btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      btn.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      const iconLight = btn.querySelector('.theme-icon-light');
      const iconDark = btn.querySelector('.theme-icon-dark');
      if (iconLight && iconDark) {
        iconLight.style.display = isDark ? 'block' : 'none';
        iconDark.style.display = isDark ? 'none' : 'block';
      }
    });
  }

  function initTheme() {
    const currentTheme = getPreferredTheme();
    applyTheme(currentTheme);

    // Bind event listeners to theme toggles
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('[data-theme-toggle]');
      buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
          const activeTheme = document.documentElement.getAttribute('data-theme') || THEME_DARK;
          const newTheme = activeTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
          applyTheme(newTheme);
        });
      });
      updateThemeToggleButtons(currentTheme);
    });

    // Listen for OS system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }

  initTheme();
})();
