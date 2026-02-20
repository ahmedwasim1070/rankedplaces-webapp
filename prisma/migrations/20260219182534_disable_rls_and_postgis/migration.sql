/*
  Warnings:

  - Added the required column `updated_at` to the `PlaceTags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Places` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Tags` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Votes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PlaceTags"
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Places"
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Tags" 
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Users" 
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Votes" 
ADD COLUMN "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE INDEX "PlaceTags_tag_id_idx" ON "PlaceTags"("tag_id");

-- CreateIndex
CREATE INDEX "Places_added_by_id_idx" ON "Places"("added_by_id");

-- CreateIndex
CREATE INDEX "Places_category_city_idx" ON "Places"("category", "city");

-- CreateIndex
CREATE INDEX "Tags_author_id_idx" ON "Tags"("author_id");

-- CreateIndex
CREATE INDEX "Votes_place_tag_id_idx" ON "Votes"("place_tag_id");

-- reinstall postgis
CREATE EXTENSION IF NOT EXISTS postgis;
-- postgis function -- custom trigger fuction to calculate the lat, lng val's
CREATE OR REPLACE FUNCTION public.places_set_geom() RETURNS TRIGGER AS $$ 
BEGIN 
    IF NEW.lat IS NOT NULL AND NEW.lng IS NOT NULL THEN 
        NEW.geom := ST_SetSRID(ST_MakePoint(NEW.lng, NEW.lat), 4326);
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
-- validates and add the postgis fuction to our coloum
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_geom_before_insert_update') THEN
        CREATE TRIGGER set_geom_before_insert_update 
        BEFORE INSERT OR UPDATE ON "public"."Places" 
        FOR EACH ROW EXECUTE FUNCTION public.places_set_geom();
    END IF;
END $$;

-- custom trigger function for updating updated-at when using raw sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';
-- app to all
CREATE TRIGGER update_users_modtime BEFORE UPDATE ON "Users" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_places_modtime BEFORE UPDATE ON "Places" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tags_modtime BEFORE UPDATE ON "Tags" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_placetags_modtime BEFORE UPDATE ON "PlaceTags" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_votes_modtime BEFORE UPDATE ON "Votes" FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();