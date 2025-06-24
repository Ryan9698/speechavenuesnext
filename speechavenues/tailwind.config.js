/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        xxs: '4rem', // 64px
        xs: '8rem', // 128px
        sm: '16rem', // 256px
        md: '24rem', // 384px
        lg: '32rem', // 512px
        xl: '40rem', // 640px
        '2xl': '48rem', // 768px
        '3xl': '56rem', // 896px
        '4xl': '64rem', // 1024px
        '5xl': '72rem', // 1152px
        '6xl': '80rem', // 1280px
        '7xl': '88rem', // 1408px
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      height: {
        xxs: '4rem', // 64px
        xs: '8rem', // 128px
        sm: '16rem', // 256px
        md: '24rem', // 384px
        lg: '32rem', // 512px
        xl: '40rem', // 640px
        '2xl': '48rem', // 768px
        '3xl': '56rem', // 896px
        '4xl': '64rem', // 1024px
        '5xl': '72rem', // 1152px
        '6xl': '80rem', // 1280px
        '7xl': '88rem', // 1408px
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        nunito: ['var(--font-nunito-sans)', 'sans-serif'],
        schoolbell: ['var(--font-schoolbell)', 'cursive'],
        dancing: ['var(--font-dancing-script)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Animation for the Rocking Pencil
      animation: {
        rock: 'rock 2s infinite ease-in-out',
      },
      keyframes: {
        rock: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
