import axios from 'axios';
import { BASE_URL } from '../../constants/variables';

export const handleUpdateTodo = (todo) => {
  axios.patch(`${BASE_URL}/todos/${todo.id}`, todo);
};

export const handleChecked = (e) => {
  const labelStyle = e.target.labels[0].lastChild.style;
  const targetChecked = e.target.checked;

  if (targetChecked) {
    labelStyle.setProperty('font-style', 'italic');
    labelStyle.setProperty('text-decoration', 'line-through');
    labelStyle.setProperty('color', 'lightgrey');
  } else {
    labelStyle.removeProperty('font-style');
    labelStyle.removeProperty('text-decoration');
    labelStyle.removeProperty('color');
  }
};

export const handleCreateTodo = (newTodo) => {
  axios.post(`${BASE_URL}/todos`, newTodo);
};

export const handleDeleteTodo = (todoId) => {
  axios.delete(`${BASE_URL}/todos/${todoId}`);
};

export const handleTodoComplete = (e, todo) => {
  todo.completed = e.target.checked;

  handleUpdateTodo(todo);
};
