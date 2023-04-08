import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Container, VStack, StackDivider, CheckboxGroup, Checkbox } from '@chakra-ui/react';
import { handleTodoComplete } from './handlers';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3000/api/todos');

    setTodos(data);
  }, []);

  useEffect(() => {
    getTodos().catch(console.error);
  }, [getTodos]);

  return (
    <Container maxW="50%">
      <CheckboxGroup>
        <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="brand.300" />}>
          {todos.map((todo) => (
            <Checkbox
              key={todo.id}
              onChange={(e) => {
                handleTodoComplete(e, todo);
              }}
              colorScheme="yellow"
              spacing={3}
              size="lg"
              alignItems="center"
            >
              {todo.task}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </Container>
  );
};

export default TodoList;
