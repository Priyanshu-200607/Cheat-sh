import { Category } from './types';

export const sqlData: Category = {
  id: 'sql',
  title: 'SQL',
  icon: '🗄️',
  color: '#ff6b35',
  gradient: 'linear-gradient(135deg, #ff6b35, #c0392b)',
  description: 'SQL queries, JOINs, aggregations, indexes and transactions',
  sections: [
    {
      id: 'basics',
      title: 'Basic Queries',
      snippets: [
        { code: `-- SELECT basics
SELECT * FROM users;
SELECT name, age FROM users;
SELECT DISTINCT city FROM users;        -- unique values
SELECT name AS full_name FROM users;    -- alias

-- WHERE conditions
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE name IN ('Alice', 'Bob');
SELECT * FROM users WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM users WHERE name LIKE '%son'; -- ends with son
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;

-- ORDER BY and LIMIT
SELECT * FROM users ORDER BY age DESC;
SELECT * FROM users ORDER BY name ASC, age DESC;
SELECT * FROM users LIMIT 10 OFFSET 20; -- pagination`, description: 'SELECT, WHERE, ORDER BY, LIMIT', language: 'sql' },
        { code: `-- INSERT
INSERT INTO users (name, age, email)
VALUES ('Alice', 30, 'alice@example.com');

INSERT INTO users (name, age)
VALUES ('Bob', 25), ('Charlie', 35);    -- multiple rows

-- UPDATE
UPDATE users SET age = 31 WHERE name = 'Alice';
UPDATE users SET age = age + 1 WHERE city = 'NY';

-- DELETE
DELETE FROM users WHERE id = 5;
DELETE FROM users WHERE age < 18;

-- UPSERT (PostgreSQL)
INSERT INTO users (id, name) VALUES (1, 'Alice')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name;`, description: 'INSERT, UPDATE, DELETE, UPSERT', language: 'sql' },
      ]
    },
    {
      id: 'joins',
      title: 'JOINs',
      snippets: [
        { code: `-- INNER JOIN — only matching rows
SELECT u.name, o.product
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN — all from left + matching from right
SELECT u.name, o.product
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- users without orders: o.product is NULL

-- RIGHT JOIN — all from right + matching from left
SELECT u.name, o.product
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;

-- FULL OUTER JOIN — all rows from both
SELECT u.name, o.product
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;

-- SELF JOIN — join table to itself
SELECT a.name AS employee, b.name AS manager
FROM employees a
JOIN employees b ON a.manager_id = b.id;

-- CROSS JOIN — cartesian product
SELECT * FROM colors CROSS JOIN sizes;`, description: 'INNER, LEFT, RIGHT, FULL OUTER, SELF, CROSS JOIN', language: 'sql' },
      ]
    },
    {
      id: 'aggregation',
      title: 'Aggregation & GROUP BY',
      snippets: [
        { code: `-- Aggregate functions
SELECT COUNT(*) FROM users;
SELECT COUNT(DISTINCT city) FROM users;
SELECT SUM(amount) FROM orders;
SELECT AVG(age) FROM users;
SELECT MIN(age), MAX(age) FROM users;

-- GROUP BY
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city;

SELECT category, AVG(price) AS avg_price
FROM products
GROUP BY category
ORDER BY avg_price DESC;

-- HAVING (filter after GROUP BY)
SELECT city, COUNT(*) AS cnt
FROM users
GROUP BY city
HAVING COUNT(*) > 5;    -- cities with >5 users

-- GROUP BY + HAVING vs WHERE
-- WHERE filters rows BEFORE grouping
-- HAVING filters groups AFTER grouping`, description: 'GROUP BY, HAVING, aggregate functions', language: 'sql' },
      ]
    },
    {
      id: 'subqueries',
      title: 'Subqueries & CTEs',
      snippets: [
        { code: `-- Subquery in WHERE
SELECT * FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Subquery in FROM (derived table)
SELECT dept, avg_sal FROM (
    SELECT department AS dept, AVG(salary) AS avg_sal
    FROM employees
    GROUP BY department
) AS dept_avg
WHERE avg_sal > 50000;

-- Correlated subquery (runs for each row)
SELECT name FROM employees e
WHERE salary > (
    SELECT AVG(salary) FROM employees
    WHERE department = e.department
);

-- EXISTS / NOT EXISTS
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- CTE (Common Table Expression)
WITH top_users AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
    HAVING total > 1000
)
SELECT u.name, t.total
FROM users u
JOIN top_users t ON u.id = t.user_id;`, description: 'Subqueries, EXISTS, CTEs', language: 'sql' },
      ]
    },
    {
      id: 'window-functions',
      title: 'Window Functions',
      snippets: [
        { code: `-- Window functions (don't collapse rows)
SELECT
    name,
    salary,
    AVG(salary) OVER () AS avg_sal,         -- global avg
    RANK() OVER (ORDER BY salary DESC) AS rnk,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_num,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rnk,
    NTILE(4) OVER (ORDER BY salary DESC) AS quartile,
    LAG(salary) OVER (ORDER BY hire_date) AS prev_sal,
    LEAD(salary) OVER (ORDER BY hire_date) AS next_sal,
    SUM(salary) OVER (PARTITION BY dept) AS dept_total,
    salary - AVG(salary) OVER (PARTITION BY dept) AS diff
FROM employees;

-- PARTITION BY — separate window per group
SELECT dept, name, salary,
    RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS dept_rank
FROM employees;`, description: 'Window functions: RANK, ROW_NUMBER, LAG, LEAD', language: 'sql' },
      ]
    },
    {
      id: 'indexes',
      title: 'Indexes & Performance',
      snippets: [
        { code: `-- Create indexes
CREATE INDEX idx_users_email ON users(email);
CREATE UNIQUE INDEX idx_users_username ON users(username);
CREATE INDEX idx_orders_user_date ON orders(user_id, created_at);

-- Drop index
DROP INDEX idx_users_email;

-- View indexes (PostgreSQL)
SELECT * FROM pg_indexes WHERE tablename = 'users';

-- EXPLAIN — query execution plan
EXPLAIN SELECT * FROM users WHERE email = 'x@y.com';
EXPLAIN ANALYZE SELECT ...;  -- actually runs query

-- Index tips:
-- Index columns used in WHERE, JOIN, ORDER BY
-- Composite index: order matters (leftmost prefix rule)
-- Too many indexes slow down INSERT/UPDATE/DELETE
-- Covering index: includes all needed columns`, description: 'CREATE INDEX, EXPLAIN, performance tips', language: 'sql' },
      ]
    },
    {
      id: 'transactions',
      title: 'Transactions & ACID',
      snippets: [
        { code: `-- Transaction basics
BEGIN;                    -- or START TRANSACTION
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;                   -- saves changes

-- Rollback on error
BEGIN;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    -- Error occurs!
ROLLBACK;                 -- undoes all changes

-- SAVEPOINT (partial rollback)
BEGIN;
    INSERT INTO logs ...;
    SAVEPOINT sp1;
    INSERT INTO records ...;
    ROLLBACK TO sp1;  -- undo records, keep logs
COMMIT;

-- ACID properties:
-- Atomicity   → all or nothing
-- Consistency → valid state before & after
-- Isolation   → concurrent txns don't interfere
-- Durability  → committed data persists

-- Isolation levels (from least to most strict)
-- READ UNCOMMITTED → dirty reads possible
-- READ COMMITTED   → no dirty reads (default PG)
-- REPEATABLE READ  → no non-repeatable reads
-- SERIALIZABLE     → fully isolated (slowest)`, description: 'Transactions, ROLLBACK, SAVEPOINT, ACID', language: 'sql' },
      ]
    },
    {
      id: 'ddl',
      title: 'DDL — Schema Design',
      snippets: [
        { code: `-- CREATE TABLE
CREATE TABLE users (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(100) NOT NULL,
    email      VARCHAR(255) UNIQUE NOT NULL,
    age        INT CHECK (age >= 0 AND age <= 150),
    city       VARCHAR(100) DEFAULT 'Unknown',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Foreign key
CREATE TABLE orders (
    id      SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    amount  DECIMAL(10,2) NOT NULL
);

-- ALTER TABLE
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users DROP COLUMN phone;
ALTER TABLE users ALTER COLUMN name TYPE TEXT;
ALTER TABLE users RENAME COLUMN name TO full_name;

-- DROP TABLE
DROP TABLE IF EXISTS orders;
TRUNCATE TABLE logs;        -- faster than DELETE *`, description: 'CREATE, ALTER, DROP TABLE', language: 'sql' },
      ]
    },
  ]
};
