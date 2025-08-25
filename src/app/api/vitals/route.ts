import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, value, id, label } = body;

    // Log the Web Vitals data
    // console.log('Web Vitals:', { name, value, id, label });

    // In production, you might want to send this to your analytics service
    // Example: await analytics.track('web-vital', { name, value, id, label });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error processing vitals:', error);
    return NextResponse.json({ error: 'Failed to process vitals' }, { status: 500 });
  }
}