import {NextResponse} from 'next/server';

export const GET = () => {
  return NextResponse.json({
    message: 'Hello, this is the api route',
    status: 'success'
  })
}
