/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  theme: {
    extend: {
      screens: {
        ds: { max: '480px' },
        sm: { min: '480px', max: '770px' },
        md: { min: '770px', max: '1024px' },
        lg: { min: '1024px', max: '1250px' },
        xl: {min: '1250px'}
      }
    },
  },
  plugins: [],
}
