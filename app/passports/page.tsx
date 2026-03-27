import { SectionCard } from '@/components/section-card';
import { passports } from '@/lib/mock-data';

export default function PassportsPage() {
  return (
    <div className="space-y-6">
      <SectionCard title="Circular Passports" subtitle="Transparent provenance cards for recycled and upcycled assets.">
        <div className="grid gap-4 md:grid-cols-2">
          {passports.map((passport) => (
            <div key={passport.id} className="rounded-3xl border bg-white p-5 shadow-soft">
              <p className="text-lg font-semibold text-slate-900">{passport.itemName}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-leaf-700">Source type: {passport.sourceType}</p>
              <p className="mt-3 text-sm text-slate-700">{passport.materialSummary}</p>
              <p className="mt-2 text-sm text-slate-600">{passport.recoveryStory}</p>
              <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500">{passport.impactSummary}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
