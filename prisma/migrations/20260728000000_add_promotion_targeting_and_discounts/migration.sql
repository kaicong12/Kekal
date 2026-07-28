-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('NONE', 'FIXED_AMOUNT', 'PERCENTAGE', 'OVERRIDE_PRICE');

-- CreateEnum
CREATE TYPE "PromotionScope" AS ENUM ('ALL', 'TAG', 'BRAND', 'MODEL', 'MOTORCYCLE');

-- AlterTable
ALTER TABLE "promotions"
    ADD COLUMN "discountType" "DiscountType" NOT NULL DEFAULT 'NONE',
    ADD COLUMN "discountValue" DECIMAL(65,30);

-- CreateTable
CREATE TABLE "promotionTargets" (
    "id" TEXT NOT NULL,
    "scope" "PromotionScope" NOT NULL,
    "value" TEXT,
    "isExclusion" BOOLEAN NOT NULL DEFAULT false,
    "promotionId" TEXT NOT NULL,

    CONSTRAINT "promotionTargets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "promotionTargets_promotionId_scope_value_key" ON "promotionTargets"("promotionId", "scope", "value");

-- CreateIndex
CREATE INDEX "promotionTargets_scope_value_idx" ON "promotionTargets"("scope", "value");

-- AddForeignKey
ALTER TABLE "promotionTargets" ADD CONSTRAINT "promotionTargets_promotionId_fkey" FOREIGN KEY ("promotionId") REFERENCES "promotions"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Backfill: every promotion already pinned to a bike becomes a MOTORCYCLE target,
-- so existing links keep working. Promotions with no linked bike are left with no
-- targets on purpose — today they only ever render on the promotions page, and
-- giving them an ALL target would silently push them onto every detail page.
-- Staff can add an ALL target from the admin panel when they actually want that.
INSERT INTO "promotionTargets" ("id", "scope", "value", "isExclusion", "promotionId")
SELECT
    'c' || replace(gen_random_uuid()::text, '-', ''),
    'MOTORCYCLE'::"PromotionScope",
    "motorcycleId",
    false,
    "id"
FROM "promotions"
WHERE "motorcycleId" IS NOT NULL;
