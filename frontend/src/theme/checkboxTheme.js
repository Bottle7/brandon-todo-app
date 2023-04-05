import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
  label: {
    fontFamily: 'fonts.body',
  },
  control: {
    padding: '0.6rem', // change the padding of the control
    borderRadius: '50%', // change the border radius of the control
  },
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

export default checkboxTheme;
