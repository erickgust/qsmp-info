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
    },
  },
  plugins: [],
}
