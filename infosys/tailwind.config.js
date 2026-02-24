/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Campus Event Hub color system
        primary: {
          50: 'hsl(var(--ceh-primary) / 0.05)',
          100: 'hsl(var(--ceh-primary) / 0.1)',
          600: 'hsl(var(--ceh-primary))',
          700: 'hsl(var(--ceh-primary-dark))',
        },
        accent: {
          50: 'hsl(var(--ceh-accent) / 0.05)',
          500: 'hsl(var(--ceh-accent))',
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'sm': 'var(--ceh-shadow-sm)',
        'md': 'var(--ceh-shadow-md)',
        'lg': 'var(--ceh-shadow-lg)',
      },
    },
  },
  plugins: [],
}
