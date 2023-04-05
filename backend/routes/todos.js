const express = require('express');
const router = express.Router();
const { todosControllers } = require('../controllers');

/**
 * GET all todos
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos
 */
router.get('/', todosControllers.get_all_todos);

/**
 * GET todo by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /todos/:id
 */
router.get('/:id', todosControllers.get_todo_by_id);

/**
 * POST todo
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method POST
 * @route /todos
 */
router.post('/', todosControllers.post_todo);

/**
 * PUT todo by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PUT
 * @route /todo/:id
 */
router.put('/:id', todosControllers.put_todo_by_id);

/**
 * PATCH todo by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method PATCH
 * @route /todo/:id
 */
router.patch('/:id', todosControllers.patch_todo_by_id);

/**
 * DELETE todo by id
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method DELETE
 * @route /todos/:id
 */
router.delete('/:id', todosControllers.delete_todo_by_id);

module.exports = router;
