SET STATISTICS TIME ON;
SELECT 
    collaborators.id AS id,
    collaborators.name AS name,
    subdivisions.name AS sub_name,
    subdivisions.id AS sub_id,
    (SELECT COUNT(*) FROM subdivisions WHERE parent_id = subdivisions.id) AS sub_level,
    COUNT(collaborators.id) OVER (PARTITION BY subdivisions.id) AS colls_count
FROM collaborators
INNER JOIN subdivisions ON collaborators.subdivision_id = subdivisions.id
WHERE collaborators.age < 40
AND subdivisions.parent_id IN (SELECT subdivision_id FROM collaborators WHERE id = 710253)
AND subdivisions.id NOT IN (100055, 100059)
ORDER BY sub_level;
SET STATISTICS TIME OFF;