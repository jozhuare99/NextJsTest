SELECT *
FROM category
LEFT JOIN billboard ON
category.billboardId = billboard.id 
WHERE category.storeId = 1
ORDER BY category.createdAt DESC;
