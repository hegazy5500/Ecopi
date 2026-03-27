"use client";

import { useState } from 'react';
import { SectionCard } from '@/components/section-card';

export default function NFTStudioPage() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    try {
      const res = await fetch('/api/nft/transform', { method: 'POST', body: formData });
      const data = await res.json();
      setResponse(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionCard title="NFT Creator" subtitle="Turn recycled items into collectible digital art and prepare Pi-based minting.">
        <form action={onSubmit} className="space-y-4">
          <input name="title" placeholder="NFT title" required />
          <textarea name="description" placeholder="Describe the recycled item and its story" rows={4} required />
          <input name="style" placeholder="AI style (e.g. eco pop art, neon collage)" defaultValue="eco pop art" />
          <input type="file" name="file" accept="image/*" required />
          <button className="w-full rounded-2xl bg-leaf-600 px-4 py-3 text-sm font-semibold text-white hover:bg-leaf-700" disabled={loading}>
            {loading ? 'Generating...' : 'Create NFT Artwork'}
          </button>
        </form>
      </SectionCard>

      <SectionCard title="Minting Preview" subtitle="Metadata, artwork preview, and Pi listing scaffold.">
        {response ? (
          <div className="space-y-4 text-sm text-slate-700">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p><strong>Title:</strong> {response.title}</p>
              <p><strong>Description:</strong> {response.description}</p>
              <p><strong>Style:</strong> {response.style}</p>
            </div>
            <div className="rounded-2xl border border-dashed border-leaf-200 bg-leaf-50 p-4">
              Artwork URL: <span className="break-all">{response.artworkImageUrl}</span>
            </div>
            <pre className="overflow-auto rounded-2xl bg-slate-950 p-4 text-xs text-green-300">{JSON.stringify(response.metadata, null, 2)}</pre>
            <button className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Mint on Pi (connect contract/service)</button>
          </div>
        ) : (
          <p className="text-sm text-slate-500">Upload an upcycled item image to create metadata and artwork preview.</p>
        )}
      </SectionCard>
    </div>
  );
}
