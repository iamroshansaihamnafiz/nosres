/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1100px',
        },
        container: {
            center: true,
            padding: '1rem',
            maxWeight: '900px'
        },
        extend: {
            colors: {
                'primary': "#4D7FB8",
            }
        },
    },
    variants: {
        extend: {
            translate: ['responsive', 'hover'],
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}