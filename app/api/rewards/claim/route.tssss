import { rewardForAction } from '@/lib/rewards';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const action = body.action || 'upload';
  const streakDays = Number(body.streakDays || 0);
  const reward = rewardForAction(action, streakDays);
  return NextResponse.json(reward);
}
