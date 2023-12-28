import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffc800',
        secondary: '#282828',
        background: '#212121',
        text: {
          primary: '#fff',
          secondary: '#fff',
        },
      },
      spacing: {
        '1container': '72px',
        '1gap': '24px',
        '1container1gap': '96px',
        '4containers': '336px',
        '4containersExtraGap': '360px',
      },
    },
    fontFamily: {
      spaceMono: ['Space Mono', 'monospace'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
