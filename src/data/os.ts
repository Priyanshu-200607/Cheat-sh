import { Category } from './types';

export const osData: Category = {
  id: 'os',
  title: 'Operating Systems',
  icon: '🖥️',
  color: '#546e7a',
  gradient: 'linear-gradient(135deg, #546e7a, #263238)',
  description: 'Processes, threads, scheduling, memory management, and deadlocks',
  sections: [
    {
      id: 'processes-threads',
      title: 'Processes & Threads',
      snippets: [
        { code: `# Process vs Thread comparison
# ─────────────────────────────────────────
# Feature        | Process          | Thread
# Memory         | Separate         | Shared (heap)
# Communication  | IPC (slow)       | Shared memory (fast)
# Creation       | Expensive        | Lightweight
# Crash effect   | Isolated         | Crashes whole process
# Context switch | Heavy            | Light
# ─────────────────────────────────────────

# Process states
# NEW → READY → RUNNING → WAITING → TERMINATED
#                      ↓         ↑
#               (I/O or event) (I/O done)

# PCB — Process Control Block contains:
# - PID, process state, CPU registers
# - Program counter, memory limits
# - List of open files, I/O info
# - Scheduling info (priority, CPU time)`, description: 'Process vs Thread, PCB, process states', language: 'python' },
        { code: `# Concurrency issues
# 1. Race Condition — output depends on execution order
#    Fix: mutex/lock, atomic operations

# 2. Deadlock — circular waiting
#    Conditions (all must hold):
#    - Mutual Exclusion
#    - Hold and Wait
#    - No Preemption
#    - Circular Wait

# 3. Starvation — process waits indefinitely
#    Fix: aging (increase priority over time)

# 4. Livelock — processes keep changing state
#    but make no progress (like deadlock in motion)

# Critical Section Solution requirements:
# - Mutual Exclusion: only one process at a time
# - Progress: no process is blocked unnecessarily
# - Bounded Waiting: finite wait time guaranteed`, description: 'Race condition, deadlock, starvation, livelock', language: 'python' },
      ]
    },
    {
      id: 'scheduling',
      title: 'CPU Scheduling Algorithms',
      snippets: [
        { code: `# Scheduling Algorithms
# 
# 1. FCFS (First Come First Served)
#    - Non-preemptive, simple
#    - Convoy effect (short jobs wait for long ones)
#
# 2. SJF (Shortest Job First)
#    - Non-preemptive, optimal average waiting time
#    - Requires knowing burst time in advance
#    - Starvation possible for long processes
#
# 3. SRTF (Shortest Remaining Time First)
#    - Preemptive version of SJF
#    - Optimal average turnaround time
#
# 4. Round Robin (RR)
#    - Each process gets a time quantum (q)
#    - Fair, good for time-sharing systems
#    - Higher q → FCFS; Lower q → more overhead
#
# 5. Priority Scheduling
#    - Each process has a priority
#    - Preemptive or non-preemptive
#    - Starvation → fixed by aging
#
# 6. Multilevel Queue
#    - Different queues for different process types
#    - System > Interactive > Batch

# Metrics:
# Waiting time      = start_time - arrival_time
# Turnaround time   = completion - arrival_time
# Response time     = first_response - arrival_time
# CPU utilization   = (busy time / total time) × 100`, description: 'CPU scheduling algorithms and metrics', language: 'python' },
      ]
    },
    {
      id: 'memory',
      title: 'Memory Management',
      snippets: [
        { code: `# Memory Hierarchy (fastest → slowest)
# L1 Cache → L2 Cache → L3 Cache → RAM → SSD → HDD

# Virtual Memory concepts
# - Each process has its own virtual address space
# - MMU translates virtual → physical addresses
# - Page: fixed-size block (typically 4KB)
# - Frame: physical memory block (same size as page)
# - Page Table: maps virtual pages to physical frames

# Paging
# - No external fragmentation
# - Internal fragmentation (wasted space in last page)
# - TLB (Translation Lookaside Buffer) caches page table

# Segmentation
# - Divides memory into variable-size segments
# - External fragmentation possible
# - Each segment: code, data, stack, heap

# Page Replacement Algorithms
# FIFO    — replace oldest page
# LRU     — replace least recently used (optimal in practice)
# Optimal — replace page not needed longest (theoretical)
# LFU     — replace least frequently used
# Clock   — approximation of LRU (second chance)

# Thrashing
# - Process spends more time paging than executing
# - Too many processes → not enough frames each
# - Fix: reduce degree of multiprogramming, use working set`, description: 'Virtual memory, paging, page replacement', language: 'python' },
        { code: `# Memory allocation strategies
# Fixed Partitioning — simple, internal fragmentation
# Dynamic Partitioning — external fragmentation
#
# Contiguous allocation algorithms:
# First Fit  — allocate first hole that fits (fast)
# Best Fit   — smallest hole that fits (least waste)
# Worst Fit  — largest hole (leaves big holes)
#
# Fragmentation types:
# Internal — wasted space within allocated block
# External — free space exists but not contiguous

# Stack vs Heap
# Stack: LIFO, auto-managed, local variables, fast
#        limited size, grows downward
# Heap: dynamic, manual/GC managed, objects
#       larger, can fragment, grows upward`, description: 'Memory allocation, fragmentation, stack vs heap', language: 'python' },
      ]
    },
    {
      id: 'synchronization',
      title: 'Synchronization Primitives',
      snippets: [
        { code: `# Mutex (Mutual Exclusion Lock)
# Binary semaphore — locked/unlocked
# acquire() / lock()  — blocks if locked
# release() / unlock() — unblocks waiting thread
# Used to protect critical sections

# Semaphore
# Integer counter, two atomic operations:
# wait(S) / P(S): S--; if S<0, block
# signal(S) / V(S): S++; wake one blocked thread
# Counting semaphore: allows N concurrent accesses
# Binary semaphore: N=1, works like mutex

# Monitor
# High-level synchronization construct
# Methods are mutually exclusive automatically
# Condition variables: wait(), signal(), broadcast()

# Condition Variable usage
# wait(mutex): releases mutex + sleeps
# signal(): wakes ONE waiting thread
# broadcast(): wakes ALL waiting threads

# Classic synchronization problems:
# 1. Producer-Consumer (Bounded Buffer)
# 2. Readers-Writers
# 3. Dining Philosophers
# 4. Sleeping Barber`, description: 'Mutex, semaphore, monitor, condition variables', language: 'python' },
      ]
    },
    {
      id: 'deadlock',
      title: 'Deadlock Handling',
      snippets: [
        { code: `# Deadlock: 4 necessary conditions (Coffman)
# 1. Mutual Exclusion — only one process uses resource
# 2. Hold and Wait    — holds one, waits for more
# 3. No Preemption    — can't force release
# 4. Circular Wait    — P1 waits P2 waits P3 waits P1

# Deadlock Prevention
# Break one of the 4 conditions:
# - Allow preemption of resources
# - Request all resources at once (no hold-and-wait)
# - Impose ordering on resources (no circular wait)

# Deadlock Avoidance — Banker's Algorithm
# Each process declares max resources needed
# OS only grants request if system stays in SAFE STATE
# Safe state: exists a sequence where all finish

# Deadlock Detection & Recovery
# Detection: resource allocation graph
#   - Cycle in graph with single-instance → deadlock
#   - Cycle detection algorithm O(n²)
# Recovery options:
#   - Kill all deadlocked processes (drastic)
#   - Kill one by one until cycle broken
#   - Preempt resources from selected process`, description: 'Deadlock conditions, prevention, avoidance, detection', language: 'python' },
      ]
    },
    {
      id: 'file-systems',
      title: 'File Systems',
      snippets: [
        { code: `# File System concepts
# Inode — metadata about file (not name/data)
#   - File size, permissions, timestamps
#   - Pointers to data blocks
#   - Hard links count

# File allocation methods
# Contiguous  — fast sequential access, fragmentation
# Linked      — no fragmentation, slow random access
# Indexed     — good random access, overhead for index

# Directory structures
# Single-level flat directory (simple, conflicts)
# Two-level (user directories)
# Tree-structured (common: Unix/Windows)
# Acyclic graph (hard/soft links)

# Linux file permissions
# drwxr-xr-x  →  type | owner | group | others
# d = directory, - = file, l = symlink
# r=4 (read), w=2 (write), x=1 (execute)
# chmod 755 file  →  rwxr-xr-x
# chmod 644 file  →  rw-r--r--
# chown user:group file

# Important Linux directories
# /      — root filesystem
# /bin   — essential user binaries
# /etc   — configuration files
# /home  — user home directories
# /var   — variable data (logs)
# /tmp   — temporary files
# /proc  — process/system info (virtual FS)`, description: 'File systems, inodes, permissions, Linux dirs', language: 'python' },
      ]
    },
  ]
};
