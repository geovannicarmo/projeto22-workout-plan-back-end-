/*
  Warnings:

  - Added the required column `comments` to the `Exercises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" ADD COLUMN     "comments" TEXT NOT NULL;
