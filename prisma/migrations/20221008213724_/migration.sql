/*
  Warnings:

  - You are about to drop the column `name` on the `ExercisesCategory` table. All the data in the column will be lost.
  - Added the required column `label` to the `ExercisesCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExercisesCategory" DROP COLUMN "name",
ADD COLUMN     "label" TEXT NOT NULL;
