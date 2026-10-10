/*
  Warnings:

  - A unique constraint covering the columns `[appointmentSlot]` on the table `Appointment` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Appointment" ALTER COLUMN "appointmentSlot" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_appointmentSlot_key" ON "Appointment"("appointmentSlot");
