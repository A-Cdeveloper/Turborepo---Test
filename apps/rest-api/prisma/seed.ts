import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Kreiraj brendove
  const brands = await Promise.all([
    prisma.brand.upsert({
      where: { name: "BMW" },
      update: {},
      create: { name: "BMW" },
    }),
    prisma.brand.upsert({
      where: { name: "Mercedes" },
      update: {},
      create: { name: "Mercedes" },
    }),
    prisma.brand.upsert({
      where: { name: "Audi" },
      update: {},
      create: { name: "Audi" },
    }),
    prisma.brand.upsert({
      where: { name: "Volkswagen" },
      update: {},
      create: { name: "Volkswagen" },
    }),
    prisma.brand.upsert({
      where: { name: "Toyota" },
      update: {},
      create: { name: "Toyota" },
    }),
    prisma.brand.upsert({
      where: { name: "Honda" },
      update: {},
      create: { name: "Honda" },
    }),
  ]);

  // Kreiraj automobile
  const cars = [
    {
      model: "X5",
      kilometers: 50000,
      registration: "BG-001-AB",
      price: 45000,
      brandName: "BMW",
    },
    {
      model: "X3",
      kilometers: 35000,
      registration: "BG-002-CD",
      price: 38000,
      brandName: "BMW",
    },
    {
      model: "C-Class",
      kilometers: 30000,
      registration: "BG-003-EF",
      price: 35000,
      brandName: "Mercedes",
    },
    {
      model: "E-Class",
      kilometers: 25000,
      registration: "BG-004-GH",
      price: 55000,
      brandName: "Mercedes",
    },
    {
      model: "A4",
      kilometers: 40000,
      registration: "BG-005-IJ",
      price: 32000,
      brandName: "Audi",
    },
    {
      model: "Q5",
      kilometers: 28000,
      registration: "BG-006-KL",
      price: 42000,
      brandName: "Audi",
    },
    {
      model: "Golf",
      kilometers: 60000,
      registration: "BG-007-MN",
      price: 18000,
      brandName: "Volkswagen",
    },
    {
      model: "Passat",
      kilometers: 45000,
      registration: "BG-008-OP",
      price: 25000,
      brandName: "Volkswagen",
    },
    {
      model: "Camry",
      kilometers: 55000,
      registration: "BG-009-QR",
      price: 22000,
      brandName: "Toyota",
    },
    {
      model: "RAV4",
      kilometers: 32000,
      registration: "BG-010-ST",
      price: 28000,
      brandName: "Toyota",
    },
    {
      model: "Civic",
      kilometers: 48000,
      registration: "BG-011-UV",
      price: 20000,
      brandName: "Honda",
    },
    {
      model: "CR-V",
      kilometers: 38000,
      registration: "BG-012-WX",
      price: 32000,
      brandName: "Honda",
    },
    {
      model: "M3",
      kilometers: 15000,
      registration: "BG-013-YZ",
      price: 75000,
      brandName: "BMW",
    },
    {
      model: "S-Class",
      kilometers: 20000,
      registration: "BG-014-AA",
      price: 85000,
      brandName: "Mercedes",
    },
    {
      model: "RS6",
      kilometers: 12000,
      registration: "BG-015-BB",
      price: 95000,
      brandName: "Audi",
    },
    {
      model: "Tiguan",
      kilometers: 35000,
      registration: "BG-016-CC",
      price: 35000,
      brandName: "Volkswagen",
    },
    {
      model: "Corolla",
      kilometers: 65000,
      registration: "BG-017-DD",
      price: 18000,
      brandName: "Toyota",
    },
    {
      model: "Accord",
      kilometers: 42000,
      registration: "BG-018-EE",
      price: 24000,
      brandName: "Honda",
    },
    {
      model: "X1",
      kilometers: 28000,
      registration: "BG-019-FF",
      price: 32000,
      brandName: "BMW",
    },
    {
      model: "GLC",
      kilometers: 22000,
      registration: "BG-020-GG",
      price: 48000,
      brandName: "Mercedes",
    },
  ];

  for (const car of cars) {
    const brand = brands.find((b) => b.name === car.brandName)!;
    await prisma.car.upsert({
      where: { registration: car.registration },
      update: {},
      create: {
        model: car.model,
        kilometers: car.kilometers,
        registration: car.registration,
        price: car.price,
        brandId: brand.id,
      },
    });
  }

  console.log("Seed završen! 6 brendova, 20 automobila");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
