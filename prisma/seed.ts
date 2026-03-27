import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { piUid: 'pi-demo-user' },
    update: {},
    create: {
      piUid: 'pi-demo-user',
      username: 'ecohero',
      displayName: 'Eco Hero',
      points: 1240,
      piBalance: 12.5,
      streakDays: 8,
      level: 6,
      carbonSavedKg: 84.3,
      itemsRecycled: 132,
      referralsCount: 14
    }
  });

  const badge = await prisma.badge.upsert({
    where: { name: 'Circular Pioneer' },
    update: {},
    create: { name: 'Circular Pioneer', icon: '♻️', description: 'Built a visible impact streak in the circular economy' }
  });

  await prisma.userBadge.create({ data: { userId: user.id, badgeId: badge.id } }).catch(() => {});

  await prisma.recyclingUpload.create({
    data: {
      userId: user.id,
      title: 'Plastic bottle upload',
      imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a',
      wasteType: 'PLASTIC',
      confidence: 0.96,
      impactKg: 1.2,
      suggestion: 'Rinse, compress, and drop into PET recycling stream.'
    }
  });

  await prisma.challenge.createMany({
    data: [
      { title: 'Daily Sorter', description: 'Upload 3 recyclable items today', pointsReward: 50, piReward: 0.1, isDaily: true },
      { title: 'Neighborhood Hero', description: 'Join one cleanup quest near you', pointsReward: 90, piReward: 0.2, isDaily: false },
      { title: 'Passport Maker', description: 'Create a circular passport for one upcycled item', pointsReward: 80, piReward: 0.15, isDaily: false }
    ],
    skipDuplicates: true
  });

  await prisma.listing.create({
    data: {
      userId: user.id,
      title: 'Recycled Glass Vase',
      description: 'Handmade vase from reclaimed bottles',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0',
      pricePi: 4.5,
      quantity: 2,
      listingType: 'PRODUCT'
    }
  }).catch(() => {});

  await prisma.circularPassport.create({
    data: {
      userId: user.id,
      itemName: 'Ocean Bottle Lamp',
      sourceType: 'plastic',
      materialSummary: 'Recovered PET bottles and reclaimed copper cable',
      recoveryStory: 'Collected from community cleanup and transformed by a local maker.',
      impactSummary: 'Prevented mixed plastic disposal and extended material lifecycle.',
      qrPayload: 'passport://ocean-bottle-lamp'
    }
  }).catch(() => {});
}

main().finally(async () => prisma.$disconnect());
