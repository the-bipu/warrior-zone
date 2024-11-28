// src/stores/theme.js
import { writable } from 'svelte/store';

// Initialize the store with the value from localStorage or a default value
const themeFromStorage = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light';

export const theme = writable(themeFromStorage);

// Subscribe to changes and update localStorage
theme.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value);
  }
});