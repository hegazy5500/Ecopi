import { dashboardStats } from '@/lib/mock-data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    user: {
      username: 'ecohero',
      displayName: 'Eco Hero',
      ...dashboardStats
    }
  });
}
