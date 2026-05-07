import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
import { seedCategories } from "./seeds/categories.seed";
import { seedEquipment } from "./seeds/equipment.seed";
import { seedMuscles } from "./seeds/muscles.seed";
import { seedExercises } from "./seeds/exercises.seed";

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Seed categories
  await seedCategories(prisma);

  // Seed equipment and muscles (must run before exercises)
  await seedEquipment(prisma);
  await seedMuscles(prisma);

  // Seed exercises — connects to existing categories, equipment, and muscles
  await seedExercises(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
