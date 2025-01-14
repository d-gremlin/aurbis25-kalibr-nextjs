import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      gridTemplateColumns: {
        'autofit': 'repeat(auto-fit, minmax(50px, 400px))',

      },
    },
    
      
    
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin") 
  ],
} satisfies Config;
