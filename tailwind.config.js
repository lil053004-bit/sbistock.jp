/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Theme - Light Green
        'green-primary': '#3DD598',
        'green-light': '#4ADE80',
        'green-dark': '#059669',
        'green-50': '#F0FDF4',
        'green-100': '#DCFCE7',
        'green-200': '#BBF7D0',

        // Dark Blue - Only for specific card areas
        'dark-blue': '#0A2540',
        'dark-blue-light': '#1E3A5F',
        'dark-blue-card': '#0F2942',

        // White Background System
        'bg-white': '#FFFFFF',
        'bg-gray-50': '#F9FAFB',
        'bg-gray-100': '#F3F4F6',
        'bg-gray-200': '#E5E7EB',

        // Text Colors
        'text-dark': '#111827',
        'text-gray': '#6B7280',
        'text-light-gray': '#9CA3AF',
        'text-slate': '#475569',

        // Neutral Colors
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

        // Legacy colors for compatibility
        'navy-950': '#0a1628',
        'navy-900': '#0f1e3a',
        'navy-800': '#1a2841',
        'navy-700': '#1e3a5f',
        'navy-600': '#2d4a7c',
        'navy-500': '#3d5a99',
        'gold-600': '#d97706',
        'gold-500': '#f59e0b',
        'gold-400': '#fbbf24',
        'gold-300': '#fcd34d',
        'accent-primary': '#3DD598',
        'accent-secondary': '#4ADE80',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'text-tertiary': '#9ca3af',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #3DD598 0%, #4ADE80 50%, #3DD598 100%)',
        'green-subtle': 'linear-gradient(to bottom, #3DD598, #4ADE80)',
        'dark-blue-gradient': 'linear-gradient(135deg, #0A2540 0%, #1E3A5F 100%)',
        'white-gradient': 'linear-gradient(to bottom, #FFFFFF, #F9FAFB)',
        'gray-gradient': 'linear-gradient(to bottom, #F9FAFB, #F3F4F6)',
        'neutral-gradient': 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
      },
      boxShadow: {
        'card-sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-md': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'card-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'green-subtle': '0 4px 20px rgba(61, 213, 152, 0.25)',
        'green-glow': '0 0 20px rgba(61, 213, 152, 0.3)',
        'dark-blue-subtle': '0 4px 20px rgba(10, 37, 64, 0.15)',
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
