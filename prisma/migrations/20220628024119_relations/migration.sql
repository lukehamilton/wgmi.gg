/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `linkId` on the `Verification` table. All the data in the column will be lost.
  - Added the required column `account` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Verification" DROP CONSTRAINT "Verification_linkId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
ADD COLUMN     "account" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Verification" DROP COLUMN "linkId",
ADD COLUMN     "projectId" INTEGER;

-- CreateTable
CREATE TABLE "_LinkToVerification" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LinkToVerification_AB_unique" ON "_LinkToVerification"("A", "B");

-- CreateIndex
CREATE INDEX "_LinkToVerification_B_index" ON "_LinkToVerification"("B");

-- AddForeignKey
ALTER TABLE "Verification" ADD CONSTRAINT "Verification_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToVerification" ADD CONSTRAINT "_LinkToVerification_A_fkey" FOREIGN KEY ("A") REFERENCES "Link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LinkToVerification" ADD CONSTRAINT "_LinkToVerification_B_fkey" FOREIGN KEY ("B") REFERENCES "Verification"("id") ON DELETE CASCADE ON UPDATE CASCADE;
