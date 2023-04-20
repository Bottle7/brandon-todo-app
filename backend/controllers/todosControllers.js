/**
 * @file Todos controller
 * @module controllers/todosControllers
 * @requires module:express
 * @requires module:../data/todos.json
 * @exports get_all_todos
 * @exports get_todo_by_id
 * @exports post_todo
 * @exports put_todo_by_id
 * @exports patch_todo_by_id
 * @exports delete_todo_by_id
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 */

// Import data
const data = require('../data/todos.json');

/**
 * GET all todos
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos
 * @returns {number} - 200 status code
 * @returns {object} - Todos object
 * @returns {number} - 404 status code
 */
exports.get_all_todos = (_, res) => {
  try {
    // Return all todos with 200 status code
    if (data) res.status(200).json(data);
    // Return 404 if no todos exist
    else res.status(404).send('Todos not found.');
  } catch (error) {
    // Log error to console
    console.error('Controller: Error in get_all_todos', error);
  }
};

/**
 * GET todos by id.
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 * @returns {number} - 200 status code
 * @returns {object} - Todo object
 * @returns {number} - 404 status code
 */
exports.get_todo_by_id = (req, res) => {
  // Get id from request parameters
  const { id } = req.params;

  // Find todo by id
  try {
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) res.status(200).json(todo);
    else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in get_todo_by_id', error);
  }
};

/**
 * POST todo
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method POST
 * @param {*} req
 * @param {*} res
 * @route /todos
 * @returns {number} - 201 status code
 * @returns {object} - New todo object
 * @returns {number} - 507 status code
 */
exports.post_todo = (req, res) => {
  try {
    // Get new todo from request body
    const newTodo = req.body;

    // This is not a secure method of generating unique ids, but it is sufficient for this project
    const dateMillisForId = new Date().valueOf();
    if (dateMillisForId === undefined) {
      throw new Error('dateMillisForId is undefined');
    }
    const todoId = Number(dateMillisForId.toString().slice(7));
    if (todoId === undefined) {
      throw new Error('todoId is undefined');
    }
    const todoCreatedAt = new Date().toISOString().slice(0, 16);
    if (todoCreatedAt === undefined) {
      throw new Error('todoCreatedAt is undefined');
    }
    const todoCompleted = false;
    if (todoCompleted === undefined) {
      throw new Error('todoCompleted is undefined');
    }

    // Add id, created_at, updated_at, and completed properties to new todo
    newTodo.id = todoId;
    newTodo.created_at = todoCreatedAt;
    newTodo.updated_at = todoCreatedAt;
    newTodo.completed = todoCompleted;

    if (data) {
      // Add new todo to list of todos
      data.push(newTodo);
      // Return new todo with 201 status code
      res.status(201).json(newTodo);
    } else {
      // Return 507 if no database exists to store the new todo
      res.status(507).send('No database exists to store the new todo.');
    }
  } catch (error) {
    console.error('Controller: Error in post_todo', error);
  }
};

/**
 * PUT todo by id.
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method PUT
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 * @param {*} req
 * @param {*} res
 * @returns {number} - 200 status code
 * @returns {object} - Updated todo object
 * @returns {number} - 404 status code
 */
exports.put_todo_by_id = (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;

  // Show the date and time of the latest update
  const updatedDateTime = new Date().toISOString().slice(0, 16);

  // Add updated_at property to updated todo
  updatedTodo.updated_at = updatedDateTime;

  try {
    // Find the current todo by id
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) {
      // Find the current todo and replace it with the updated one
      data.splice(data.indexOf(todo), 1, updatedTodo);
      // Return updated todo with 200 status code
      res.status(200).json(updatedTodo);
    } else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in put_todo_by_id', error);
  }
};
/**
 * PATCH todo by id.
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method PATCH
 * @route /todos/:id
 * @param {*} req
 * @param {*} res
 * @returns {number} - 200 status code
 * @returns {object} - Updated todo object
 * @returns {number} - 404 status code
 */
exports.patch_todo_by_id = (req, res) => {
  try {
    const { id } = req.params;

    let changes = req.body;

    // Find the current todo by id
    let todo = data.find((todo) => todo.id == id);

    if (!todo) return res.status(404).send('Todo not found.');

    // Updated todo = modified original todo
    let updatedTodo = { ...todo, ...changes };
    let updatedDateTime = new Date().toISOString().slice(0, 16);

    // Show the date and time of the latest update
    updatedTodo.updated_at = updatedDateTime;

    // Find the current todo and replace it with the updated one
    data.splice(data.indexOf(todo), 1, updatedTodo);

    // Return updated todo with 200 status code
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Controller: Error in patch_todo_by_id', error);
  }
};
/**
 * DELETE todo by id.
 * @author Brandon Bouchard <brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 * @returns {number} - 204 status code
 * @returns {string} - Success message
 * @returns {number} - 404 status code
 */
exports.delete_todo_by_id = (req, res) => {
  const { id } = req.params;

  try {
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) {
      data.splice(data.indexOf(todo), 1);
      res.status(204).send(`Todo: ${req.params.id} was successfully deleted.`);
    } else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in delete_todo_by_id', error);
  }
};
