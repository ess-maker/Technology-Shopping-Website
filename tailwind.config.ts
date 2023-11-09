import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        main:'#1D293F',
        secondary:'#00B1A7',
        blacky:'#212529',
        gray_300:'#99A3AD'
      }
    },
  },
  plugins: [],
}
export default config
