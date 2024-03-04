/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Technician` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Technician_email_key" ON "Technician"("email");
