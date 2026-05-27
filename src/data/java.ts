import { Category } from './types';

export const javaData: Category = {
  id: 'java',
  title: 'Java',
  icon: '☕',
  color: '#f89820',
  gradient: 'linear-gradient(135deg, #f89820, #e76f00)',
  description: 'Java collections, generics, streams, multithreading & exceptions',
  sections: [
    {
      id: 'basics',
      title: 'Basics & Data Types',
      snippets: [
        { code: `// Primitive types
byte   b = 127;          // 8-bit
short  s = 32767;        // 16-bit
int    i = 2147483647;   // 32-bit
long   l = 100L;         // 64-bit
float  f = 3.14f;        // 32-bit
double d = 3.14;         // 64-bit
char   c = 'A';          // 16-bit Unicode
boolean flag = true;

// Wrapper classes
Integer x = 42;       // auto-boxing
int y = x;            // auto-unboxing
Integer.parseInt("42");
String.valueOf(42);
Integer.MAX_VALUE;    // 2147483647`, description: 'Primitive types and wrappers', language: 'java' },
        { code: `// String operations
String s = "Hello, World!";
s.length()              // 13
s.charAt(0)             // 'H'
s.substring(0, 5)       // "Hello"
s.toLowerCase()         // "hello, world!"
s.toUpperCase()
s.trim()                // remove whitespace
s.replace("Hello", "Hi")
s.contains("World")     // true
s.startsWith("Hello")   // true
s.split(", ")           // ["Hello", "World!"]
s.equals("Hello")       // true (use == only for identity)
s.equalsIgnoreCase("hello") // true

// StringBuilder (mutable, not thread-safe)
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" World");
sb.toString();`, description: 'String and StringBuilder', language: 'java' },
      ]
    },
    {
      id: 'collections',
      title: 'Collections Framework',
      snippets: [
        { code: `import java.util.*;

// ArrayList
List<Integer> list = new ArrayList<>();
list.add(1); list.add(2);
list.get(0);        // 1
list.set(0, 10);    // update
list.remove(0);     // by index
list.size();
Collections.sort(list);
Collections.reverse(list);

// LinkedList (also implements Deque)
LinkedList<String> ll = new LinkedList<>();
ll.addFirst("a");
ll.addLast("b");
ll.peekFirst();     // view without removing
ll.pollFirst();     // remove and return`, description: 'ArrayList and LinkedList', language: 'java' },
        { code: `// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("alice", 30);
map.get("alice");           // 30
map.getOrDefault("bob", 0); // 0
map.containsKey("alice");   // true
map.remove("alice");
map.putIfAbsent("bob", 25);
for (Map.Entry<String,Integer> e : map.entrySet()) {
    e.getKey(); e.getValue();
}

// TreeMap — sorted by key
TreeMap<String, Integer> tm = new TreeMap<>();
tm.firstKey(); tm.lastKey();

// LinkedHashMap — insertion order
LinkedHashMap<String, Integer> lhm = new LinkedHashMap<>();`, description: 'HashMap, TreeMap, LinkedHashMap', language: 'java' },
        { code: `// HashSet
Set<Integer> set = new HashSet<>();
set.add(1); set.add(2);
set.contains(1);   // true
set.remove(1);
set.size();

// TreeSet (sorted)
TreeSet<Integer> ts = new TreeSet<>();
ts.first(); ts.last();
ts.headSet(3);    // elements < 3
ts.tailSet(3);    // elements >= 3

// Stack / Queue
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1); stack.pop(); stack.peek();

Queue<Integer> queue = new LinkedList<>();
queue.offer(1); queue.poll(); queue.peek();

// PriorityQueue
PriorityQueue<Integer> pq = new PriorityQueue<>(); // min
PriorityQueue<Integer> maxPQ = new PriorityQueue<>(Collections.reverseOrder());`, description: 'Set, Stack, Queue, PriorityQueue', language: 'java' },
      ]
    },
    {
      id: 'generics',
      title: 'Generics',
      snippets: [
        { code: `// Generic class
class Pair<T, U> {
    T first; U second;
    Pair(T f, U s) { first=f; second=s; }
}
Pair<String, Integer> p = new Pair<>("a", 1);

// Generic method
<T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

// Wildcards
void printList(List<?> list) { }        // any type
void sumList(List<? extends Number> l)  // subtypes
void addNumbers(List<? super Integer> l) // supertypes

// Bounded type parameters
<T extends Number & Comparable<T>> T clamp(T val, T min, T max)`, description: 'Generic classes, methods, wildcards', language: 'java' },
      ]
    },
    {
      id: 'streams',
      title: 'Streams API (Java 8+)',
      snippets: [
        { code: `import java.util.stream.*;

List<Integer> nums = List.of(1,2,3,4,5,6);

// Intermediate operations (lazy)
nums.stream()
    .filter(n -> n % 2 == 0)   // [2,4,6]
    .map(n -> n * n)           // [4,16,36]
    .sorted()                  // sorted
    .distinct()                // no duplicates
    .limit(2)                  // first 2
    .skip(1)                   // skip 1

// Terminal operations (eager)
    .collect(Collectors.toList())
    .forEach(System.out::println)
    .count()
    .sum()               // IntStream only
    .min(Comparator.naturalOrder())
    .max(Comparator.naturalOrder())
    .anyMatch(n -> n > 3)    // true
    .allMatch(n -> n > 0)    // true
    .findFirst()`, description: 'Stream operations (filter, map, collect)', language: 'java' },
        { code: `// Collectors
List<String> names = List.of("Alice","Bob","Charlie");
Map<Integer, List<String>> byLength =
    names.stream()
         .collect(Collectors.groupingBy(String::length));

String joined = names.stream()
    .collect(Collectors.joining(", ", "[", "]"));
// "[Alice, Bob, Charlie]"

// flatMap
List<List<Integer>> nested = List.of(List.of(1,2), List.of(3,4));
nested.stream().flatMap(Collection::stream)
      .collect(Collectors.toList()); // [1,2,3,4]

// reduce
int sum = nums.stream().reduce(0, Integer::sum);`, description: 'Collectors, groupingBy, joining, flatMap', language: 'java' },
      ]
    },
    {
      id: 'multithreading',
      title: 'Multithreading',
      snippets: [
        { code: `// Creating threads
// 1. Extend Thread
class MyThread extends Thread {
    public void run() { System.out.println("Thread!"); }
}
new MyThread().start();

// 2. Implement Runnable (preferred)
Thread t = new Thread(() -> System.out.println("Lambda thread"));
t.start();

// Thread lifecycle
t.sleep(1000);  // sleep ms (throws InterruptedException)
t.join();       // wait for thread to finish
t.interrupt();  // request interruption
t.isAlive();    // check if running`, description: 'Thread creation methods', language: 'java' },
        { code: `// Synchronization
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
    public synchronized int getCount() { return count; }
}

// ReentrantLock
Lock lock = new ReentrantLock();
lock.lock();
try { /* critical section */ }
finally { lock.unlock(); }

// ExecutorService
ExecutorService exec = Executors.newFixedThreadPool(4);
exec.submit(() -> doWork());
exec.shutdown();
exec.awaitTermination(60, TimeUnit.SECONDS);

// volatile — ensures visibility
private volatile boolean running = true;`, description: 'Synchronization, locks, ExecutorService', language: 'java' },
      ]
    },
    {
      id: 'exceptions',
      title: 'Exceptions',
      snippets: [
        { code: `// Exception hierarchy
// Throwable
//   ├── Error (don't catch: OutOfMemoryError)
//   └── Exception
//       ├── RuntimeException (unchecked)
//       │   ├── NullPointerException
//       │   ├── ArrayIndexOutOfBoundsException
//       │   └── ClassCastException
//       └── IOException (checked — must handle)

try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println(e.getMessage());
} catch (Exception e) {
    e.printStackTrace();
} finally {
    // always runs
}

// Custom exception
class MyException extends RuntimeException {
    MyException(String msg) { super(msg); }
}
throw new MyException("Something went wrong");

// Multi-catch (Java 7+)
} catch (IOException | SQLException e) { }`, description: 'Exception hierarchy and handling', language: 'java' },
      ]
    },
    {
      id: 'optional-functional',
      title: 'Optional & Functional Interfaces',
      snippets: [
        { code: `// Optional (Java 8+)
Optional<String> opt = Optional.of("hello");
Optional<String> empty = Optional.empty();

opt.isPresent()         // true
opt.get()               // "hello" (throws if empty)
opt.orElse("default")   // "hello"
opt.orElseGet(() -> "computed")
opt.map(String::toUpperCase)  // Optional<"HELLO">
opt.filter(s -> s.length() > 3)

// Functional interfaces
Function<String, Integer> len = String::length;
Predicate<String> isEmpty = String::isEmpty;
Consumer<String> printer = System.out::println;
Supplier<String> supplier = () -> "hello";
BiFunction<Integer,Integer,Integer> add = Integer::sum;

// Method references
list.forEach(System.out::println);   // instance
list.stream().map(String::toUpperCase); // instance method`, description: 'Optional and functional interfaces', language: 'java' },
      ]
    },
  ]
};
