module.exports = {
  purge: [
    './dist/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors : { 
            brown : { 
                // TYPOGRAPHY COLOR OR EITHER
                'light-brown' : "#FFFBF9",
                'brown' : "#816150",
                'dark-brown' : "#4B3C3B",
                
                // ONLY FOR BACKGROUND-COLOR
                'bg-brown-semi-dark' : "rgba(228, 216, 212, 0.15)",
                'bg-brown-dark'  : "#4B3C3B",
                'bg-brown-light' : "#FFFBF9"
            }
      },

        fontFamily : { 
            // TYPOGRAPHY FROM GOOGLE FONTS
            'body-font' : ['Lato', 'sans-serif'],
            'heading-font' : ['Inter' , 'sans-serif']
        } 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
