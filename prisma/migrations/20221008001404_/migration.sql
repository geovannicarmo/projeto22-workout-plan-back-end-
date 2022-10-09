/*
  Warnings:

  - You are about to drop the column `name` on the `Exercises` table. All the data in the column will be lost.
  - Added the required column `nRepetitions` to the `Exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nSeries` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" DROP COLUMN "name",
ADD COLUMN     "nRepetitions" INTEGER NOT NULL,
ADD COLUMN     "nSeries" INTEGER NOT NULL;
