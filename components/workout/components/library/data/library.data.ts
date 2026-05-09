import prisma from "@/shared/server/prisma";

export async function getMuscles(search?: string) {
  return prisma.muscle.findMany({
    where: {
      OR: search
        ? [
            { nameEs: { contains: search, mode: "insensitive" } },
            { nameEn: { contains: search, mode: "insensitive" } },
          ]
        : undefined,
    },
    orderBy: {
      nameEs: "asc",
    },
  });
}
