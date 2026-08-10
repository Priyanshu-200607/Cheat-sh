import { Category } from './types';

export const dbmsData: Category = {
  id: 'dbms',
  title: 'DBMS',
  icon: '🗄️',
  color: '#f29111',
  gradient: 'linear-gradient(135deg, #f29111, #b36b00)',
  description: 'Database Management Systems, SQL, NoSQL, Normalization, ACID',
  sections: [
    {
      id: 'dbms-theoretical-concepts',
      title: 'Theoretical Concepts & Algorithms',
      description: 'Core concepts and algorithms in DBMS',
      snippets: [
        { code: `# 1. ACID Properties
# - Atomicity: All or nothing execution.
# - Consistency: Database transitions from one valid state to another.
# - Isolation: Concurrent transactions don't interfere.
# - Durability: Committed transactions persist even after failure.

# 2. Normalization Forms
# - 1NF: Atomic values, no repeating groups.
# - 2NF: 1NF + no partial dependency.
# - 3NF: 2NF + no transitive dependency.
# - BCNF: 3NF + every determinant is a candidate key.

# 3. Concurrency Control
# - 2PL (Two-Phase Locking): Growing phase (acquire locks), Shrinking phase (release locks). Ensures serializability but can cause deadlock.
# - Timestamp Ordering: Uses timestamps to order transactions.
# - MVCC (Multi-Version Concurrency Control): Keeps multiple versions of data to avoid read-write locks.

# 4. Indexing & Hashing
# - B-Tree & B+ Tree: Balanced search trees optimized for disk access. B+ tree stores all data at leaves.
# - Hash Indexing: O(1) exact match queries, poor for range queries.`, description: 'ACID, Normalization, Concurrency, Indexing', language: 'python' }
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

Q2: What are joins and what are the different types?
A2: Joins combine rows from two or more tables based on a related column.
- INNER JOIN: Returns records with matching values in both tables.
- LEFT (OUTER) JOIN: Returns all records from the left table, and matched records from the right table.
- RIGHT (OUTER) JOIN: Returns all records from the right table, and matched records from the left table.
- FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table.
- CROSS JOIN: Cartesian product of both tables.

Q3: Explain clustered vs non-clustered index.
A3:
- Clustered Index: Determines the physical order of data in a table. Only one per table (usually Primary Key). Leaf nodes contain actual data.
- Non-Clustered Index: Logical order doesn't match physical order. Leaf nodes contain pointers to actual data. Can have multiple per table. Slower than clustered for fetching actual data.`, description: 'DELETE vs TRUNCATE, Joins, Indexes', language: 'markdown' }
      ]
    }
  ]
};
