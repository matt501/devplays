/** @type {import('tailwindcss').Config} */

module.exports = {


    content: ["/node_modules/preline/dist/*.js", "./*.{html,js}"],
    theme: {
        extend: {},
    },

    plugins: [
        require('preline/plugin'),

    ],

}