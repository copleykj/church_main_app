module.exports = {
  content: ['./app/ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
   darkMode: 'class',
   theme: {
    extend: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  
    colors: {
      white: '#FFFFFF',
      primary: '#182f3f',
      secondry: '#1d3333',
      tertiaryOne: '#eb8338',
      tertiaryTwo: '#abb8c3',
      tertiaryThree: '#cdbda1',

    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px', lettterSpacing: '-0.03em' }],
      sm: ['16px', { lineHeight: '28px', lettterSpacing: '-0.03em' }],
      lg: ['18px', { lineHeight: '28px', lettterSpacing: '-0.03em' }],
      xl: ['24px', { lineHeight: '36px', lettterSpacing: '-0.03em' }],
      '2xl': ['36x', { lineHeight: '48px', lettterSpacing: '-0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', lettterSpacing: '-0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', lettterSpacing: '-0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', lettterSpacing: '-0.032em' }],
     
    },
    boxShadow: {
      'sm': '0 2px 4px -0px rgba(11, .10, .55, 0.15)',
      'lg': '0 8px 20px -0px rgba(18, .16, .99, 0.6)',
    },
    lineClamp: {
      3: '3',
      1: '1',
     
    },
    variants: {
      lineClamp: ['responsive', 'hover']
    },

    fontFamily: {
      'satoshi': 'Satoshi, sans-serif',
      'inter': 'Inter, sans-serif',
     
    },
  },
},
  plugins: [require('@tailwindcss/forms')],
   plugins: [require('@tailwindcss/typography')],
   plugins: [require('@tailwindcss/line-clamp')],
   plugins: [require('@tailwindcss/aspect-ratio')],
};
