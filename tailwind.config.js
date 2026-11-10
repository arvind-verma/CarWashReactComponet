/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101114',
        charcoal: '#25272B',
        steel: '#777B82',
        mist: '#E8E9EB',
        soft: '#F4F5F6',
        body: '#17191C',
        snow: '#F7F7F8',
        silver: '#C9CBCF',
      },
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '1320px' },
      boxShadow: {
        soft: '0 1px 2px rgba(16,17,20,.04), 0 12px 32px -12px rgba(16,17,20,.14)',
        lift: '0 2px 4px rgba(16,17,20,.06), 0 28px 56px -20px rgba(16,17,20,.28)',
      },
      letterSpacing: { eyebrow: '0.22em' },
    },
  },
  plugins: [],
};
