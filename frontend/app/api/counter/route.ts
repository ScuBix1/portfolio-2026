import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://api.counterapi.dev/v1/bastians-team-2653/portfolio'
    );

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur CounterAPI:', error);
    return NextResponse.json({ count: 0 });
  }
}
