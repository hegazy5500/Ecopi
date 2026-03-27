import { SectionCard } from '@/components/section-card';
import { marketplace } from '@/lib/mock-data';
import { formatPi } from '@/lib/utils';

export default function MarketplacePage() {
  return (
    <div className="space-y-6">
      <SectionCard title="Marketplace" subtitle="Buy and sell recycled materials, upcycled products, and NFTs using Pi.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {marketplace.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-3xl border bg-white shadow-soft">
              <div className="h-44 bg-gradient-to-br from-leaf-100 to-sky" />
              <div className="p-5">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">{item.type}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">Seller: {item.seller}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-base font-bold text-leaf-700">{formatPi(item.pricePi)}</span>
                  <button className="rounded-xl bg-leaf-600 px-4 py-2 text-sm font-semibold text-white">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}
