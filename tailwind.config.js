module.exports = {
  theme: {
    height: {
      xl: '500px'
    },
    extend: {
      colors: {
        'blue-1000-tall&round': '#152037',
        'red-1000': 'rgba(208,19,36,0.91)',
        'red-1100': '#D13245',
        'green-1000': '#A6DA00',
        'indigo-1000': '#714aaa'
      },
      height: () => ({
        'screen-90': '90vh'
      }),
      fontSize: {
        '7xl': '5rem'
      },
      inset: {
        '1/2': '50%'
      }
    }
  },
  variants: {},
  plugins: []
}
