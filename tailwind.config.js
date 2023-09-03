/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            colors: {
                brand: "#7288FA",
                "brand-1": "#4C596A",
                "brand-2": "#9DB2CE",
                "brand-3": "#F2F5F9",
                "brand-4": "#131524",
                "brand-5": "#04050C",
                "accent-red": "#FF7474",
                "accent-green": "#3DD9B3",
                "accent-orange": "#F9AB72",
                "accent-pink": "#EEA8FD",
                "accent-blue": "#56B8FF"
            }
        }
    },
    plugins: [
        require("tailwindcss-animated")
    ],
}