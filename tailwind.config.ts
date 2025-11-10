import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de COMPAS según el documento maestro
        'compas-blue': {
          DEFAULT: '#0052CC',
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0052CC', // Color principal
          600: '#0042A3',
          700: '#00337A',
          800: '#002352',
          900: '#001429',
        },
        'aventura-green': {
          DEFAULT: '#00875A',
          50: '#E6F7F1',
          100: '#CCEFE3',
          200: '#99DFC7',
          300: '#66CFAB',
          400: '#33BF8F',
          500: '#00875A', // Color secundario
          600: '#006C48',
          700: '#005136',
          800: '#003624',
          900: '#001B12',
        },
        'tino-orange': {
          DEFAULT: '#FF5630',
          50: '#FFE9E6',
          100: '#FFD2CC',
          200: '#FFA699',
          300: '#FF7966',
          400: '#FF5630', // Acento 1 (aventura/retos)
          500: '#FF2E00',
          600: '#CC2500',
          700: '#991C00',
          800: '#661300',
          900: '#330900',
        },
        'mostacho-yellow': {
          DEFAULT: '#FFAB00',
          50: '#FFF7E6',
          100: '#FFEECC',
          200: '#FFDD99',
          300: '#FFCC66',
          400: '#FFBB33',
          500: '#FFAB00', // Acento 2 (sabiduría/secretos)
          600: '#CC8900',
          700: '#996700',
          800: '#664400',
          900: '#332200',
        },
        // Colores de soporte
        'compas-gray': {
          50: '#F4F5F7',
          100: '#EBECF0',
          200: '#DFE1E6',
          300: '#C1C7D0',
          400: '#B3BAC5',
          500: '#A5ADBA',
          600: '#8993A4',
          700: '#6B778C',
          800: '#5E6C84',
          900: '#172B4D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
