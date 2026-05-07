-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('COMPOUND', 'ISOLATED');

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Muscle" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL,

    CONSTRAINT "Muscle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "nameEs" TEXT NOT NULL,
    "type" "ExerciseType" NOT NULL,
    "categoryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EquipmentToExercise" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EquipmentToExercise_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PrimaryMuscles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PrimaryMuscles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_SecondaryMuscles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_SecondaryMuscles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Equipment_slug_key" ON "Equipment"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Muscle_slug_key" ON "Muscle"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_slug_key" ON "Exercise"("slug");

-- CreateIndex
CREATE INDEX "_EquipmentToExercise_B_index" ON "_EquipmentToExercise"("B");

-- CreateIndex
CREATE INDEX "_PrimaryMuscles_B_index" ON "_PrimaryMuscles"("B");

-- CreateIndex
CREATE INDEX "_SecondaryMuscles_B_index" ON "_SecondaryMuscles"("B");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentToExercise" ADD CONSTRAINT "_EquipmentToExercise_A_fkey" FOREIGN KEY ("A") REFERENCES "Equipment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EquipmentToExercise" ADD CONSTRAINT "_EquipmentToExercise_B_fkey" FOREIGN KEY ("B") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PrimaryMuscles" ADD CONSTRAINT "_PrimaryMuscles_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PrimaryMuscles" ADD CONSTRAINT "_PrimaryMuscles_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SecondaryMuscles" ADD CONSTRAINT "_SecondaryMuscles_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SecondaryMuscles" ADD CONSTRAINT "_SecondaryMuscles_B_fkey" FOREIGN KEY ("B") REFERENCES "Muscle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
