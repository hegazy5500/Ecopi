# EcoLoop

**EcoLoop** is a mobile-first recycling super-app for the Pi ecosystem.

It is designed to be **more unique, more Mainnet-ready, and more aligned with Pi Ecosystem listing expectations** than a generic recycling marketplace.

## Why this version is stronger for Mainnet listing

This upgraded version is intentionally aligned with the official Pi Mainnet ecosystem guidance:

- **Professional, fully functional UI** across dashboard, AI sorting, map, marketplace, NFT studio, quests, passports, and profile
- **Pi-only economic model** for marketplace and reward flows
- **Pi-only authentication architecture** in code scaffolding
- **Minimal data collection** using Pi identity fields instead of email/password login
- **No dependency on external login systems**
- **Unique branding**: the app brand is **EcoLoop**, not a Pi-branded app name or Pi lookalike
- **Utility-first design** focused on real-world recycling behavior, local circular economy activity, and measurable impact

Official Pi guidance states that apps eligible for Mainnet ecosystem listing should be fully functional, use only Pi authentication, keep transactions Pi-only, avoid unnecessary external redirection, and limit data collection. [Source](https://pi-apps.github.io/community-developer-guide/docs/gettingStarted/mainnetListingRequirements/) [Source](https://pi-apps.github.io/pi-sdk-docs/getting-started/MainnetListing)

Pi also emphasizes app quality, completeness of functionality, delivered utility, and compliance with ecosystem policies as key factors in ecosystem listing decisions. [Source](https://minepi.com/blog/ecosystem-and-product-updates/)

## What makes EcoLoop unique

Beyond standard recycling features, EcoLoop adds differentiated modules that can help the product stand out:

- **Circular Passports**: every recycled or upcycled item can have a reusable digital story card
- **Community Cleanup Quests**: hyperlocal challenges that turn recycling into visible social utility
- **Proof-of-Recycling records**: structured event records for uploads, rewards, and marketplace actions
- **AI-powered NFT storytelling**: NFT metadata includes sustainability context, not only image art
- **Partner-ready center verification model**: a foundation for trusted recycling center participation

## Feature set

- Smart Recycling AI
- Pi rewards + points
- Streaks, badges, levels, leaderboards
- Recycling center map
- P2P marketplace
- NFT Studio + Pi-compatible minting scaffold
- Circular Passports
- Community Quests
- Pi-only auth scaffold
- Mainnet readiness docs

## Important Pi integration note

Official Pi developer documentation clearly supports **authentication**, **Pi Browser integration**, and **payments** through the Pi SDK and backend verification flow. The Pi SDK is described as abstracting blockchain complexity for Pi-native apps. [Source](https://pi-apps.github.io/pi-sdk-docs/) [Source](https://minepi.com/developers/) [Source](https://pi-apps.github.io/community-developer-guide/docs/gettingStarted/piAppPlatform/piAppPlatformSDK/)

This package therefore includes:

- production-minded frontend and backend structure
- Pi authentication scaffolding
- Pi payment scaffolding
- Pi-only transaction UX
- NFT mint/list architecture for attaching your finalized Pi-compatible contract or minting service

## Mainnet acceptance checklist included

See:

- `docs/MAINNET_ACCEPTANCE_CHECKLIST.md`
- `docs/UNIQUE_POSITIONING.md`
- `docs/PRIVACY_DATA_MINIMIZATION.md`

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma + SQLite for local development
- Zod
- Framer Motion
- Zustand

## Quick start

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Production recommendations before submission

1. Complete Pi developer KYC before app submission. [Source](https://pi-apps.github.io/community-developer-guide/docs/gettingStarted/mainnetListingRequirements/)
2. Replace local file placeholders with real storage.
3. Wire Pi auth verification and payment approval/completion endpoints.
4. Test entirely inside Pi Browser / Sandbox.
5. Keep all live marketplace pricing in Pi only.
6. Avoid unnecessary off-platform redirects.
7. Publish clear privacy and moderation policies.

## License

MIT
