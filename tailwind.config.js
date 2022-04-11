module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'link': ['"Spicy Rice","cursive"'],
            'nav': ['"Trocchi","serif"'],
            'text': ['"Arima Madurai","cursive"'],
        },
        minHeight: {
            '75': '75px',
        },
        extend: {
            width: {
                '29%': '29%',
            },
            colors: {
                'rouge': '#ce3202',
                'beige': '#f6efe6',
                'rose': '#f0d3c4',
            },
            boxShadow: {
                'xs': '0 -1px rgb(240, 118, 185) inset',
            },
            margin: {
                'auto': '0 auto',
                '35auto': '35px auto',
                '6minus': '-6px',
                '50auto': '0 auto 50px auto',
            },
            inset: {
              'ex': 'calc(100% + 5px);'
            },
        },
    },
    plugins: [],
}