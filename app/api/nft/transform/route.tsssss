import { transformRecycledItemToArtwork } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const title = String(formData.get('title') || 'Recycled NFT');
  const description = String(formData.get('description') || 'Upcycled item artwork');
  const style = String(formData.get('style') || 'eco pop art');
  const file = formData.get('file') as File | null;
  const imageUrl = file?.name ? `local-upload://${file.name}` : 'local-upload://recycled-item.png';
  const artwork = await transformRecycledItemToArtwork(imageUrl, style);

  return NextResponse.json({
    title,
    description,
    style,
    artworkImageUrl: artwork.artworkImageUrl,
    metadata: {
      name: title,
      description,
      image: artwork.artworkImageUrl,
      attributes: [
        { trait_type: 'Category', value: 'Recycled Art' },
        { trait_type: 'Style', value: style },
        { trait_type: 'Network', value: 'Pi-compatible scaffold' }
      ]
    }
  });
}
