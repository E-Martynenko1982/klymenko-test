//test-3
SELECT
o.customer_id,
  MAX(o.order_date) AS last_order_date
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY o.customer_id
HAVING COUNT(DISTINCT oi.product_id) = (SELECT COUNT(*) FROM products);

//test-4
SELECT
c.customer_name,
  COUNT(o.order_id) AS total_orders,
    Round(SUM(o.order_total:: NUMERIC), 2) AS total_spent,
      ROUND(AVG(o.order_total:: NUMERIC), 2) AS average_order_value
FROM "Test-4".customers c
JOIN "Test-4".orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.customer_name
ORDER BY total_spent DESC;