import { SectionCard } from '@/components/section-card';
import { quests } from '@/lib/mock-data';
import { formatPi } from '@/lib/utils';

export default function QuestsPage() {
  return (
    <div className="space-y-6">
      <SectionCard title="Community Cleanup Quests" subtitle="A unique utility layer that combines local action, verified participation, and Pi-native incentives.">
        <div className="grid gap-4 md:grid-cols-2">
          {quests.map((quest) => (
            <div key={quest.id} className="rounded-3xl border bg-white p-5 shadow-soft">
              <p className="text-lg font-semibold text-slate-900">{quest.title}</p>
              <p className="mt-1 text-sm text-slate-500">Area: {quest.area}</p>
              <p className="mt-3 text-sm text-slate-700">Participants: {quest.participants}</p>
              <p className="mt-1 text-sm text-leaf-700">Reward: {formatPi(quest.rewardPi)} + {quest.points} pts</p>
              <button className="mt-4 rounded-2xl bg-leaf-600 px-4 py-2 text-sm font-semibold text-white">Join Quest</button>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
