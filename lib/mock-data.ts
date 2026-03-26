import { RecyclingCenter, CleanupQuest, CircularPassport } from './types';

export const dashboardStats = {
  points: 1240,
  piBalance: 12.5,
  streakDays: 8,
  level: 6,
  itemsRecycled: 132,
  carbonSavedKg: 84.3,
  waterSavedL: 920
};

export const leaderboard = [
  { name: 'Eco Hero', points: 1240, badge: '♻️' },
  { name: 'Green Falcon', points: 1160, badge: '🌿' },
  { name: 'Bottle Ninja', points: 980, badge: '🥇' },
  { name: 'Paper Saver', points: 900, badge: '📦' }
];

export const centers: RecyclingCenter[] = [
  {
    id: 'c1',
    name: 'Downtown Recycling Hub',
    lat: 30.0444,
    lng: 31.2357,
    address: 'Cairo Downtown',
    accepted: ['plastic', 'metal', 'paper', 'glass'],
    verified: true
  },
  {
    id: 'c2',
    name: 'Green Point Maadi',
    lat: 29.9602,
    lng: 31.2569,
    address: 'Maadi, Cairo',
    accepted: ['plastic', 'paper', 'glass'],
    verified: true
  }
];

export const marketplace = [
  {
    id: 'l1',
    title: 'Reclaimed Wood Shelf',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    pricePi: 8.5,
    seller: 'Upcycle Studio',
    type: 'product'
  },
  {
    id: 'l2',
    title: 'Sorted PET Flakes (5kg)',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b',
    pricePi: 3.2,
    seller: 'CleanCycle',
    type: 'material'
  }
];

export const quests: CleanupQuest[] = [
  {
    id: 'q1',
    title: 'Nile Riverside Cleanup',
    area: 'Cairo East',
    rewardPi: 0.25,
    points: 120,
    participants: 28
  },
  {
    id: 'q2',
    title: 'Neighborhood Plastic Hunt',
    area: 'Maadi',
    rewardPi: 0.15,
    points: 80,
    participants: 17
  }
];

export const passports: CircularPassport[] = [
  {
    id: 'p1',
    itemName: 'Ocean Bottle Lamp',
    sourceType: 'plastic',
    materialSummary: 'Recovered PET bottles + reclaimed cable',
    recoveryStory: 'Collected during a cleanup quest, then rebuilt by a local maker into a decorative lamp.',
    impactSummary: 'Extended lifecycle of mixed waste and prevented landfill disposal.'
  },
  {
    id: 'p2',
    itemName: 'Glass Revival Vase',
    sourceType: 'glass',
    materialSummary: 'Sorted reclaimed glass',
    recoveryStory: 'Recovered from local recycling center intake and reworked into a premium home décor item.',
    impactSummary: 'Promotes transparent circular commerce with a reusable provenance story.'
  }
];
