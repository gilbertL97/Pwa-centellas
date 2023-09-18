/** @type {import('tailwindcss').Config} */
import path from 'path';
import konstaConfig from 'konsta/config';
export default konstaConfig({

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line no-undef
        'taxi-img':  `url(${path.resolve(__dirname, 'src/assets/backgrounds/carBack.jpg')})`,
      }
    },
  },
  plugins: [],
});