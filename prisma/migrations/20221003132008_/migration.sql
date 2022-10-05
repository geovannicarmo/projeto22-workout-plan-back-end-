/*
  Warnings:

  - Added the required column `name` to the `GymGoers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `GymGoers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `personalTrainers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `personalTrainers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GymGoers" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "personalTrainers" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL;
