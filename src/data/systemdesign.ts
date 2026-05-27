import { Category } from './types';

export const systemDesignData: Category = {
  id: 'system-design',
  title: 'System Design',
  icon: '🏛️',
  color: '#1565c0',
  gradient: 'linear-gradient(135deg, #1565c0, #0d47a1)',
  description: 'Scalability, load balancing, caching, databases, and distributed systems',
  sections: [
    {
      id: 'fundamentals',
      title: 'Core Concepts',
      snippets: [
        { code: `# Scalability
# Vertical (Scale Up): more CPU/RAM to same machine
#   + Simple, no code change
#   - Hardware limits, single point of failure

# Horizontal (Scale Out): more machines
#   + Virtually unlimited, fault tolerant
#   - Complexity: state management, load balancing

# Latency vs Throughput
# Latency:    time for one request         (ms)
# Throughput: requests processed per unit  (req/s)

# Availability = Uptime / (Uptime + Downtime)
# 99%    → 3.65 days/year downtime
# 99.9%  → 8.76 hours/year
# 99.99% → 52.6 minutes/year
# 99.999%→ 5.26 minutes/year (five nines)

# SLA — Service Level Agreement
# SLO — Service Level Objective
# SLI — Service Level Indicator (metric)`, description: 'Scalability, availability, latency, throughput', language: 'python' },
        { code: `# CAP Theorem
# In a distributed system, you can only guarantee 2 of 3:
#
# C — Consistency:    all nodes see same data
# A — Availability:  every request gets response
# P — Partition Tolerance: works despite network splits
#
# Network partitions ARE inevitable → must choose C or A
#
# CP systems: consistent + partition-tolerant
#   Examples: HBase, MongoDB (strong), ZooKeeper
#   Trade-off: may reject requests during partition
#
# AP systems: available + partition-tolerant
#   Examples: DynamoDB, Cassandra, CouchDB
#   Trade-off: may return stale data (eventual consistency)
#
# CA: only works without network partitions (impractical)
#   Examples: RDBMS on single node`, description: 'CAP theorem with examples', language: 'python' },
        { code: `# PACELC Theorem (extends CAP)
# If Partition → choose Consistency or Availability
# Else (no partition) → choose Latency or Consistency
#
# Consistency models (weakest → strongest)
# 1. Eventual Consistency  — will converge (DNS, S3)
# 2. Monotonic Read        — no going back in time
# 3. Read-your-writes      — see own writes
# 4. Session Consistency   — within session guarantees
# 5. Causal Consistency    — cause before effect
# 6. Linearizability       — real-time ordering
# 7. Strong Consistency    — all see latest (slowest)`, description: 'PACELC and consistency models', language: 'python' },
      ]
    },
    {
      id: 'load-balancing',
      title: 'Load Balancing',
      snippets: [
        { code: `# Load Balancing Algorithms
# Round Robin        — each server in turn
# Weighted RR        — more powerful servers get more
# Least Connections  — send to least busy server
# Least Response Time— send to fastest server
# IP Hash            — same client → same server
# Random             — random selection
# Consistent Hashing — minimal redistribution on scale

# Types of Load Balancers
# L4 (Transport Layer) — routes by IP/TCP/UDP
#   Fast, no content inspection
# L7 (Application Layer) — routes by HTTP headers, URL, cookies
#   Can do SSL termination, content-based routing

# Health Checks
# Passive: detect failures from request errors
# Active: regularly ping servers, remove unhealthy ones

# High Availability (HA)
# Active-Active: all LBs serve traffic
# Active-Passive: standby LB takes over on failure
# Multiple LBs prevent single point of failure`, description: 'Load balancing algorithms and types', language: 'python' },
      ]
    },
    {
      id: 'caching',
      title: 'Caching',
      snippets: [
        { code: `# Cache Strategies
# 1. Cache-Aside (Lazy Loading) — most common
#    Read: check cache → miss → load DB → update cache
#    Write: update DB → invalidate cache
#    Pro: only cache what's needed
#    Con: cache miss is slow (3 round trips)

# 2. Write-Through
#    Write: update cache + DB synchronously
#    Pro: no stale data
#    Con: every write hits DB (slower)

# 3. Write-Behind (Write-Back)
#    Write: update cache → async write to DB
#    Pro: fast writes
#    Con: data loss risk if cache crashes

# 4. Read-Through
#    Cache handles DB reads automatically
#    App only talks to cache

# Cache Eviction Policies
# LRU  — Least Recently Used (most common)
# LFU  — Least Frequently Used
# FIFO — First In, First Out
# TTL  — Time To Live (expire after duration)

# Cache Invalidation (hard problem)
# TTL-based, event-based, write-through, versioning

# Cache Technologies
# Redis   — in-memory, persistent, pub/sub, data structures
# Memcached — simpler, faster, no persistence
# CDN     — geographic cache for static assets`, description: 'Cache strategies, eviction, technologies', language: 'python' },
      ]
    },
    {
      id: 'databases',
      title: 'Database Design',
      snippets: [
        { code: `# SQL vs NoSQL
# SQL (Relational)
# - Structured schema, ACID transactions
# - JOINs, complex queries
# - Vertical scaling (primarily)
# - Use when: consistency needed, complex queries
# - Examples: PostgreSQL, MySQL, SQLite

# NoSQL types:
# Document    — flexible JSON docs (MongoDB, CouchDB)
# Key-Value   — fast lookups (Redis, DynamoDB)
# Wide-Column — rows with dynamic columns (Cassandra, HBase)
# Graph       — relationships (Neo4j, Amazon Neptune)
# Time-Series — time-stamped data (InfluxDB, TimescaleDB)

# Choose NoSQL when:
# - Huge scale (millions of writes/sec)
# - Schema changes frequently
# - Horizontal scaling needed
# - Non-relational data (social graphs, IoT)`, description: 'SQL vs NoSQL: when to use each', language: 'python' },
        { code: `# Database Replication
# Primary-Replica (Master-Slave)
# - Primary: handles writes
# - Replicas: handle reads (scale reads)
# - Replication lag: eventual consistency
# - Failover: promote replica on primary failure

# Multi-Primary (Multi-Master)
# - Multiple nodes accept writes
# - Conflict resolution needed
# - Higher availability, more complex

# Database Sharding (horizontal partitioning)
# Split data across multiple DBs by shard key
# Strategies:
# - Range sharding: by value range (hot spots!)
# - Hash sharding: hash(key) % num_shards
# - Directory sharding: lookup table for mapping
# Challenges: cross-shard queries, resharding, hotspots

# Normalization vs Denormalization
# Normalize  — reduce redundancy, more JOINs (transactional)
# Denormalize — duplicate data, fewer JOINs (analytics/read-heavy)

# Connection Pooling
# Reuse DB connections instead of creating new ones
# Tools: PgBouncer, HikariCP, SQLAlchemy pool`, description: 'Replication, sharding, normalization', language: 'python' },
      ]
    },
    {
      id: 'message-queues',
      title: 'Message Queues & Event-Driven',
      snippets: [
        { code: `# Why Message Queues?
# - Decouple producer from consumer
# - Handle traffic spikes (backpressure)
# - Async processing
# - Guaranteed delivery

# Messaging patterns
# Point-to-Point (Queue)
#   Producer → Queue → Consumer (one consumer)
#
# Publish-Subscribe (Topic)
#   Producer → Topic → multiple Consumers
#
# Request-Reply
#   Service A → Queue → Service B → Reply Queue → A

# Popular Systems
# Kafka    — high throughput, log-based, replay, retention
#            use case: event streaming, audit log, analytics
# RabbitMQ — traditional MQ, flexible routing, low latency
#            use case: task queues, RPC
# SQS      — AWS managed queue, simple, auto-scaling
# Redis Pub/Sub — lightweight, no persistence

# Event Sourcing
# Store events not state; rebuild state from events
# Pros: audit trail, time travel, replay
# Cons: complex, eventual consistency

# CQRS (Command Query Responsibility Segregation)
# Separate write model (Command) from read model (Query)
# Works well with Event Sourcing`, description: 'Message queues, Kafka, RabbitMQ, CQRS', language: 'python' },
      ]
    },
    {
      id: 'microservices',
      title: 'Microservices',
      snippets: [
        { code: `# Microservices vs Monolith
# Monolith: single deployable unit
#   + Simple dev, deploy, test
#   - Scaling, tech lock-in, big codebase
#
# Microservices: each feature is a separate service
#   + Independent deploy/scale, polyglot, fault isolation
#   - Network latency, distributed transactions, ops complexity

# Communication patterns
# Sync:  REST (HTTP/JSON), gRPC (protobuf, fast)
# Async: Message queues (Kafka, RabbitMQ)

# Service Discovery
# Client-side: client queries registry (Consul, Eureka)
# Server-side: load balancer handles routing

# API Gateway
# Single entry point for all clients
# Features: auth, rate limiting, SSL termination,
#           request routing, caching, logging

# Circuit Breaker pattern
# CLOSED → allow requests
# OPEN   → fast-fail without calling service
# HALF-OPEN → allow test request
# Libraries: Hystrix, Resilience4j

# Distributed tracing: Jaeger, Zipkin
# Service mesh: Istio, Linkerd (sidecar proxies)`, description: 'Microservices patterns, API gateway, circuit breaker', language: 'python' },
      ]
    },
    {
      id: 'cdn-storage',
      title: 'CDN & Storage',
      snippets: [
        { code: `# CDN (Content Delivery Network)
# - Serve static assets from geographically close servers
# - Reduces latency, origin server load
# - Types: Push CDN (pre-upload) vs Pull CDN (lazy)
# - Examples: CloudFront, Cloudflare, Akamai, Fastly
# - Use for: images, videos, JS/CSS, APIs (edge computing)

# Object Storage vs Block Storage vs File Storage
# Object: flat namespace, S3-compatible, unlimited scale
#         Best for: images, videos, backups, data lake
#         Examples: AWS S3, GCS, Azure Blob
#
# Block:  raw storage volumes, like hard drives
#         Best for: databases, VMs, low-latency I/O
#         Examples: AWS EBS, GCP Persistent Disk
#
# File:   hierarchical, mounted as network drive
#         Best for: shared file systems, NFS
#         Examples: AWS EFS, Google Filestore

# URL Shortener design example
# Write: encode(id) → short URL; store in DB+cache
# Read: lookup in cache → DB → redirect`, description: 'CDN, object/block/file storage', language: 'python' },
      ]
    },
  ]
};
