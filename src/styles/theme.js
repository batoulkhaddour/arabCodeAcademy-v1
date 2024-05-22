import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoint = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em'
})

const colors = {
    brand: {
        primary: '#723489',
        secondary: '#0B7AA7',
        Tertiary: '#EF544F',
    },
};

const fonts = {
    heading: 'Tajawal, sans-serif',
    body: 'Tajawal, sans-serif',
};




const customTheme = extendTheme({ colors, fonts, breakpoint });

export default customTheme;