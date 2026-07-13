/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        eggshell: '#fdfcfc',
        powder: '#f5f3f1',
        chalk: '#e5e5e5',
        fog: '#b1b0b0',
        gravel: '#777169',
        slateish: '#a59f97',
        cinder: '#575343',
        obsidian: '#000000',
        ember: '#ff4704',
        signal: '#0447ff',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '720px',
      },
      letterSpacing: {
        display: '-0.02em',
      },
    },
  },
  plugins: [],
};
