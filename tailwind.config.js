/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Minecraft-Bold"', 'sans-serif'],
      },
      height: {
        88: '22rem',
      },
      width: {
        88: '22rem',
      },
    },
  },
  plugins: [],
}
