import { classifyWaste } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  const title = String(formData.get('title') || file?.name || 'recyclable item');

  const result = await classifyWaste({ fileName: title || file?.name || 'mixed-item' });
  return NextResponse.json(result);
}
