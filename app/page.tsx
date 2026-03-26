import Link from 'next/link';
import { SectionCard } from '@/components/section-card';
import { StatCard } from '@/components/stat-card';
import { PiAuthButton } from '@/components/pi-auth-button';
import { dashboardStats, leaderboard, marketplace, quests, passports } from '@/lib/mock-data';
import { formatPi } from '@/lib/utils';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-leaf-100 bg-white/80 p-8 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <span className="inline-flex rounded-full bg-leaf-100 px-3 py-1 text-xs font-semibold text-leaf-800">Mainnet-ready circular utility</span>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">EcoLoop turns recycling into verified utility, local quests, and Pi-powered value.</h1>
            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              This version is designed to be stronger for the Pi ecosystem: professional UI, Pi-only economic flows,
              Pi-only auth scaffolding, minimal data collection, community cleanup quests, circular passports, and NFT storytelling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ai" className="rounded-2xl bg-leaf-600 px-5 py-3 text-sm font-semibold text-white hover:bg-leaf-700">Start AI Sorting</Link>
              <a href="/quests" className="rounded-2xl border border-leaf-200 px-5 py-3 text-sm font-semibold text-leaf-800 hover:bg-leaf-50">Explore Quests</Link>
              <PiAuthButton />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <StatCard label="Points" value={dashboardStats.points.toString()} hint="Rewarded for actions, quests, and referrals" />
            <StatCard label="Pi Balance" value={formatPi(dashboardStats.piBalance)} hint="Pi-only reward and marketplace UX" />
            <StatCard label="Carbon Saved" value={`${dashboardStats.carbonSavedKg} kg`} hint="Visible environmental proof of utility" />
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <SectionCard title="Why this stands out" subtitle="Differentiation beyond a normal recycling app.">
          <ul className="space-y-3 text-sm text-slate-700">
            <li>Community cleanup quests with local Pi rewards</li>
            <li>Circular Passports for upcycled products</li>
            <li>NFT storytelling tied to recovered materials</li>
            <li>Partner-ready recycling center verification model</li>
          </ul>
        </SectionCard>

        <SectionCard title="Leaderboard" subtitle="Top eco champions this week.">
          <div className="space-y-3">
            {leaderboard.map((row, index) => (
              <div key={row.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{row.badge}</span>
                  <div>
                    <p className="font-semibold text-slate-900">#{index + 1} {row.name}</p>
                    <p className="text-xs text-slate-500">Community recycler</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-leaf-700">{row.points} pts</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Marketplace preview" subtitle="Pi-only peer-to-peer circular commerce.">
          <div className="space-y-3">
            {marketplace.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-100 p-4">
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-500">{item.seller}</p>
                <p className="mt-2 text-sm font-semibold text-leaf-700">{formatPi(item.pricePi)}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Live quest concept" subtitle="Visible neighborhood utility inside the app.">
          <div className="space-y-3">
            {quests.map((quest) => (
              <div key={quest.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{quest.title}</p>
                <p className="text-sm text-slate-500">{quest.area} • {quest.participants} participants</p>
                <p className="mt-2 text-sm text-leaf-700">Reward: {formatPi(quest.rewardPi)} + {quest.points} pts</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Circular Passports" subtitle="Reusable provenance for upcycled products and recycled assets.">
          <div className="space-y-3">
            {passports.map((passport) => (
              <div key={passport.id} className="rounded-2xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">{passport.itemName}</p>
                <p className="mt-1 text-sm text-slate-600">{passport.materialSummary}</p>
                <p className="mt-2 text-xs text-slate-500">{passport.impactSummary}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
