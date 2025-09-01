const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function main() {
  // Prvo kreiramo brendove
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { name: "Audi" },
      update: {},
      create: { name: "Audi" },
    }),
    prisma.brand.upsert({
      where: { name: "Mercedes" },
      update: {},
      create: { name: "Mercedes" },
    }),
    prisma.brand.upsert({
      where: { name: "BMW" },
      update: {},
      create: { name: "BMW" },
    }),
    prisma.brand.upsert({
      where: { name: "Toyota" },
      update: {},
      create: { name: "Toyota" },
    }),
    prisma.brand.upsert({
      where: { name: "Volkswagen" },
      update: {},
      create: { name: "Volkswagen" },
    }),
  ]);

  console.log(
    "Brendovi kreirani:",
    brands.map((b) => b.name)
  );

  // Ažuriramo postojeće automobile sa slikama
  const carUpdates = await Promise.all([
    // BMW
    prisma.car.update({
      where: { registration: "BG-001-AB" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-002-CD" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-003-EF" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-004-GH" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-005-IJ" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-006-KL" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-007-MN" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-008-OP" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-009-QR" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-010-ST" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-011-UV" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-012-WX" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-013-YZ" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-014-AA" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      },
    }),
    prisma.car.update({
      where: { registration: "BG-015-BB" },
      data: {
        imageUrl:
          "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
      },
    }),
  ]);

  console.log("Automobili ažurirani sa slikama:", carUpdates.length);
  console.log("Seed završen uspešno!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
