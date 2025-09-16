-- CreateEnum
CREATE TYPE "public"."VoteType" AS ENUM ('UP', 'DOWN');
-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "unique_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."Places" (
    "id" SERIAL NOT NULL,
    "profile_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pfp" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "country_code" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "maps_url" TEXT NOT NULL,
    "review_value" DOUBLE PRECISION NOT NULL,
    "review_amount" INTEGER NOT NULL,
    "total_up_votes" INTEGER NOT NULL DEFAULT 0,
    "total_down_votes" INTEGER NOT NULL DEFAULT 0,
    "added_by_id" INTEGER NOT NULL,
    CONSTRAINT "Places_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."Tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."PlaceTags" (
    "id" SERIAL NOT NULL,
    "place_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "up_votes" INTEGER NOT NULL DEFAULT 0,
    "down_votes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "PlaceTags_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "public"."Votes" (
    "id" SERIAL NOT NULL,
    "vote_type" "public"."VoteType" NOT NULL,
    "voted_by_id" INTEGER NOT NULL,
    "place_tag_id" INTEGER NOT NULL,
    CONSTRAINT "Votes_pkey" PRIMARY KEY ("id")
);
-- CreateIndex
CREATE UNIQUE INDEX "Users_unique_id_key" ON "public"."Users"("unique_id");
-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "public"."Users"("email");
-- CreateIndex
CREATE UNIQUE INDEX "Places_profile_id_key" ON "public"."Places"("profile_id");
-- CreateIndex
CREATE UNIQUE INDEX "Places_name_key" ON "public"."Places"("name");
-- CreateIndex
CREATE UNIQUE INDEX "Places_pfp_key" ON "public"."Places"("pfp");
-- CreateIndex
CREATE UNIQUE INDEX "Places_maps_url_key" ON "public"."Places"("maps_url");
-- CreateIndex
CREATE UNIQUE INDEX "Tags_name_key" ON "public"."Tags"("name");
-- CreateIndex
CREATE UNIQUE INDEX "PlaceTags_place_id_tag_id_key" ON "public"."PlaceTags"("place_id", "tag_id");
-- CreateIndex
CREATE UNIQUE INDEX "Votes_voted_by_id_place_tag_id_key" ON "public"."Votes"("voted_by_id", "place_tag_id");
-- AddForeignKey
ALTER TABLE "public"."Places"
ADD CONSTRAINT "Places_added_by_id_fkey" FOREIGN KEY ("added_by_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "public"."Tags"
ADD CONSTRAINT "Tags_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "public"."PlaceTags"
ADD CONSTRAINT "PlaceTags_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "public"."Places"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "public"."PlaceTags"
ADD CONSTRAINT "PlaceTags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "public"."Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "public"."Votes"
ADD CONSTRAINT "Votes_voted_by_id_fkey" FOREIGN KEY ("voted_by_id") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- AddForeignKey
ALTER TABLE "public"."Votes"
ADD CONSTRAINT "Votes_place_tag_id_fkey" FOREIGN KEY ("place_tag_id") REFERENCES "public"."PlaceTags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
-- prisma/migrations/<timestamp>_add-postgis-geom/migration.sql
-- 1) Ensure PostGIS extension exists
CREATE EXTENSION IF NOT EXISTS postgis;
-- 2) Add the geom column
ALTER TABLE "Places"
ADD COLUMN IF NOT EXISTS geom geometry(Point, 4326);
-- 3) Backfill geom from existing lat/lng
UPDATE "Places"
SET geom = ST_SetSRID(ST_MakePoint(lng, lat), 4326)
WHERE lat IS NOT NULL
    AND lng IS NOT NULL;
-- 4) Add a GIST index for fast spatial queries
CREATE INDEX IF NOT EXISTS places_geom_idx ON "Places" USING GIST (geom);
-- 5) Optional: Trigger to keep geom in sync on INSERT/UPDATE
CREATE OR REPLACE FUNCTION places_set_geom() RETURNS trigger AS $$ BEGIN NEW.geom := ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326);
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
DROP TRIGGER IF EXISTS set_geom_before_insert ON "Places";
CREATE TRIGGER set_geom_before_insert BEFORE
INSERT
    OR
UPDATE ON "Places" FOR EACH ROW EXECUTE FUNCTION places_set_geom();