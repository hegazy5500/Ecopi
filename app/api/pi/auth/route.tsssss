import { verifyPiAccessToken } from '@/lib/pi';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const result = await verifyPiAccessToken(body.accessToken || 'demo-token');
  return NextResponse.json(result);
}
