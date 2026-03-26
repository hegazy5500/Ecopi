import { createPiRewardPayment } from '@/lib/pi';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const amount = Number(body.amount || 0);
  const memo = String(body.memo || 'Recycle reward');
  const payment = await createPiRewardPayment(amount, memo);
  return NextResponse.json(payment);
}
