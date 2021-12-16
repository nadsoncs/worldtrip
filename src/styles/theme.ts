import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "600": "#47585B",
      "400": "#999999",
      "200": "#DADADA",
      "50": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
    }
  },
  fonts: {
    heading: "Poppins, sans-serif !important",
    body: "Poppins, sans-serif !important",
    mono: "Poppins, sans-serif !important"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600'
      }
    }
  }
})