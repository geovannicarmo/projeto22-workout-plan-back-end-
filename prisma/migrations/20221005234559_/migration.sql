/*
  Warnings:

  - Added the required column `ExercisesCategoryId` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `GymGoersId` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" ADD COLUMN     "ExercisesCategoryId" INTEGER NOT NULL,
ADD COLUMN     "GymGoersId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ExercisesCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ExercisesCategory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_ExercisesCategoryId_fkey" FOREIGN KEY ("ExercisesCategoryId") REFERENCES "ExercisesCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_GymGoersId_fkey" FOREIGN KEY ("GymGoersId") REFERENCES "GymGoers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
