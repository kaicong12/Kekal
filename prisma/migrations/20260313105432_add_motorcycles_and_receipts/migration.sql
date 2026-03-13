-- CreateTable
CREATE TABLE "motorcycles" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "engine" TEXT NOT NULL,
    "engineCapacity" INTEGER NOT NULL,
    "gear" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "tags" TEXT,
    "description" TEXT,
    "specification" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "motorcycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motorcycleImages" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "motorcycleId" TEXT NOT NULL,

    CONSTRAINT "motorcycleImages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generatedReceipts" (
    "id" TEXT NOT NULL,
    "receiptNumber" TEXT NOT NULL,
    "purchaseDate" TIMESTAMP(3) NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "additionalNotes" TEXT,
    "total" DOUBLE PRECISION NOT NULL,
    "pdfUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "generatedReceipts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receiptCustomers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "cityPostal" TEXT,
    "phone" TEXT,
    "receiptId" TEXT NOT NULL,

    CONSTRAINT "receiptCustomers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receiptItems" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "receiptId" TEXT NOT NULL,

    CONSTRAINT "receiptItems_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "generatedReceipts_receiptNumber_key" ON "generatedReceipts"("receiptNumber");

-- CreateIndex
CREATE UNIQUE INDEX "receiptCustomers_receiptId_key" ON "receiptCustomers"("receiptId");

-- AddForeignKey
ALTER TABLE "motorcycleImages" ADD CONSTRAINT "motorcycleImages_motorcycleId_fkey" FOREIGN KEY ("motorcycleId") REFERENCES "motorcycles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receiptCustomers" ADD CONSTRAINT "receiptCustomers_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "generatedReceipts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "receiptItems" ADD CONSTRAINT "receiptItems_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "generatedReceipts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
