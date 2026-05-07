import { Prisma, PrismaClient } from "@/generated/prisma/client";

export async function seedCategories(prisma: PrismaClient) {
  const categories = [
    {
      id: "cmov3v5m9000504l46masghow",
      slug: "chest",
      nameEn: "Chest",
      nameEs: "Pecho",
    },
  ] satisfies Prisma.CategoryCreateManyInput[];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: category.id },
      update: {
        slug: category.slug,
        nameEn: category.nameEn,
        nameEs: category.nameEs,
      },
      create: category,
    });
  }
}
