/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':{'max':'430px'},
      },
      spacing: {
        '149':'38rem',
        '148': '37rem',
        '120':'36rem',
        '152':'42rem',
        '90':'25rem',
        '98':'28rem',
        '100':'30rem',
        '110':'33rem',
        'ppx':'0.5px',
        '400px': '400px'
      },
      fontSize:{
        tsm:['13px','19px'],
        ssm:['12px','18px'],
        xsm:['11px','17px'],
        xxsm:['10px','16px'],
        xxxsm:['8px','12px'],
      },
    },
  },
  plugins: [],
}
