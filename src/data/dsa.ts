import { Category } from './types';

export const dsaData: Category = {
  id: 'dsa',
  title: 'Data Structures',
  icon: '🌳',
  color: '#00897b',
  gradient: 'linear-gradient(135deg, #00897b, #004d40)',
  description: 'Arrays, Linked Lists, Stacks, Trees, Graphs, and more with Big-O',
  sections: [
    {
      id: 'complexity',
      title: 'Big-O Complexity',
      snippets: [
        { code: `# Time Complexity (best to worst)
O(1)       → Constant  — array access, hash lookup
O(log n)   → Log       — binary search, balanced BST
O(n)       → Linear    — linear search, traversal
O(n log n) → Linearithmic — merge sort, heap sort
O(n²)      → Quadratic — bubble/insertion/selection sort
O(2ⁿ)      → Exponential — recursive fibonacci, subsets
O(n!)      → Factorial  — permutations

# Space Complexity
O(1)   → iterative solutions
O(n)   → storing n items, recursion depth O(n)
O(n²)  → 2D matrix of size n×n`, description: 'Big-O time and space complexity', language: 'python' },
        { code: `# Common DS Operations — Time Complexity
# Structure     | Access | Search | Insert | Delete
# Array         | O(1)   | O(n)   | O(n)   | O(n)
# Linked List   | O(n)   | O(n)   | O(1)*  | O(1)*
# Hash Table    | -      | O(1)   | O(1)   | O(1)
# BST (bal.)    | O(logn)| O(logn)| O(logn)| O(logn)
# Heap          | O(1)** | O(n)   | O(logn)| O(logn)
# Stack/Queue   | O(n)   | O(n)   | O(1)   | O(1)
# * at known position  ** only min/max`, description: 'Data structure operation complexities', language: 'python' },
      ]
    },
    {
      id: 'arrays',
      title: 'Arrays',
      snippets: [
        { code: `# Two-pointer technique
def two_sum_sorted(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target: return [l, r]
        elif s < target: l += 1
        else: r -= 1
    return []

# Sliding window (max sum subarray of size k)
def max_sum(arr, k):
    window = sum(arr[:k])
    best = window
    for i in range(k, len(arr)):
        window += arr[i] - arr[i-k]
        best = max(best, window)
    return best

# Prefix sum
prefix = [0] * (len(arr)+1)
for i, v in enumerate(arr):
    prefix[i+1] = prefix[i] + v
# Range sum [l..r]: prefix[r+1] - prefix[l]`, description: 'Two pointers, sliding window, prefix sum', language: 'python' },
      ]
    },
    {
      id: 'linked-list',
      title: 'Linked List',
      snippets: [
        { code: `class Node:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class LinkedList:
    def __init__(self): self.head = None

    def append(self, val):
        if not self.head:
            self.head = Node(val); return
        cur = self.head
        while cur.next: cur = cur.next
        cur.next = Node(val)

    def to_list(self):
        res, cur = [], self.head
        while cur: res.append(cur.val); cur = cur.next
        return res

# Reverse a linked list
def reverse(head):
    prev, cur = None, head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    return prev  # new head

# Detect cycle (Floyd's algorithm)
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast: return True
    return False`, description: 'LinkedList class, reverse, cycle detection', language: 'python' },
      ]
    },
    {
      id: 'stack-queue',
      title: 'Stack & Queue',
      snippets: [
        { code: `from collections import deque

# Stack (LIFO)
stack = []
stack.append(1)   # push
stack.pop()       # pop
stack[-1]         # peek

# Queue (FIFO) — use deque for O(1)
q = deque()
q.append(1)       # enqueue
q.popleft()       # dequeue O(1)
q[0]              # peek front

# Monotonic Stack (find next greater element)
def next_greater(arr):
    result = [-1] * len(arr)
    stack = []  # holds indices
    for i, v in enumerate(arr):
        while stack and arr[stack[-1]] < v:
            result[stack.pop()] = v
        stack.append(i)
    return result

# Valid parentheses
def is_valid(s):
    stack, pairs = [], {')':'(', ']':'[', '}':'{'}
    for c in s:
        if c in "([{": stack.append(c)
        elif not stack or stack[-1] != pairs[c]:
            return False
        else: stack.pop()
    return not stack`, description: 'Stack, Queue, monotonic stack, valid parens', language: 'python' },
      ]
    },
    {
      id: 'binary-tree',
      title: 'Binary Tree & BST',
      snippets: [
        { code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Tree traversals
def inorder(root):   # Left → Root → Right (BST sorted)
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

def preorder(root):  # Root → Left → Right
    if not root: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

def postorder(root): # Left → Right → Root
    if not root: return []
    return postorder(root.left) + postorder(root.right) + [root.val]

# Level-order (BFS)
from collections import deque
def level_order(root):
    if not root: return []
    q, res = deque([root]), []
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left:  q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`, description: 'Tree traversals (in/pre/post/level-order)', language: 'python' },
        { code: `# Tree properties
def height(root):
    if not root: return 0
    return 1 + max(height(root.left), height(root.right))

def is_balanced(root):
    def check(node):
        if not node: return 0
        l, r = check(node.left), check(node.right)
        if l == -1 or r == -1 or abs(l-r) > 1: return -1
        return 1 + max(l, r)
    return check(root) != -1

# BST operations
def search(root, val):
    if not root or root.val == val: return root
    if val < root.val: return search(root.left, val)
    return search(root.right, val)

def insert(root, val):
    if not root: return TreeNode(val)
    if val < root.val: root.left = insert(root.left, val)
    else: root.right = insert(root.right, val)
    return root

# LCA (Lowest Common Ancestor)
def lca(root, p, q):
    if not root or root == p or root == q: return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    return root if left and right else left or right`, description: 'BST search/insert, height, balanced check, LCA', language: 'python' },
      ]
    },
    {
      id: 'heap',
      title: 'Heap (Priority Queue)',
      snippets: [
        { code: `import heapq

# Min-heap (default in Python)
heap = [3, 1, 4, 1, 5, 9]
heapq.heapify(heap)          # O(n)
heapq.heappush(heap, 2)      # push O(log n)
heapq.heappop(heap)          # pop min O(log n)
heap[0]                      # peek min O(1)

# Max-heap — negate values
max_heap = [-x for x in [3,1,4]]
heapq.heapify(max_heap)
-heapq.heappop(max_heap)    # get actual max

# K largest elements
heapq.nlargest(3, [1,5,2,8,4])  # [8,5,4]
heapq.nsmallest(3, [1,5,2,8,4]) # [1,2,4]

# Top K frequent elements
from collections import Counter
def top_k(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count, key=count.get)`, description: 'Heap operations and top-K problems', language: 'python' },
      ]
    },
    {
      id: 'hash-map',
      title: 'Hash Map Patterns',
      snippets: [
        { code: `from collections import Counter, defaultdict

# Frequency count
Counter([1,1,2,3])          # Counter({1:2, 2:1, 3:1})
Counter("hello")            # Counter({'l':2,'h':1,...})
counter.most_common(2)      # top 2

# defaultdict (no KeyError)
graph = defaultdict(list)
graph['a'].append('b')      # auto-creates empty list

# Two-sum using hash map O(n)
def two_sum(nums, target):
    seen = {}
    for i, n in enumerate(nums):
        if target - n in seen:
            return [seen[target-n], i]
        seen[n] = i

# Anagram check
def is_anagram(s, t):
    return Counter(s) == Counter(t)

# Group anagrams
def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        key = tuple(sorted(s))
        groups[key].append(s)
    return list(groups.values())`, description: 'Hash map patterns for interview problems', language: 'python' },
      ]
    },
    {
      id: 'graph',
      title: 'Graphs',
      snippets: [
        { code: `from collections import deque

# Graph representations
# Adjacency list (most common)
graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D', 'E'],
    'D': [],
    'E': []
}

# BFS — shortest path in unweighted graph
def bfs(graph, start):
    visited = set([start])
    q = deque([start])
    order = []
    while q:
        node = q.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                q.append(neighbor)
    return order

# DFS — iterative
def dfs(graph, start):
    visited = set()
    stack = [start]
    order = []
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            stack.extend(reversed(graph[node]))
    return order`, description: 'Graph BFS and DFS', language: 'python' },
        { code: `# DFS — recursive (with cycle detection)
def dfs_recursive(graph, node, visited=None):
    if visited is None: visited = set()
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

# Topological Sort (DAG only)
def topo_sort(graph):
    visited, result = set(), []
    def dfs(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                dfs(neighbor)
        result.append(node)  # post-order
    for node in graph:
        if node not in visited: dfs(node)
    return result[::-1]

# Detect cycle in directed graph
def has_cycle(graph):
    white, gray, black = set(graph), set(), set()
    def dfs(node):
        gray.add(node); white.discard(node)
        for nb in graph[node]:
            if nb in gray: return True
            if nb in white and dfs(nb): return True
        gray.discard(node); black.add(node)
        return False
    return any(dfs(n) for n in list(white))`, description: 'Topological sort and cycle detection', language: 'python' },
      ]
    },
    {
      id: 'dynamic-programming',
      title: 'Dynamic Programming',
      snippets: [
        { code: `# DP Patterns

# 1. Memoization (top-down)
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

# 2. Tabulation (bottom-up)
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n+1)
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# 3. Longest Common Subsequence
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# 4. 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(capacity+1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w],
                    values[i-1] + dp[i-1][w-weights[i-1]])
    return dp[n][capacity]`, description: 'DP: memoization, LCS, knapsack', language: 'python' },
        { code: `# 5. Coin Change (min coins)
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] = min(dp[i], dp[i-coin]+1)
    return dp[amount] if dp[amount] != float('inf') else -1

# 6. Longest Increasing Subsequence
def lis(nums):
    dp = [1] * len(nums)
    for i in range(1, len(nums)):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j]+1)
    return max(dp)

# 7. House Robber
def rob(houses):
    prev2, prev1 = 0, 0
    for h in houses:
        prev2, prev1 = prev1, max(prev1, prev2+h)
    return prev1`, description: 'DP: coin change, LIS, house robber', language: 'python' },
      ]
    },
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      snippets: [
        { code: `# Merge Sort — O(n log n), stable
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(l, r):
    res, i, j = [], 0, 0
    while i < len(l) and j < len(r):
        if l[i] <= r[j]: res.append(l[i]); i += 1
        else: res.append(r[j]); j += 1
    return res + l[i:] + r[j:]

# Quick Sort — O(n log n) avg, O(n²) worst
def quick_sort(arr, lo=0, hi=None):
    if hi is None: hi = len(arr)-1
    if lo < hi:
        p = partition(arr, lo, hi)
        quick_sort(arr, lo, p-1)
        quick_sort(arr, p+1, hi)

def partition(arr, lo, hi):
    pivot = arr[hi]
    i = lo - 1
    for j in range(lo, hi):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[hi] = arr[hi], arr[i+1]
    return i + 1

# Binary Search — O(log n)
def binary_search(arr, target):
    lo, hi = 0, len(arr)-1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1`, description: 'Merge sort, quick sort, binary search', language: 'python' },
      ]
    },
  ]
};
