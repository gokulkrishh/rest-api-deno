# rest-api-deno

> Rest API's using deno runtime

### What is [deno](https://deno.land/)?

- Deno is secure run time for javascript & typescript

### Goal

- Create a simple todo rest api.
- Use oak middleware for routing etc,
- Expose routes for **GET, POST, DELETE and PUT** methods.

## Install & Run

**Step 1**: Install

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**Step 2**: Run

```bash
deno run --allow-net --allow-read ./index.js
```

**Note**:

> --allow-net is to allow network access
> --allow-read is to allow read access to file system

**Step 3** (optional): [denon](https://github.com/eliassjogreen/denon) for deno like [nodemon](https://www.npmjs.com/package/nodemon) for node

```bash
deno install --unstable --allow-read --allow-run -f https://deno.land/x/denon/denon.ts

denon ./index.js
```

**Step 4**: Open [https://localhost:8000](https://localhost:8000)

**Note**:

> Denon uses `.denonrc.json` file in root for configuration

### Project Structure

.
├── config.js
├── controllers
│   └── todos
│   ├── delete.js
│   ├── get.js
│   ├── post.js
│   └── put.js
├── data
│   └── todos.json
├── index.js
└── router.js

### API list

- **`GET`** - /
- **`GET`** - /todos
- **`POST`** - /todos (form data)
- **`PUT`** - /todos/:id (form data)
- **`DELETE`** - /todos/:id

##### MIT Licensed

[@gokulkrishh](https://github.com/gokulkrishh)
