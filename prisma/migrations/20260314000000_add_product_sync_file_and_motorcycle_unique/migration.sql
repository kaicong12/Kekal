-- CreateTable
CREATE TABLE "productSyncFiles" (
    "id" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "isProcessed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "productSyncFiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "productSyncFiles_filePath_key" ON "productSyncFiles"("filePath");

-- CreateIndex
CREATE UNIQUE INDEX "motorcycles_brand_name_year_key" ON "motorcycles"("brand", "name", "year");
