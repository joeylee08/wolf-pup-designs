/*
  Warnings:

  - You are about to drop the column `status` on the `Appointment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "status";

-- DropEnum
DROP TYPE "AppointmentStatus";

-- CreateTable
CREATE TABLE "BlockedSlot" (
    "id" SERIAL NOT NULL,
    "appointmentSlot" TEXT NOT NULL,

    CONSTRAINT "BlockedSlot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlockedSlot_appointmentSlot_key" ON "BlockedSlot"("appointmentSlot");
