/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Navy Blue
        'navy-950': '#0a1628',
        'navy-900': '#0f1e3a',
        'navy-800': '#1a2841',
        'navy-700': '#1e3a5f',
        'navy-600': '#2d4a7c',
        'navy-500': '#3d5a99',

        // Secondary Accent - Gold/Bronze
        'gold-600': '#d97706',
        'gold-500': '#f59e0b',
        'gold-400': '#fbbf24',
        'gold-300': '#fcd34d',

        // Neutral Backgrounds
        'neutral-50': '#f8f9fa',
        'neutral-100': '#e9ecef',
        'neutral-200': '#dee2e6',
        'neutral-700': '#495057',
        'neutral-800': '#343a40',
        'neutral-900': '#212529',

        // Semantic Colors (Stock Market Standard)
        'stock-up': '#dc2626',     // Red for gains (Japanese standard)
        'stock-down': '#16a34a',   // Green for losses (Japanese standard)
        'success': '#059669',
        'warning': '#d97706',
        'error': '#dc2626',

        // Utility Colors
        'accent-primary': '#2563eb',  // Professional blue for CTAs
        'accent-secondary': '#0891b2', // Teal for secondary actions
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
        'text-tertiary': '#6b7280',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0a1628 0%, #1a2841 50%, #2d4a7c 100%)',
        'navy-subtle': 'linear-gradient(to bottom, #1a2841, #2d4a7c)',
        'gold-gradient': 'linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)',
        'neutral-gradient': 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
        'accent-gradient': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
      },
      boxShadow: {
        'card-sm': '0 2px 8px rgba(10, 22, 40, 0.1)',
        'card-md': '0 4px 16px rgba(10, 22, 40, 0.15)',
        'card-lg': '0 8px 32px rgba(10, 22, 40, 0.2)',
        'gold-subtle': '0 4px 20px rgba(217, 119, 6, 0.15)',
        'accent-subtle': '0 4px 20px rgba(37, 99, 235, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.95 },
        },
      },
      fontFamily: {
        'title': ['HYYaKuHeiW', 'Noto Sans JP', 'sans-serif'],
        'subtitle': ['Adobe Heiti Std', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '28': '112px',
        '30': '120px',
        '36': '144px',
        '40': '160px',
      },
    },
  },
  plugins: [],
};
