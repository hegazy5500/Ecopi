import { WasteType } from './types';

export function estimateImpact(type: WasteType) {
  switch (type) {
    case 'plastic':
      return { carbonSavedKg: 1.2, waterSavedL: 18 };
    case 'metal':
      return { carbonSavedKg: 2.1, waterSavedL: 12 };
    case 'paper':
      return { carbonSavedKg: 0.9, waterSavedL: 30 };
    case 'glass':
      return { carbonSavedKg: 0.7, waterSavedL: 6 };
    case 'electronic':
      return { carbonSavedKg: 4.0, waterSavedL: 20 };
    default:
      return { carbonSavedKg: 0.4, waterSavedL: 4 };
  }
}

export function suggestionFor(type: WasteType) {
  const map: Record<WasteType, string> = {
    plastic: 'Separate PET/HDPE plastics, rinse them, and avoid mixing with food residue.',
    metal: 'Flatten cans if possible and keep aluminum and steel in clean, dry condition.',
    paper: 'Keep dry and separate cardboard from mixed paper for better recovery value.',
    glass: 'Sort by color where possible and avoid mixing broken glass with general recyclables.',
    organic: 'Send to composting or anaerobic digestion rather than dry recycling streams.',
    electronic: 'Take to certified e-waste centers to recover valuable metals safely.',
    mixed: 'Re-sort manually before drop-off to improve recycling acceptance.'
  };
  return map[type];
}
