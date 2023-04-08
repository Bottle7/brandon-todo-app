import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList/TodoList';
import NotFound from './components/NotFound';
import { Box, Container } from '@chakra-ui/react';

function App() {
  return (
    <Box
      fontFamily="fonts.body"
      color="white"
      width="100vw"
      minH="100%"
      bg="brand.700"
      pt="8rem"
      pb="4rem"
    >
      <Header />
      <Container maxW="100%" as="main">
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
