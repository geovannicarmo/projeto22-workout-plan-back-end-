/*
  Warnings:

  - Added the required column `typeUser` to the `GymGoers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GymGoers" ADD COLUMN     "typeUser" TEXT NOT NULL;
