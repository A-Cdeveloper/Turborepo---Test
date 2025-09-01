const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

// Array sa različitim slikama za različite brendove
const brandImages = {
  1: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop", // Audi
  2: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop", // Mercedes
  3: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop", // BMW
  4: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop", // Toyota
  5: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&h=600&fit=crop", // Volkswagen
};

async function main() {
  console.log("Započinjem dodavanje slika za sve automobile...");

  // Uzimamo sve automobile koji nemaju slike
  const carsWithoutImages = await prisma.car.findMany({
    where: {
      imageUrl: null,
    },
    select: {
      id: true,
      registration: true,
      brandId: true,
    },
  });

  console.log(`Pronađeno ${carsWithoutImages.length} automobila bez slika`);

  // Ažuriramo svaki automobil sa odgovarajućom slikom
  const updates = await Promise.all(
    carsWithoutImages.map((car) =>
      prisma.car.update({
        where: { id: car.id },
        data: {
          imageUrl: brandImages[car.brandId] || brandImages[1], // fallback na Audi sliku
        },
      })
    )
  );

  console.log(`Uspešno ažurirano ${updates.length} automobila sa slikama`);
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
