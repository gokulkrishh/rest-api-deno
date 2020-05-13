import { FILE_PATH } from '../../config.js';

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { status: 'Invalid request' };
    return;
  }

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const {
      value: { title },
    } = await request.body();
    console.log(await request.body());
    const todos = await Deno.readFile(FILE_PATH);
    const data = JSON.parse(decoder.decode(todos));
    const newTodo = { id: data.length + 1, title, completed: false };
    data.push(newTodo);
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(data)));
    response.status = 201;
  } catch (error) {
    console.log(error);
    response.status = 502;
    response.body = { status: 'Failed to create a new todo', error };
  }
};
