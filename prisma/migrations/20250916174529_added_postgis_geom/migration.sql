/*
 Warnings:
 
 - You are about to drop the column `geom` on the `Places` table. All the data in the column will be lost.
 
 */
-- DropIndex
DROP INDEX "public"."places_geom_idx";
-- AlterTable
ALTER TABLE "public"."Places" DROP COLUMN "geom";