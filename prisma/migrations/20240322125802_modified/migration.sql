-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "firstname" INTEGER NOT NULL,
    "lastname" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bookings" ADD CONSTRAINT "Bookings_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
