import Link from 'next/link';

const links = [
  ['/', 'Dashboard'],
  ['/ai', 'AI Sort'],
  ['/quests', 'Quests'],
  ['/passports', 'Passports'],
  ['/map', 'Map'],
  ['/marketplace', 'Marketplace'],
  ['/nft-studio', 'NFT Studio'],
  ['/profile', 'Profile']
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-leaf-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-black text-leaf-800">EcoLoop</Link>
        <nav className="hidden gap-5 md:flex">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 transition hover:text-leaf-700">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
