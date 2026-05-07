import { Prisma, PrismaClient } from "@/generated/prisma/client";

export async function seedEquipment(prisma: PrismaClient) {
  const equipment = [
    { slug: "barbell", nameEs: "Barra", nameEn: "Barbell" },
    { slug: "bench", nameEs: "Banco", nameEn: "Bench" },
    { slug: "dumbbells", nameEs: "Mancuernas", nameEn: "Dumbbells" },
    { slug: "dumbbell", nameEs: "Mancuerna", nameEn: "Dumbbell" },
    { slug: "incline_bench", nameEs: "Banco inclinado", nameEn: "Incline Bench" },
    { slug: "parallel_bars", nameEs: "Barras paralelas", nameEn: "Parallel Bars" },
    { slug: "cables", nameEs: "Poleas", nameEn: "Cables" },
    { slug: "cable", nameEs: "Polea", nameEn: "Cable" },
    { slug: "lat_pulldown_machine", nameEs: "Polea alta", nameEn: "Lat Pulldown Machine" },
    { slug: "chest_machine", nameEs: "Máquina de pecho", nameEn: "Chest Machine" },
    { slug: "pull_up_bar", nameEs: "Barra de dominadas", nameEn: "Pull-up Bar" },
    { slug: "t_bar_row_machine", nameEs: "Máquina remo en T o barra", nameEn: "T-Bar Row Machine" },
    { slug: "rack", nameEs: "Rack", nameEn: "Rack" },
    { slug: "leg_press_machine", nameEs: "Prensa", nameEn: "Leg Press Machine" },
    { slug: "leg_curl_machine", nameEs: "Máquina de curl femoral", nameEn: "Leg Curl Machine" },
    { slug: "leg_extension_machine", nameEs: "Máquina de extensiones", nameEn: "Leg Extension Machine" },
    { slug: "seated_calf_machine", nameEs: "Máquina de sóleos", nameEn: "Seated Calf Machine" },
    { slug: "machine", nameEs: "Máquina", nameEn: "Machine" },
    { slug: "ez_bar", nameEs: "Barra Z", nameEn: "EZ Bar" },
    { slug: "preacher_bench", nameEs: "Banco predicador", nameEn: "Preacher Bench" },
    { slug: "weight_plate", nameEs: "Disco", nameEn: "Weight Plate" },
    { slug: "ab_wheel", nameEs: "Rueda abdominal", nameEn: "Ab Wheel" },
  ] satisfies Prisma.EquipmentCreateManyInput[];

  for (const item of equipment) {
    await prisma.equipment.upsert({
      where: { slug: item.slug },
      update: { nameEs: item.nameEs, nameEn: item.nameEn },
      create: item,
    });
  }
}
