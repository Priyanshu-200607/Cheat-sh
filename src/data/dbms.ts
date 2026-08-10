import { Category } from './types';

export const dbmsData: Category = {
  id: 'dbms',
  title: 'Database Management Systems',
  icon: '🗄️',
  color: '#f29111',
  gradient: 'linear-gradient(135deg, #f29111, #b36b00)',
  description: 'Relational databases, SQL, NoSQL, Normalization, ACID properties, and indexing',
  sections: [
    {
      id: 'dbms-architecture',
      title: 'Database Architecture & ACID',
      snippets: [
        { code: `# Database Architecture
# 1-Tier: Client, server, and database all on same machine.
# 2-Tier: Client application directly communicates with database server.
# 3-Tier: Client communicates with application server, which communicates with database.
#
# Data Independence
# Logical Data Independence: Ability to change logical schema without changing external schema/apps.
# Physical Data Independence: Ability to change physical schema without changing logical schema.

# ACID Properties
# Atomicity: Transaction is a single, indivisible unit (All or Nothing).
# Consistency: Transaction takes database from one valid state to another.
# Isolation: Concurrent transactions do not interfere with each other.
# Durability: Once committed, changes are permanent and survive crashes.

# CAP Theorem (for distributed databases)
# A distributed system can only provide TWO of the following three:
# - Consistency: Every read receives the most recent write.
# - Availability: Every request receives a non-error response.
# - Partition Tolerance: System continues to operate despite network partitions.
# CA (RDBMS), CP (MongoDB, Redis), AP (Cassandra, DynamoDB)`, description: 'Architecture, ACID, Data Independence, CAP Theorem', language: 'python' }
      ]
    },
    {
      id: 'dbms-keys-normalization',
      title: 'Keys & Normalization',
      snippets: [
        { code: `# Database Keys
# Super Key: Set of one or more attributes that uniquely identifies a row.
# Candidate Key: Minimal super key (no redundant attributes).
# Primary Key: Chosen from candidate keys to uniquely identify records. (Cannot be NULL).
# Alternate Key: Candidate keys that are not selected as the primary key.
# Foreign Key: Attribute(s) that refers to primary key of another table. Maintains referential integrity.
# Composite Key: Primary key composed of multiple attributes.

# Normalization Forms
# Process of organizing data to minimize redundancy and dependency.
#
# 1NF (First Normal Form)
# - No multi-valued attributes (all values must be atomic).
# - Each column must have unique name.
#
# 2NF (Second Normal Form)
# - Must be in 1NF.
# - No partial dependency (non-prime attribute shouldn't depend on part of a composite primary key).
#
# 3NF (Third Normal Form)
# - Must be in 2NF.
# - No transitive dependency (non-prime attribute shouldn't depend on another non-prime attribute).
#
# BCNF (Boyce-Codd Normal Form)
# - Stricter than 3NF.
# - For every functional dependency X -> Y, X must be a super key.`, description: 'Keys (Primary, Foreign, etc.) and Normal Forms (1NF to BCNF)', language: 'python' }
      ]
    },
    {
      id: 'dbms-sql-commands',
      title: 'SQL Commands & Joins',
      snippets: [
        { code: `-- SQL Command Categories

-- 1. DDL (Data Definition Language): Defines schema
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));
ALTER TABLE users ADD email VARCHAR(100);
DROP TABLE users;
TRUNCATE TABLE users; -- Removes all rows, keeps structure

-- 2. DML (Data Manipulation Language): Manipulates data
INSERT INTO users (id, name) VALUES (1, 'Alice');
UPDATE users SET name = 'Bob' WHERE id = 1;
DELETE FROM users WHERE id = 1;

-- 3. DCL (Data Control Language): Controls access
GRANT SELECT ON users TO readonly_user;
REVOKE SELECT ON users FROM readonly_user;

-- 4. TCL (Transaction Control Language): Manages transactions
START TRANSACTION;
COMMIT;
ROLLBACK;
SAVEPOINT sp1;

-- SQL Joins
-- INNER JOIN: Returns matching rows in both tables.
-- LEFT JOIN: Returns all rows from left table, and matching rows from right.
-- RIGHT JOIN: Returns all rows from right table, and matching rows from left.
-- FULL OUTER JOIN: Returns all rows when there is a match in either table.
-- CROSS JOIN: Cartesian product of both tables.
-- SELF JOIN: A regular join, but the table is joined with itself.`, description: 'DDL, DML, DCL, TCL and SQL Joins', language: 'sql' }
      ]
    },
    {
      id: 'dbms-transactions-concurrency',
      title: 'Transactions & Concurrency Control',
      snippets: [
        { code: `# Transaction States
# Active -> Partially Committed -> Committed
#         \\-> Failed -> Aborted

# Concurrency Problems
# Dirty Read: Reading uncommitted data from another transaction.
# Non-repeatable Read: Reading same row twice gets different data (modified by another).
# Phantom Read: Reading set of rows gets different results (new rows inserted by another).
# Lost Update: Two transactions update same data, one update is overwritten.

# Isolation Levels (Trade-off: consistency vs performance)
# 1. Read Uncommitted: Allows dirty reads. Fastest.
# 2. Read Committed: Prevents dirty reads.
# 3. Repeatable Read: Prevents dirty and non-repeatable reads.
# 4. Serializable: Prevents all (dirty, non-repeatable, phantom). Slowest.

# Concurrency Control Protocols
# 1. Lock-based Protocols
# - Shared Lock (S): For reading.
# - Exclusive Lock (X): For writing.
# 2PL (Two-Phase Locking):
# - Growing Phase: Acquire locks, release none.
# - Shrinking Phase: Release locks, acquire none.
# - Guarantees serializability, but can cause deadlocks.
#
# 2. Timestamp Ordering
# - Each transaction gets a unique timestamp.
# - Read/Write timestamps maintained for each data item.
# - Ensures serializability without locks.
#
# 3. MVCC (Multi-Version Concurrency Control)
# - Readers don't block writers, writers don't block readers.
# - Each write creates a new version of the data item.`, description: 'Transaction states, Isolation levels, 2PL, MVCC', language: 'python' }
      ]
    },
    {
      id: 'dbms-indexing',
      title: 'Indexing & Hashing',
      snippets: [
        { code: `# Indexing Concepts
# Purpose: Speed up data retrieval at the cost of slower writes and more storage.

# Types of Indexes
# 1. Clustered Index
# - Sorts and stores the data rows in the table based on their key values.
# - Only ONE clustered index per table (usually Primary Key).
# - Leaf nodes contain the actual data.
# - Faster for data retrieval.

# 2. Non-Clustered Index
# - Contains the index key values and row locators (pointers to actual data).
# - Can have MULTIPLE non-clustered indexes per table.
# - Leaf nodes contain pointers.

# Data Structures for Indexing
# B-Tree (Balanced Tree)
# - General purpose search tree. Data can be stored in internal and leaf nodes.
# - Good for exact match queries.

# B+ Tree
# - Advanced B-Tree where data is stored ONLY in leaf nodes.
# - Internal nodes just contain keys for routing.
# - Leaf nodes are linked as a linked list (great for range queries).
# - Default index structure in most RDBMS.

# Hashing
# - Uses a hash function to map keys to buckets.
# - O(1) time complexity for exact match.
# - Terrible for range queries (e.g., age > 20).`, description: 'Clustered vs Non-clustered, B-Tree, B+ Tree, Hashing', language: 'python' }
      ]
    },
    {
      id: 'dbms-core-questions',
      title: 'Core Technical Questions',
      description: 'Fundamental DBMS interview questions',
      snippets: [
        { code: `Q1: What is the difference between TRUNCATE, DELETE, and DROP?
A1:
- DELETE: DML command, deletes rows one by one, logs each deletion, can be rolled back, uses WHERE clause.
- TRUNCATE: DDL command, deallocates entire pages of data, minimal logging, cannot be rolled back in most databases, no WHERE clause. Faster than DELETE.
- DROP: DDL command, completely removes the table schema and data from the database.

Q2: What is the difference between Primary Key and Unique Key?
A2:
- Primary Key: Identifies each row uniquely. Cannot accept NULL values. Only one PK per table. By default, creates a clustered index.
- Unique Key: Identifies row uniquely. Can accept ONE NULL value (in most RDBMS). Can have multiple unique keys per table. By default, creates non-clustered index.

Q3: What are triggers?
A3: A trigger is a special type of stored procedure that automatically runs when an event occurs in the database server. DML triggers run when a user tries to modify data through DML events (INSERT, UPDATE, DELETE).

Q4: Explain the CAP Theorem.
A4: In a distributed data store, it is impossible to simultaneously provide more than two out of the following three guarantees: Consistency (every read gets most recent write), Availability (every request receives a response), and Partition tolerance (system operates despite network failures).

Q5: What is a stored procedure?
A5: A prepared SQL code that you can save, so the code can be reused over and over again. It can take parameters, perform complex logic, and return multiple result sets. Speeds up execution as it's pre-compiled.`, description: 'DELETE vs TRUNCATE, PK vs Unique, Triggers, Stored Procedures', language: 'markdown' }
      ]
    }
  ]
};
