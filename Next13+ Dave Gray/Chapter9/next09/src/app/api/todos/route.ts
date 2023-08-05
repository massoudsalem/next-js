import {NextResponse} from 'next/server';

const DATA_SOURCE_URL = 'https://dummyjson.com/todos';

export async function GET(request: Request) {
  const response = await fetch(DATA_SOURCE_URL);

  const todos: Todo[] = await response.json();

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  const req = await request.json();
  const {userId, todo}: Partial<Todo> = req;

  if (!userId || !todo) {
    return NextResponse.json(
      {error: 'userId and todo are required'},
      {status: 400}
    );
  }

  const response = await fetch(`${DATA_SOURCE_URL}/add`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId, todo, completed: false}),
  });

  const newTodo: Todo = await response.json();

  return NextResponse.json(newTodo);
}

export async function DELETE(request: Request) {
  const req = await request.json();
  const {id}: Partial<Todo> = req;

  if (!id) {
    return NextResponse.json({error: 'id is required'}, {status: 400});
  }

  const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'DELETE',
  });

  const newTodo: Todo = await response.json();

  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
    const  req = await request.json();
    const {id, todo, completed}: Partial<Todo> = req;

    if (!id) {
        return NextResponse.json({error: 'id is required'}, {status: 400});
    }

    const response = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({todo, completed}),
    });

    const newTodo: Todo = await response.json();

    return NextResponse.json(newTodo);
}
