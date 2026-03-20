import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2D6B',
          dark: '#0F1A40',
          darker: '#0A1230',
          darkest: '#070E1F',
          mid: '#1B2D6B',
          hover: '#243580',
          card: '#162040',
        },
        green: {
          DEFAULT: '#6BB52E',
          hover: '#7FCC37',
          muted: '#5B7A3A',
        },
        light: {
          DEFAULT: '#F0EEE8',
          warm: '#F4F2EC',
          active: '#EDEAE2',
          deliverable: '#E8E5DD',
        },
        muted: {
          DEFAULT: '#8A94B0',
          light: '#5A6480',
        },
        border: {
          dark: 'rgba(255, 255, 255, 0.08)',
          light: 'rgba(27, 45, 107, 0.10)',
        }
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'sans-serif'],
        condensed: ['var(--font-barlow-condensed)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.65s ease forwards',
        'scroll-left': 'scrollLeft 28s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
