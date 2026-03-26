import { RewardOutcome } from './types';

export function rewardForAction(action: 'upload' | 'recycle' | 'referral' | 'challenge', streakDays = 0): RewardOutcome {
  const base = {
    upload: { points: 20, piAmount: 0.05 },
    recycle: { points: 50, piAmount: 0.1 },
    referral: { points: 100, piAmount: 0.25 },
    challenge: { points: 70, piAmount: 0.15 }
  }[action];

  const nextStreak = streakDays + 1;
  const streakBonus = nextStreak % 7 === 0 ? 40 : 0;

  return {
    points: base.points + streakBonus,
    piAmount: base.piAmount,
    streakDays: nextStreak,
    badgeUnlocked: nextStreak === 7 ? '7-Day Eco Streak' : undefined
  };
}
