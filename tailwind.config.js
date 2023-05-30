/** @type {import('tailwindcss').Config} */

module.exports = {


    content: ["/node_modules/preline/dist/*.js", "./public/*.{html,js}"],
    theme: {
        extend: {},
    },

    plugins: [
        require('preline/plugin'),

    ],

}