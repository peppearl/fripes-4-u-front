module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'link': ['"Spicy Rice","cursive"'],
            'nav': ['"Trocchi","serif"'],
        },
        extend: {
            width: {
                '29%': '29%',
            },
            colors: {
                'rouge': '#ce3202',
            },
            boxShadow: {
                'xs': '0 -1px rgb(240, 118, 185) inset',
            },
        },
    },
    plugins: [],
}