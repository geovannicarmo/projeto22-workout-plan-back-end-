-- AlterTable
ALTER TABLE "Exercises" ADD COLUMN     "break" INTEGER NOT NULL DEFAULT 30,
ADD COLUMN     "program" TEXT NOT NULL DEFAULT 'A';
