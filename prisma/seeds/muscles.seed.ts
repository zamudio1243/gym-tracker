import { Prisma, PrismaClient } from "@/generated/prisma/client";

export async function seedMuscles(prisma: PrismaClient) {
  const muscles = [
    { slug: "pectorals", nameEs: "Pectorales", nameEn: "Pectorals" },
    { slug: "upper_pectorals", nameEs: "Pectorales superiores", nameEn: "Upper Pectorals" },
    { slug: "lower_pectorals", nameEs: "Pectorales inferiores", nameEn: "Lower Pectorals" },
    { slug: "triceps", nameEs: "Tríceps", nameEn: "Triceps" },
    { slug: "front_deltoids", nameEs: "Deltoides anteriores", nameEn: "Front Deltoids" },
    { slug: "core", nameEs: "Core", nameEn: "Core" },
    { slug: "lats", nameEs: "Dorsales", nameEn: "Lats" },
    { slug: "biceps", nameEs: "Bíceps", nameEn: "Biceps" },
    { slug: "traps", nameEs: "Trapecios", nameEn: "Traps" },
    { slug: "rhomboids", nameEs: "Romboides", nameEn: "Rhomboids" },
    { slug: "lower_back", nameEs: "Espalda baja", nameEn: "Lower Back" },
    { slug: "posterior_chain", nameEs: "Cadena posterior", nameEn: "Posterior Chain" },
    { slug: "glutes", nameEs: "Glúteos", nameEn: "Glutes" },
    { slug: "hamstrings", nameEs: "Isquiotibiales", nameEn: "Hamstrings" },
    { slug: "rear_deltoids", nameEs: "Deltoides posteriores", nameEn: "Rear Deltoids" },
    { slug: "mid_traps", nameEs: "Trapecios medios", nameEn: "Mid Traps" },
    { slug: "deltoids", nameEs: "Deltoides", nameEn: "Deltoids" },
    { slug: "lateral_deltoids", nameEs: "Deltoides laterales", nameEn: "Lateral Deltoids" },
    { slug: "quadriceps", nameEs: "Cuádriceps", nameEn: "Quadriceps" },
    { slug: "calves", nameEs: "Gemelos", nameEn: "Calves" },
    { slug: "soleus", nameEs: "Sóleo", nameEn: "Soleus" },
    { slug: "forearms", nameEs: "Antebrazos", nameEn: "Forearms" },
    { slug: "brachialis", nameEs: "Bíceps braquial", nameEn: "Brachialis" },
    { slug: "abs", nameEs: "Abdominales", nameEn: "Abs" },
    { slug: "lower_abs", nameEs: "Abdominales inferiores", nameEn: "Lower Abs" },
    { slug: "obliques", nameEs: "Oblicuos", nameEn: "Obliques" },
    { slug: "deep_core", nameEs: "Core profundo", nameEn: "Deep Core" },
    { slug: "shoulders", nameEs: "Hombros", nameEn: "Shoulders" },
    { slug: "hip_flexors", nameEs: "Flexores de cadera", nameEn: "Hip Flexors" },
    { slug: "hips", nameEs: "Caderas", nameEn: "Hips" },
  ] satisfies Prisma.MuscleCreateManyInput[];

  for (const muscle of muscles) {
    await prisma.muscle.upsert({
      where: { slug: muscle.slug },
      update: { nameEs: muscle.nameEs, nameEn: muscle.nameEn },
      create: muscle,
    });
  }
}
