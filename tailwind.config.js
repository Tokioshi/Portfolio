/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                bg: "rgb(var(--bg) / <alpha-value>)",
                surface: "rgb(var(--surface) / <alpha-value>)",
                ink: "rgb(var(--ink) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
                line: "rgb(var(--line) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                sakura: "rgb(var(--sakura) / <alpha-value>)",
            },
            fontFamily: {
                display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
                sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
                mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
            },
        },
    },
    plugins: [],
};
