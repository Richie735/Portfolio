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
        primary: 'rgb(var(--primary-color))',
        primaryFade: 'rgb(var(--primary-color) / 70%)',
        primaryFade2: 'rgb(var(--primary-color) / 10%)',
        secondary: '#282828',
        background: '#212121',
        text: {
          primary: '#fff',
          secondary: '#fff',
        },
      },
      spacing: {
        '1gap': '24px',
        '2gap': '48px',
        '1container': '72px',
        '1container1gap': '96px',
        '1container2gap': '120px',
        '2containers': '168px',
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
