SELECT 
    orders.*, 
    orderitem.*, 
    product.* 
FROM 
    orders 
INNER JOIN 
    orderitem ON orders.id = orderitem.orderId 
INNER JOIN 
    product ON orderitem.productId = product.id 
WHERE 
    orders.storeId = 1 AND 
    orders.isPaid = false;