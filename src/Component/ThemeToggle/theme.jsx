import { Sun03Icon, Moon02Icon } from 'hugeicons-react';
import React from 'react';
import {useTheme} from '../../Context/ThemeContext';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className="rounded-lg p-2 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800"
      >
        {isDark ? (
          <Sun03Icon size={22} className="shrink-0" primaryColor="currentColor" />
        ) : (
          <Moon02Icon size={22} className="shrink-0" primaryColor="currentColor" />
        )}
      </button>
    );
  }