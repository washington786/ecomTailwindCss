module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily:{
        bebas:"'Bebas Neue', cursive",
        roboto:"'Nunito', sans-serif",
        nunito:"'Roboto', sans-serif",
        urbanist:"'Urbanist', sans-serif"
      },
      screens:{
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      },
      container:{
        center: true,
        padding: '1rem'
      }
    },
  },
  variants:{
    extend:{
      display: ['group-hover']
    }
  },
  plugins: [],
}
