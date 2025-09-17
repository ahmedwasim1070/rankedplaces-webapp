-- src/db/sql/find_tags_by_radius.sql
SELECT t.id,
    t.name,
    COUNT(pt.*) AS tag_count
FROM "Tags" t
    JOIN "PlaceTags" pt ON pt.tag_id = t.id
    JOIN "Places" p ON pt.place_id = p.id
WHERE ST_DWithin(
        geography(p.geom),
        geography(ST_SetSRID(ST_MakePoint($1, $2), 4326)),
        $3
    )
GROUP BY t.id
ORDER BY tag_count DESC;