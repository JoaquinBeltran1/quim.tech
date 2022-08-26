/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        dm: "'DM Serif', serif",
      }
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          h1: {
          },
          h2: {
            "font-size": "20px",
            "padding-top": "15px",
            "padding-bottom": '15px'
          },
          h3: {
          },
          p: {
          },
          strong: {
          },
          li: {
            color: '#474747',
            "margin-top": "0px",
            "margin-bottom": "0px"
          },
          a: {
            color: '#344ea2',
            '&:hover': {
              color: '#88b7f2'
            },
          },
          td: {
            color: '#828282'
          },
          pre: {
            color: theme("colors.gray.100"),
            backgroundColor: theme("colors.slate.700")
          },
          "pre code::before": {
            "padding-left": "unset"
          },
          "pre code::after": {
            "padding-right": "unset"
          },
          code: {
            backgroundColor: theme("colors.green.100"),
            color: "#DD1144",
            fontWeight: "400",
            "border-radius": "0.25rem"
          },
          "code::before": {
            content: '""',
            "padding-left": "0.25rem"
          },
          "code::after": {
            content: '""',
            "padding-right": "0.25rem"
          },
          blockquote: {
            "border-left-color": "#5d75c2",
            "background-color": "#f0f4ff"
          }
        
        },
      },
    })
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
