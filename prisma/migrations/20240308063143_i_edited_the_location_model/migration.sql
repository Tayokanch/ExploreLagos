/*
  Warnings:

  - You are about to drop the column `activities` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `history` on the `Location` table. All the data in the column will be lost.
  - Added the required column `about` to the `Location` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highlights` to the `Location` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "activities",
DROP COLUMN "history",
ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "highlights" JSONB NOT NULL;
