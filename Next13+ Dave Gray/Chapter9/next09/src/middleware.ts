import {NextResponse} from 'next/server';

export default function middleware(request: Request) {
  console.log(request.url, request.method);

  return NextResponse.next();
}
