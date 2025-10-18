-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "category" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
