import axios from 'axios';
import { BASE_URL } from '../../constants/variables';

export const handleUpdateTodo = (todo) => {
  axios.patch(`${BASE_URL}/todos/${todo.id}`, todo);
};

const handleChecked = (checked, style) => {
  if (checked) {
    style.setProperty('font-style', 'italic');
    style.setProperty('text-decoration', 'line-through');
    style.setProperty('color', 'lightgrey');
  } else {
    style.removeProperty('font-style');
    style.removeProperty('text-decoration');
    style.removeProperty('color');
  }
};

export const handleCreateTodo = (newTodo) => {
  axios.post(`${BASE_URL}/todos`, newTodo);
};

export const handleDeleteTodo = (todoId) => {
  axios.delete(`${BASE_URL}/todos/${todoId}`);
};

export const handleTodoComplete = (e, todo) => {
  const labelStyle = e.target.labels[0].lastChild.style;
  const targetChecked = e.target.checked;

  todo.completed = e.target.checked;

  handleChecked(targetChecked, labelStyle);
  handleUpdateTodo(todo);
};
