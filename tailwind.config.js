const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.js", "./components/**/*.js"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "2000px",
            },
        },
    },
    variants: {
        extend: {
            animation: ["group-hover"],
            transform: ["group-hover"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
