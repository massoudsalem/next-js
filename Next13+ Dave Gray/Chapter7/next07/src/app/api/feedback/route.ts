import {NextResponse} from 'next/server';

type Feedback = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as Feedback;

  console.log(data);

  const {name, email, message} = data;

  return NextResponse.json({name, email, message});
}
