// tailwind.config.ts or tailwind.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        shine: {
          '0%': { transform: 'translate(-100%, -100%)' },
          '100%': { transform: 'translate(200%, 200%)' },
        },
      },
      animation: {
        shine: 'shine 1s ease-in-out',
      },
    },
  },
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  plugins: [],
}