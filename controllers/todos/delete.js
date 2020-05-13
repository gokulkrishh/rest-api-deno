import { FILE_PATH } from '../../config.js';

export default async ({ request, response, params }) => {
  if (!params.id) {
    response.status = 400;
    response.body = { status: 'Invalid id' };
    return;
  }

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const todos = await Deno.readFile(FILE_PATH);
    const data = JSON.parse(decoder.decode(todos));
    const updatedData = data.filter((datum) => datum.id !== +params.id);
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(updatedData)));
    response.status = 200;
    response.body = { status: 'Success', data: data.filter((datum) => datum.id === +params.id)[0] };
  } catch (error) {
    console.log(error);
    response.status = 502;
    response.body = { status: 'Failed to update', error };
  }
};
