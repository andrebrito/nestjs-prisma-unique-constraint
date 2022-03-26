/*
  Warnings:

  - Added the required column `positionId` to the `Athlete` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Athlete" ADD COLUMN     "positionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "Position"("name");

-- AddForeignKey
ALTER TABLE "Athlete" ADD CONSTRAINT "Athlete_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
