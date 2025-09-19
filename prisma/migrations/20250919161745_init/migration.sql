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
    "place_id" TEXT NOT NULL,
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
CREATE UNIQUE INDEX "Places_place_id_key" ON "public"."Places"("place_id");
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
-- PostGIS Extension and Geometry Setup
CREATE EXTENSION IF NOT EXISTS postgis;
-- Add geometry column to Places table
ALTER TABLE "public"."Places"
ADD COLUMN geom geometry(Point, 4326);
-- Create spatial index for efficient queries
CREATE INDEX places_geom_idx ON "public"."Places" USING GIST (geom);
-- Backfill existing data
UPDATE "public"."Places"
SET geom = ST_SetSRID(ST_MakePoint(lng, lat), 4326)
WHERE lat IS NOT NULL
    AND lng IS NOT NULL;
-- Create function to auto-update geom when lat/lng changes
CREATE OR REPLACE FUNCTION public.places_set_geom() RETURNS TRIGGER AS $$ BEGIN IF NEW.lat IS NOT NULL
    AND NEW.lng IS NOT NULL THEN NEW.geom := ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326);
END IF;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- Create trigger to keep geom in sync
CREATE TRIGGER set_geom_before_insert_update BEFORE
INSERT
    OR
UPDATE ON "public"."Places" FOR EACH ROW EXECUTE FUNCTION public.places_set_geom();