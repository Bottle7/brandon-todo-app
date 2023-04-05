/**
 * Todos Controllers Module
 *
 * Defines callbacks for associated todos routes
 */

const data = require('../data/todos.json');

/**
 * GET all todos
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos
 */
exports.get_all_todos = (_, res) => {
  try {
    if (data) res.status(200).json(data); // Success, return todos.
    else res.status(404).send('Todos not found.');
  } catch (error) {
    console.error('Controller: Error in get_all_todos', error);
  }
};

/**
 * GET todos by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 */
exports.get_todo_by_id = (req, res) => {
  const { id } = req.params;

  try {
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) res.status(200).json(todo); // Success, return product.
    else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in get_todo_by_id', error);
  }
};

/**
 * POST todo
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /todos
 */
exports.post_todo = (req, res) => {
  try {
    const newTodo = req.body;

    // Generate a unique (non-crypto) id using the last six digits of the date milliseconds at time of creation for each product on POST
    const dateMillisForId = new Date().valueOf();
    const todoId = Number(dateMillisForId.toString().slice(7));
    const todoCreatedAt = new Date();

    newTodo.id = todoId;
    newTodo.created_at = todoCreatedAt;
    newTodo.updated_at = todoCreatedAt;

    if (data) {
      data.push(newTodo); // Add todo to list of todos
      res.status(201).send(`Todo created.`); // Success
    } else {
      res.status(507).send('No database exists to store the new todo.');
    }
  } catch (error) {
    console.error('Controller: Error in post_todo', error);
  }
};

/**
 * PUT todo by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PUT
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 */
exports.put_todo_by_id = (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  const updatedDateTime = new Date();

  updatedTodo.updated_at = updatedDateTime;

  try {
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) {
      data.splice(data.indexOf(todo), 1, updatedTodo);
      res.status(200).send(`Todo: ${todo.id} has been successfully updated.`); // Success, return id of successfully updated todo
    } else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in put_todo_by_id', error);
  }
};
exports.patch_todo_by_id = (req, res) => {
  try {
    const { id } = req.params;

    let changes = req.body;

    // Find the current todo by id
    let todo = data.find((todo) => todo.id == id);

    if (!todo) return res.status(404).send('Todo not found.');

    // Updated todo = modified original todo
    let updatedTodo = { ...todo, ...changes };
    let updatedDateTime = new Date();

    // Show the date and time of the latest update
    updatedTodo.updated_at = updatedDateTime.toISOString().slice(0, 16);

    // Find the current todo and replace it with the updated one
    data.splice(data.indexOf(todo), 1, updatedTodo);

    res.json(updatedTodo);
  } catch (error) {
    console.error('Controller: Error in patch_todo_by_id', error);
  }
};
/**
 * DELETE todo by id.
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /todos/:id
 * @param {string} id - Todo ID, a unique identifier for a todo.
 */
exports.delete_todo_by_id = (req, res) => {
  const { id } = req.params;

  try {
    const todo = data.find((todo) => {
      return todo.id.toString() === id;
    });

    if (todo) {
      data.splice(data.indexOf(todo), 1);
      res.status(204).send(`Todo: ${req.params.id} was successfully deleted.`); // Success, return deleted todo's id.
    } else res.status(404).send('Todo not found.');
  } catch (error) {
    console.error('Controller: Error in delete_todo_by_id', error);
  }
};
