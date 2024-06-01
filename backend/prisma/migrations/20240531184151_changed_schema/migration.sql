/*
  Warnings:

  - You are about to alter the column `uan_no` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `esi_no` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - Made the column `uan_no` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `esi_no` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "uan_no" SET NOT NULL,
ALTER COLUMN "uan_no" SET DATA TYPE INTEGER,
ALTER COLUMN "esi_no" SET NOT NULL,
ALTER COLUMN "esi_no" SET DATA TYPE INTEGER;
