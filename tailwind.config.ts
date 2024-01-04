import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "type_bug":        "#6B8E23",
        "type_dark":       "#28034E",
        "type_dragon":     "#9400D3",
        "type_electric":   "#FFD700",
        "type_fairy":      "#FF69B4",
        "type_fighting":   "#B22222",
        "type_fire":       "#FF4500",
        "type_flying":     "#B0E0E6",
        "type_ghost":      "#7B68EE",
        "type_grass":      "#7FFF00",
        "type_ground":     "#CD853F",
        "type_ice":        "#40E0D0",
        "type_normal":     "#A9A9A9",
        "type_poison":     "#800080",
        "type_psychic":    "#FF1493",
        "type_rock":       "#8B4513",
        "type_steel":      "#808080",
        "type_water":      "#1E90FF",



        "red-primary":     "#EE1B24",
      },
      animation: {
        'focus': 'focus .75s forwards',
      },
      keyframes: {
        focus: {
          '50%, 100%': {
            transform: 'scale(1.2)',
          },
        },
      },
      screens: {
        'xxs': '400px', // min-width
      }
    },
  },
  safelist: [
    {
      pattern: /bg-type_(bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|grass|ground|ice|normal|poison|psychic|rock|steel|water)/
    },
    {
      pattern: /(from|to)-type_(bug|dark|dragon|electric|fairy|fighting|fire|flying|ghost|grass|ground|ice|normal|poison|psychic|rock|steel|water)/
    },
  ],
  plugins: [],
}
export default config
