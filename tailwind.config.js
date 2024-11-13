/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
     "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      sidebarPrimary: '#202225',
      sidebarSecondary: '#5865f2'
    },
  },
  plugins: [],
}

