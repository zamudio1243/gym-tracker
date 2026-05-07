import { Prisma, PrismaClient } from "@/generated/prisma/client";

export async function seedCategories(prisma: PrismaClient) {
  const categories = [
    {
      id: "cmov3v5m9000504l46masghow",
      slug: "chest",
      nameEn: "Chest",
      nameEs: "Pecho",
    },
    {
      id: "hyxmbll9m62xav4fpug1y9pb",
      slug: "back",
      nameEn: "Back",
      nameEs: "Espalda",
    },
    {
      id: "ucwdnlo2iqovjp1dsrbvtrqz",
      slug: "shoulders",
      nameEn: "Shoulders",
      nameEs: "Hombros",
    },
    {
      id: "dt88glpys1euy66mcwquozrh",
      slug: "legs",
      nameEn: "Legs",
      nameEs: "Piernas",
    },
    {
      id: "h9cozxu26wx1amos66ygxn38",
      slug: "biceps",
      nameEn: "Biceps",
      nameEs: "Bíceps",
    },
    {
      id: "ngwai6jas7vmzttctl1pm3tk",
      slug: "triceps",
      nameEn: "Triceps",
      nameEs: "Tríceps",
    },
    {
      id: "k4xwcozyrepfyvyoiixgaa32",
      slug: "core",
      nameEn: "Core",
      nameEs: "Core",
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
