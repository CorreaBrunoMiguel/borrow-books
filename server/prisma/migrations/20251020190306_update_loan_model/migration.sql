/*
  Warnings:

  - You are about to drop the column `loanDate` on the `Loan` table. All the data in the column will be lost.
  - You are about to drop the column `returnDate` on the `Loan` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Loan" DROP COLUMN "loanDate",
DROP COLUMN "returnDate",
ADD COLUMN     "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "returnedAt" TIMESTAMP(3);
