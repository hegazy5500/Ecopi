export type WasteType = 'plastic' | 'metal' | 'paper' | 'glass' | 'organic' | 'electronic' | 'mixed';

export interface WasteClassificationResult {
  type: WasteType;
  confidence: number;
  suggestion: string;
  carbonSavedKg: number;
  waterSavedL: number;
}

export interface RewardOutcome {
  points: number;
  piAmount: number;
  streakDays: number;
  badgeUnlocked?: string;
}

export interface RecyclingCenter {
  id: string;
  name: string;
  lat: number;
  lng: number;
  address: string;
  accepted: WasteType[];
  verified: boolean;
}

export interface CleanupQuest {
  id: string;
  title: string;
  area: string;
  rewardPi: number;
  points: number;
  participants: number;
}

export interface CircularPassport {
  id: string;
  itemName: string;
  sourceType: string;
  materialSummary: string;
  recoveryStory: string;
  impactSummary: string;
}
