import prisma from "@/shared/server/prisma";

type GetMusclesParams = {
  search?: string;
  slugs?: string[];
};

export async function getMuscles({ search, slugs }: GetMusclesParams) {
  return prisma.muscle.findMany({
    where: {
      OR: search
        ? [
            { nameEs: { contains: search, mode: "insensitive" } },
            { nameEn: { contains: search, mode: "insensitive" } },
          ]
        : undefined,
      slug: slugs ? { in: slugs } : undefined,
    },
    orderBy: {
      nameEs: "asc",
    },
  });
}
