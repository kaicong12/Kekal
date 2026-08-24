-- CreateEnum
CREATE TYPE "BlogPostStatus" AS ENUM ('DRAFT', 'PUBLISHED');

-- CreateTable
CREATE TABLE "blogPosts" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "tags" TEXT,
    "coverImageUrl" TEXT,
    "status" "BlogPostStatus" NOT NULL DEFAULT 'DRAFT',
    "sourceLocale" TEXT NOT NULL DEFAULT 'en',
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogPosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogPostTranslations" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "body" JSONB NOT NULL,
    "plainText" TEXT NOT NULL,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "postId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogPostTranslations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blogPosts_slug_key" ON "blogPosts"("slug");

-- CreateIndex
CREATE INDEX "blogPosts_status_publishedAt_idx" ON "blogPosts"("status", "publishedAt");

-- CreateIndex
CREATE INDEX "blogPosts_category_idx" ON "blogPosts"("category");

-- CreateIndex
CREATE INDEX "blogPostTranslations_locale_idx" ON "blogPostTranslations"("locale");

-- CreateIndex
CREATE UNIQUE INDEX "blogPostTranslations_postId_locale_key" ON "blogPostTranslations"("postId", "locale");

-- AddForeignKey
ALTER TABLE "blogPostTranslations" ADD CONSTRAINT "blogPostTranslations_postId_fkey" FOREIGN KEY ("postId") REFERENCES "blogPosts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
