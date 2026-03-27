import { SectionCard } from '@/components/section-card';
import { centers } from '@/lib/mock-data';

export default function MapPage() {
  return (
    <div className="space-y-6">
      <SectionCard title="Recycling Map" subtitle="Verified centers, nearby collection points, and geolocation-ready routing scaffold.">
        <div className="rounded-3xl border border-dashed border-leaf-200 bg-sky p-10 text-center text-sm text-slate-600">
          Interactive map placeholder — connect Mapbox and browser geolocation for Pi Browser deployment.
        </div>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-2">
        {centers.map((center) => (
          <div key={center.id} className="rounded-2xl border bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-slate-900">{center.name}</h3>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${center.verified ? 'bg-leaf-100 text-leaf-800' : 'bg-slate-100 text-slate-600'}`}>
                {center.verified ? 'Verified' : 'Pending'}
              </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">{center.address}</p>
            <p className="mt-3 text-sm text-slate-700">Accepts: {center.accepted.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
