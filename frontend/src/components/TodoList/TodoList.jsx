import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import {
  Container,
  VStack,
  StackDivider,
  CheckboxGroup,
  Checkbox,
  ButtonGroup,
  Button,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  handleUpdateTodo,
  handleDeleteTodo,
  handleCreateTodo,
  handleTodoComplete,
  handleChecked,
} from './handlers';

const TodoList = () => {
  // Store available todos
  const [todos, setTodos] = useState([]);

  // Modal state
  const [modalTodo, setModalTodo] = useState({});
  const [isEditModal, setIsEditModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleGetTodos = useCallback(async () => {
    const { data } = await axios.get('http://localhost:3000/api/todos');

    setTodos(data);
  }, []);

  useEffect(() => {
    try {
      handleGetTodos();
    } catch (err) {
      console.error(err);
    }
  }, [handleGetTodos]);

  return (
    <Container maxW="50%">
      <Flex
        justifyContent="space-between"
        mb="2rem"
        sx={{
          borderBottom: '0.2em solid var(--chakra-colors-brand-300)',
        }}
      >
        <Heading color="brand.300" fontFamily="fonts.heading" as="h3">
          Todos
        </Heading>
        <Button
          gap="0.5rem"
          fontSize="1.2rem"
          bg="brand.900"
          onClick={() => {
            setIsEditModal(false);
            setModalTodo({
              task: '',
            });
            onOpen();
          }}
        >
          <AddIcon fontSize="1rem" />
          Add Todo
        </Button>
      </Flex>
      <CheckboxGroup>
        <VStack spacing={4} align="stretch" divider={<StackDivider borderColor="brand.300" />}>
          {todos.map((todo) => (
            <HStack key={todo.id} justifyContent="space-between">
              <Checkbox
                onChange={(e) => {
                  handleChecked(e);
                  handleTodoComplete(e, todo);
                }}
                colorScheme="yellow"
                spacing={3}
                size="lg"
                alignItems="center"
                defaultChecked={todo.completed}
              >
                <Text>{todo.task}</Text>
              </Checkbox>
              <ButtonGroup>
                <Button
                  bg="brand.900"
                  onClick={() => {
                    setIsEditModal(true);
                    setModalTodo(todo);
                    onOpen();
                  }}
                >
                  <EditIcon />
                </Button>
                <Button
                  bg="red.500"
                  onClick={() => {
                    handleDeleteTodo(todo.id);
                    handleGetTodos();
                  }}
                >
                  <DeleteIcon />
                </Button>
              </ButtonGroup>
            </HStack>
          ))}
        </VStack>
      </CheckboxGroup>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{isEditModal ? 'Edit Todo' : 'Add Todo'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              name="task"
              defaultValue={modalTodo.task}
              onChange={(e) => {
                const { name, value } = e.target;
                setModalTodo((prev) => ({ ...prev, [name]: value }));
              }}
            />
          </ModalBody>
          <ModalFooter>
            {isEditModal ? (
              <Button
                variant="ghost"
                onClick={() => {
                  handleUpdateTodo(modalTodo);
                  onClose();
                  setTimeout(handleGetTodos, 100);
                }}
              >
                Save
              </Button>
            ) : (
              <Button
                bg="brand.900"
                color="brand.white"
                variant="solid"
                onClick={() => {
                  handleCreateTodo(modalTodo);
                  onClose();
                  setTimeout(handleGetTodos, 100);
                }}
              >
                Add
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default TodoList;
