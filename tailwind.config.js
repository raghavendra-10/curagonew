/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'SF Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary palette
        'primary': '#0A0A0A',
        'secondary': '#3A3A3A',
        'muted': '#6B6B6B',

        // Surfaces
        'surface': '#FFFFFF',
        'surface-muted': '#F8F9FA',
        'surface-accent': '#F0F4F8',

        // Borders
        'border': '#E5E7EB',
        'border-light': '#F0F0F0',

        // Accent colors - Sophisticated teal/blue
        'accent': {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },

        // Secondary accent - Warm sage/green
        'sage': {
          50: '#F6F8F6',
          100: '#E8F0E8',
          200: '#D1E0D1',
          300: '#A8C4A8',
          400: '#6FA76F',
          500: '#4A8B4A',
          600: '#3A6F3A',
          700: '#2E5A2E',
          800: '#234523',
          900: '#1A341A',
        },

        // Tertiary - Warm amber for highlights
        'amber': {
          50: '#FFFBF5',
          100: '#FFF7EB',
          200: '#FFECD1',
          300: '#FFD9A3',
          400: '#FFBE6B',
          500: '#FFA043',
          600: '#E87E1F',
          700: '#C25E0F',
          800: '#9A4710',
          900: '#7A3710',
        },
      },
      maxWidth: {
        'container': '1200px',
        'content': '720px',
      },
      borderRadius: {
        'button': '12px',
        'card': '16px',
      },
      fontSize: {
        'xs': ['13px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['18px', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #F0F9FF 0%, #FFFFFF 100%)',
        'gradient-sage': 'linear-gradient(135deg, #F6F8F6 0%, #FFFFFF 100%)',
        'gradient-warm': 'linear-gradient(135deg, #FFFBF5 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
}
