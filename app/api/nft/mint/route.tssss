import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return NextResponse.json({
    status: 'scaffolded',
    nft: body,
    note: 'Attach your Pi-compatible contract writer or minting service here.'
  });
}
