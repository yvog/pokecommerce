import type { Config } from 'tailwindcss';

const lightenBaseFactor = 0.1;

// source: https://mayashavin.com/articles/build-palette-color-mix-css-tailwindcss#generating-tint-variants
function lighten(color: string, intensity: number) {
  return `color-mix(in srgb, ${color}, white ${intensity * 100}%)`;
}

const pokemonTypes = {
  normal: {
    400: lighten('#aa9', lightenBaseFactor),
    500: '#aa9',
  },
  grass: {
    400: lighten('#7c5', lightenBaseFactor),
    500: '#7c5',
  },
  water: {
    400: lighten('#39f', lightenBaseFactor),
    500: '#39f',
  },
  ground: {
    400: lighten('#db5', lightenBaseFactor),
    500: '#db5',
  },
  rock: {
    400: lighten('#ba6', lightenBaseFactor),
    500: '#ba6',
  },
  fire: {
    400: lighten('#f42', lightenBaseFactor),
    500: '#f42',
  },
  poison: {
    400: lighten('#a59', lightenBaseFactor),
    500: '#a59',
  },
  flying: {
    400: lighten('#89f', lightenBaseFactor),
    500: '#89f',
  },
  dragon: {
    400: lighten('#76e', lightenBaseFactor),
    500: '#76e',
  },
  steel: {
    400: lighten('#aab', lightenBaseFactor),
    500: '#aab',
  },
  electric: {
    400: lighten('#fc3', lightenBaseFactor),
    500: '#fc3',
  },
  bug: {
    400: lighten('#ab2', lightenBaseFactor),
    500: '#ab2',
  },
  ice: {
    400: lighten('#6cf', lightenBaseFactor),
    500: '#6cf',
  },
  fairy: {
    400: lighten('#e9e', lightenBaseFactor),
    500: '#e9e',
  },
  dark: {
    400: lighten('#754', lightenBaseFactor),
    500: '#754',
  },
  psychic: {
    400: lighten('#f59', lightenBaseFactor),
    500: '#f59',
  },
  ghost: {
    400: lighten('#66b', lightenBaseFactor),
    500: '#66b',
  },
  fighting: {
    400: lighten('#b54', lightenBaseFactor),
    500: '#b54',
  },
};

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#ff6d00',
        primaryLight: '#f90',
        pokemonTypes,
      },
    },
  },
  plugins: [require('tailwindcss-react-aria-components')],
  safelist: [],
};

const typeColors = Object.keys(pokemonTypes)
  .map((typeName) => [
    `bg-pokemonTypes-${typeName}-500`,
    `hover:bg-pokemonTypes-${typeName}-400`,
  ])
  .flat();

config.safelist?.push(...typeColors);

export default config;
