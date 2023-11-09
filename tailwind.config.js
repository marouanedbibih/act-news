/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Colors
      colors:{
        purple:'#5B08A7',
        light:'#F6F6F6',
        light_border:"#E6E6E6",
        light_gray:'#B3B3B3',
        dark:'#212121',
        success:'#00A762',
        delete:'#B72424',
        alert:'#FF4040',
        blue:'2563FF',
      },
      fontFamily:{
        roboto:['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
