module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // specify other options here
  theme: {
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'gray': {
        100: '#f3f2f1', // bg hover
        200: '#edebe9', // bg selected
        300: '#E3E3E4', // buttons
        'disabled': '#c5c3c2', // text
        'border': '#707070', // border
        'text': '#343A3F', //text
      },
      'main-blue': '#0078D4'
    },
    extend: {
      boxShadow: {
        'md-right': '3px 0px 7px -3px rgba(0, 0, 0, 0.10)',
        'md-left': '-3px 0px 7px -3px rgba(0, 0, 0, 0.10)',
      },
    },
  },
};
