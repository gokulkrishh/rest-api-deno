import { FILE_PATH } from '../../config.js';

export default async ({ response }) => {
  try {
    const todos = await Deno.readFile(FILE_PATH);
    const data = JSON.parse(new TextDecoder().decode(todos));
    response.body = { status: 'success', data };
  } catch (error) {
    console.log(error);
    response.status = 500;
    response.body = { status: 'failed', data: [] };
  }
};
