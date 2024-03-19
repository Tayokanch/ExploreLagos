/*
  Warnings:

  - Added the required column `locationName` to the `Bookings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookings" ADD COLUMN     "locationName" INTEGER NOT NULL;
