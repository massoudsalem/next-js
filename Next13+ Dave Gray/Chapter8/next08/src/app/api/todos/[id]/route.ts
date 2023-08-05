import { NextResponse } from "next/server";

type Props = {
    params: {
        id: string;
    };
}
const DATA_SOURCE_URL = "https://dummyjson.com/todos";

export async function GET(request: Request, { params }: Props) {
    const { id } = params;
    const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

    const todo: Todo = await response.json();

    return NextResponse.json(todo);
}