import { Router } from 'https://deno.land/x/oak/mod.ts';

import getTodos from './controllers/todos/get.js';
import postTodo from './controllers/todos/post.js';
import putTodo from './controllers/todos/put.js';
import deleteTodo from './controllers/todos/delete.js';

const router = new Router();

router.get('/', ({ response }) => {
  response.body = 'Todo list rest api using deno runtime';
});

router
  .get('/todos', getTodos)
  .post('/todos', postTodo)
  .put('/todos/:id', putTodo)
  .delete('/todos/:id', deleteTodo);

export default router;
