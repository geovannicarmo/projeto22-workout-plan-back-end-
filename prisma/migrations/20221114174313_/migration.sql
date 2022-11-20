/*
  Warnings:

  - Added the required column `typeUser` to the `personalTrainers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personalTrainers" ADD COLUMN     "typeUser" TEXT NOT NULL;
