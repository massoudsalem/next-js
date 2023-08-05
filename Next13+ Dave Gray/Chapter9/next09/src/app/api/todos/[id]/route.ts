import { NextResponse } from "next/server";
import { limiter } from "@/app/api/config/limiter";

type Props = {
    params: {
        id: string;
    };
}
const DATA_SOURCE_URL = "https://dummyjson.com/todos";

export async function GET(request: Request, { params }: Props) {
    const { id } = params;
    const remainingRequests = await limiter.removeTokens(1);


    if (remainingRequests < 0) {
        return new NextResponse("Too Many Requests", {
            status: 429,
            statusText: "Too Many Requests",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
    }

    console.log(`You have ${Math.floor(remainingRequests)} requests left this minute.`);

    const response = await fetch(`${DATA_SOURCE_URL}/${id}`);

    const todo: Todo = await response.json();

    return NextResponse.json(todo);
}