-- The cash-sales / receipt-management admin screens were dropped from the nav in
-- the Jul 1 admin redesign and their components deleted since. Nothing reads
-- these tables any more.
--
-- Destructive: this discards every issued receipt. Dropped children first so the
-- foreign keys to "generatedReceipts" go before the parent.

-- DropForeignKey
ALTER TABLE "receiptCustomers" DROP CONSTRAINT "receiptCustomers_receiptId_fkey";

-- DropForeignKey
ALTER TABLE "receiptItems" DROP CONSTRAINT "receiptItems_receiptId_fkey";

-- DropTable
DROP TABLE "receiptCustomers";

-- DropTable
DROP TABLE "receiptItems";

-- DropTable
DROP TABLE "generatedReceipts";
