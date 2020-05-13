import { FILE_PATH } from '../../config.js';

export default async ({ request, response, params }) => {
  if (!params.id) {
    response.status = 400;
    response.body = { status: 'Invalid id' };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { status: 'Invalid request' };
    return;
  }

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  try {
    const { value } = await request.body();
    const [[_1, title], [_2, completed]] = value;
    const todos = await Deno.readFile(FILE_PATH);
    const data = JSON.parse(decoder.decode(todos));
    const updatedData = data.map((datum) => {
      if (datum.id === +params.id) {
        return { ...datum, title, completed };
      }
      return datum;
    });
    console.log(updatedData[0]);
    await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(updatedData)));
    response.status = 204;
  } catch (error) {
    console.log(error);
    response.status = 502;
    response.body = { status: 'Failed to update', error };
  }
};
