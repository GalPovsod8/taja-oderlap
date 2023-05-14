/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      NightDark: '#121113',
      EerieBlack: '#222725',
      EerieBlackHovered: '#2B312F',
      MossGreen: '#899878',
      Beige: '#E4E6C3',
      PullowerGold: '#F5B901',
      HighlightOrange: '#D26325',
      BabyPowder: '#F7F7F2',
      BabyPowderHovered: '#EDEDEB',
    },
    extend: {
      fontFamily:{
        Merriweather: ['Merriweather', 'serif'],
      },
      minHeight:{
        minSectionHeight: '900px',
      },
      height:{
        ExhibitionCardHeight: '600px',
      },
      maxHeight:{
        maxAboutImgHeight: '560px',
      },
      maxWidth:{
        maxBodyWidth: '1920px',
      },
      animation: {
        arrowAnimation: '4s ease-in-out infinite'
      },
      keyframes: {
        arrowAnimation: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
