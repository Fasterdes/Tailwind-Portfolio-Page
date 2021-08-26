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
                'light' : "#FFFBF9",
                'DEFAULT' : "#816150",
                'dark' : "#4B3C3B",
                
                // ONLY FOR BACKGROUND-COLOR
                'bg-semi-dark' : "rgba(228, 216, 212, 0.15)",
                'bg-dark'  : "#4B3C3B",
                'bg-light' : "#FFFBF9"
            },

            purple : { 
                'light' : "#DEDAFF"
            },

            blue : { 
                'light' : '#A8C2FF'
            }
      },

        fontFamily : { 
            // TYPOGRAPHY FROM GOOGLE FONTS
            'body-font' : ['Lato', 'sans-serif'],
            'heading-font' : ['Poppins' , 'sans-serif']
        } 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
