import { Flex, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      color="white"
      top={0}
      bg="brand.900"
      px="6rem"
      w="100vw"
      h="6em"
      alignItems="center"
      zIndex="1"
    >
      <Heading fontFamily="fonts.heading" fontStyle="italic" as="h1">
        Brandon's Todo List
      </Heading>
    </Flex>
  );
};

export default Header;
