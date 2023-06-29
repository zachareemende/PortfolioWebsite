/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    animation: {
      'slide-in-left': 'slide-in-left 0.5s ease-out',
      'scale-in': 'scale-in 0.5s ease-out',
      'slide-in-right': 'slide-in-right 0.5s ease-out',
      'float': 'float 3s infinite ease-in-out',
    },
    keyframes: {
      'slide-in-left': {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },
      'scale-in': {
        '0%': {
          transform: 'scale(0)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
      'slide-in-right': {
        '0%': {
          transform: 'translateX(100%)',
        },
        '100%': {
          transform: 'translateX(0)',
        },
      },
      'float': {
        '0%, 100%': {
          transform: 'translateY(0)',
        },
        '50%': {
          transform: 'translateY(-8px)',
        },
      },
    },
    },
  },
  variants: {},
  plugins: [],
};
