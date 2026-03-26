import { estimateImpact, suggestionFor } from './impact';
import { WasteClassificationResult, WasteType } from './types';

function fallbackClassify(fileName: string): WasteType {
  const lower = fileName.toLowerCase();
  if (lower.includes('bottle') || lower.includes('plastic')) return 'plastic';
  if (lower.includes('can') || lower.includes('metal')) return 'metal';
  if (lower.includes('paper') || lower.includes('cardboard')) return 'paper';
  if (lower.includes('glass')) return 'glass';
  if (lower.includes('phone') || lower.includes('cable')) return 'electronic';
  return 'mixed';
}

export async function classifyWaste(input: { fileName?: string; base64?: string }): Promise<WasteClassificationResult> {
  const type = fallbackClassify(input.fileName || 'mixed-item');
  const impact = estimateImpact(type);
  return {
    type,
    confidence: 0.84,
    suggestion: suggestionFor(type),
    carbonSavedKg: impact.carbonSavedKg,
    waterSavedL: impact.waterSavedL
  };
}

export async function transformRecycledItemToArtwork(imageUrl: string, style: string) {
  return {
    originalImageUrl: imageUrl,
    artworkImageUrl: imageUrl,
    style,
    note: 'Replace this with your preferred image generation/editing workflow in production.'
  };
}
