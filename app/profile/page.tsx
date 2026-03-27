import { SectionCard } from '@/components/section-card';
import { dashboardStats, passports } from '@/lib/mock-data';
import { formatPi } from '@/lib/utils';

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionCard title="Pi Profile" subtitle="Minimal data footprint powered by Pi identity.">
          <div className="space-y-3 text-sm text-slate-700">
            <p><strong>Display Name:</strong> Eco Hero</p>
            <p><strong>Pi Username:</strong> ecohero</p>
            <p><strong>Level:</strong> {dashboardStats.level}</p>
            <p><strong>Points:</strong> {dashboardStats.points}</p>
            <p><strong>Pi Rewards:</strong> {formatPi(dashboardStats.piBalance)}</p>
            <p><strong>Streak:</strong> {dashboardStats.streakDays} days</p>
          </div>
        </SectionCard>

        <SectionCard title="Environmental Impact" subtitle="Your measurable contribution to the circular economy.">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Items recycled</p><p className="text-2xl font-bold">{dashboardStats.itemsRecycled}</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">CO₂e saved</p><p className="text-2xl font-bold">{dashboardStats.carbonSavedKg} kg</p></div>
            <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">Water saved</p><p className="text-2xl font-bold">{dashboardStats.waterSavedL} L</p></div>
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Created Circular Passports" subtitle="Transparent stories behind recovered materials and upcycled products.">
        <div className="grid gap-4 md:grid-cols-2">
          {passports.map((passport) => (
            <div key={passport.id} className="rounded-2xl border bg-white p-5">
              <p className="font-semibold text-slate-900">{passport.itemName}</p>
              <p className="mt-2 text-sm text-slate-600">{passport.recoveryStory}</p>
              <p className="mt-3 text-xs text-slate-500">{passport.impactSummary}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
