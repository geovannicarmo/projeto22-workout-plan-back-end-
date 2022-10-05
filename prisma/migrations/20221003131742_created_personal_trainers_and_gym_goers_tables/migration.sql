-- CreateTable
CREATE TABLE "personalTrainers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "personalTrainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GymGoers" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "GymGoers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "personalTrainers_email_key" ON "personalTrainers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "GymGoers_email_key" ON "GymGoers"("email");
