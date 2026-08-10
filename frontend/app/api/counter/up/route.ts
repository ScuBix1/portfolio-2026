import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(
      'https://api.counterapi.dev/v2/bastians-team-2653/portfolio/up'
    );
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur CounterAPI up:', error);
    return NextResponse.json({ count: 0 });
  }
}
