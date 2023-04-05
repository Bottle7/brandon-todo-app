import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Container, VStack, StackDivider, CheckboxGroup, Checkbox } from '@chakra-ui/react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3000/api/todos');

    setTodos(data);
  }, []);

  useEffect(() => {
    getTodos().catch(console.error);
  }, [getTodos]);

  const handleTodoComplete = (e) => {
    let labelStyle = e.target.labels[0].lastChild.style;
    console.log(e.target.checked);
    if (e.target.checked) {
      labelStyle.setProperty('font-style', 'italic');
      labelStyle.setProperty('text-decoration', 'line-through');
      labelStyle.setProperty('color', 'lightgrey');
    } else {
      labelStyle.removeProperty('font-style');
      labelStyle.removeProperty('text-decoration');
      labelStyle.removeProperty('color');
    }
  };

  return (
    <Container maxW="50%">
      <CheckboxGroup>
        <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="brand.300" />}>
          {todos.map((todo) => (
            <Checkbox
              key={todo.id}
              onChange={handleTodoComplete}
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
