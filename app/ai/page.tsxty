"use client";

import { useState } from 'react';
import { SectionCard } from '@/components/section-card';

type Result = {
  type: string;
  confidence: number;
  suggestion: string;
  carbonSavedKg: number;
  waterSavedL: number;
};

export default function AIPage() {
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    try {
      const res = await fetch('/api/classify', { method: 'POST', body: formData });
      const data = await res.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionCard title="Smart Recycling AI" subtitle="Upload or capture waste images to classify materials and get smart suggestions.">
        <form action={onSubmit} className="space-y-4">
          <input name="title" placeholder="Item title (e.g. plastic bottle)" required />
          <input type="file" name="file" accept="image/*" required />
          <button className="w-full rounded-2xl bg-leaf-600 px-4 py-3 text-sm font-semibold text-white hover:bg-leaf-700" disabled={loading}>
            {loading ? 'Analyzing...' : 'Classify Waste'}
          </button>
        </form>
      </SectionCard>

      <SectionCard title="Classification Result" subtitle="AI category + impact insights">
        {result ? (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Detected type</p>
                <p className="text-xl font-bold capitalize text-slate-900">{result.type}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Confidence</p>
                <p className="text-xl font-bold text-slate-900">{Math.round(result.confidence * 100)}%</p>
              </div>
            </div>
            <div className="rounded-2xl border border-leaf-100 bg-leaf-50 p-4 text-sm text-leaf-900">
              {result.suggestion}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border p-4">
                <p className="text-sm text-slate-500">Estimated carbon saved</p>
                <p className="text-lg font-semibold">{result.carbonSavedKg} kg CO₂e</p>
              </div>
              <div className="rounded-2xl border p-4">
                <p className="text-sm text-slate-500">Estimated water saved</p>
                <p className="text-lg font-semibold">{result.waterSavedL} L</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-500">No analysis yet. Upload an image to receive classification and eco insights.</p>
        )}
      </SectionCard>
    </div>
  );
}
