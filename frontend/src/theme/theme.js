import { extendTheme } from '@chakra-ui/react';
import checkboxTheme from './checkboxTheme';
import '@fontsource/playfair-display/400-italic.css';
import '@fontsource/source-sans-pro';

const colors = {
  brand: {
    900: '#305763', // Faded dark green
    700: '#699A8A', // Sea foam green
    300: '#E9BC6C', // Mustard yellow
    100: '#F1D069', // Bright yellow
  },
};

const fonts = {
  fonts: {
    heading: `'Playfair Display', serif`,
    body: `'Source Sans Pro', sans-serif`,
  },
};

const fontSizes = {
  // Perfect fourth ratio
  fontSizes: {
    p: '1rem',
    h1: '4.209rem',
    h2: '3.157rem',
    h3: '2.369rem',
  },
};

const theme = extendTheme({ fonts, fontSizes, colors, components: { Checkbox: checkboxTheme } });

export default theme;
