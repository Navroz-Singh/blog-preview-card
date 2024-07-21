/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
        'sans': ['Figtree', 'system-ui', 'sans-serif'],
        'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
    extend: {
        colors:{
            "proyellow":"hsl(47, 88%, 63%)",
            "gray-950":"hsl(0, 0%, 7%)",
        },
        maxWidth:{
            "450":"450px",
        },
    },
  },
  plugins: [],
}

