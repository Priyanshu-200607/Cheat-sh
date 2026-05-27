import { Category } from './types';

export const cppData: Category = {
  id: 'cpp',
  title: 'C++',
  icon: '⚙️',
  color: '#00599c',
  gradient: 'linear-gradient(135deg, #00599c, #004482)',
  description: 'C++ STL, templates, smart pointers, lambdas and modern C++',
  sections: [
    {
      id: 'stl-vector',
      title: 'STL — Vector',
      snippets: [
        { code: `#include <vector>
using namespace std;

vector<int> v = {1, 2, 3};
v.push_back(4);       // add to end
v.pop_back();         // remove from end
v.insert(v.begin()+1, 99); // insert at index
v.erase(v.begin()+1); // remove at index
v.size();             // number of elements
v.empty();            // true if empty
v.clear();            // remove all
v.front();            // first element
v.back();             // last element
v[2];                 // access by index
v.at(2);              // bounds-checked access
sort(v.begin(), v.end());  // sort ascending
reverse(v.begin(), v.end()); // reverse`, description: 'std::vector operations', language: 'cpp' },
      ]
    },
    {
      id: 'stl-map-set',
      title: 'STL — Map & Set',
      snippets: [
        { code: `#include <map>
#include <unordered_map>

map<string, int> m;        // sorted by key (O(log n))
unordered_map<string,int> um; // hash map (O(1) avg)

m["alice"] = 30;
m.count("alice");          // 1 if exists
m.find("bob") != m.end();  // check existence
m.erase("alice");
for (auto& [k, v] : m) { } // structured binding`, description: 'Map and unordered_map', language: 'cpp' },
        { code: `#include <set>
#include <unordered_set>

set<int> s = {3, 1, 4, 1, 5}; // sorted, unique
unordered_set<int> us;         // hash set

s.insert(2);
s.count(3);       // 1 if exists
s.erase(3);
s.lower_bound(3); // iterator to >=3
s.upper_bound(3); // iterator to >3`, description: 'Set and unordered_set', language: 'cpp' },
      ]
    },
    {
      id: 'stl-queue-stack',
      title: 'STL — Queue, Stack & Priority Queue',
      snippets: [
        { code: `#include <queue>
#include <stack>

// Queue (FIFO)
queue<int> q;
q.push(1); q.push(2);
q.front();   // 1
q.pop();     // removes front
q.empty();

// Stack (LIFO)
stack<int> st;
st.push(1); st.push(2);
st.top();    // 2
st.pop();    // removes top

// Priority Queue (max-heap default)
priority_queue<int> pq;
priority_queue<int, vector<int>, greater<int>> min_pq; // min-heap
pq.push(3); pq.push(1); pq.push(5);
pq.top();    // 5 (max)
pq.pop();`, description: 'Queue, Stack, Priority Queue', language: 'cpp' },
      ]
    },
    {
      id: 'algorithms',
      title: 'STL Algorithms',
      snippets: [
        { code: `#include <algorithm>
#include <numeric>

sort(v.begin(), v.end());
sort(v.begin(), v.end(), greater<int>()); // descending
binary_search(v.begin(), v.end(), 3);
lower_bound(v.begin(), v.end(), 3); // ptr to >=3
upper_bound(v.begin(), v.end(), 3); // ptr to >3
min_element(v.begin(), v.end());
max_element(v.begin(), v.end());
accumulate(v.begin(), v.end(), 0);   // sum
count(v.begin(), v.end(), 3);        // count of 3
find(v.begin(), v.end(), 3);         // iterator
reverse(v.begin(), v.end());
unique(v.begin(), v.end());          // rm consec dups
next_permutation(v.begin(), v.end()); // next permutation`, description: 'Common STL algorithm functions', language: 'cpp' },
      ]
    },
    {
      id: 'templates',
      title: 'Templates',
      snippets: [
        { code: `// Function template
template <typename T>
T maxVal(T a, T b) {
    return (a > b) ? a : b;
}

maxVal(3, 5);        // int
maxVal(3.0, 5.0);    // double

// Class template
template <typename T>
class Stack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }
    T pop() { T v=data.back(); data.pop_back(); return v; }
};

Stack<int> s;
s.push(10);

// Template specialization
template <>
bool maxVal<bool>(bool a, bool b) { return a || b; }`, description: 'Function and class templates', language: 'cpp' },
      ]
    },
    {
      id: 'smart-pointers',
      title: 'Smart Pointers',
      snippets: [
        { code: `#include <memory>

// unique_ptr — sole ownership
auto u = make_unique<int>(42);
*u = 100;
// u is deleted automatically when out of scope

// shared_ptr — shared ownership (ref counted)
auto s1 = make_shared<int>(10);
auto s2 = s1;          // both own the int
s1.use_count();        // 2

// weak_ptr — non-owning reference
weak_ptr<int> w = s1;
if (auto locked = w.lock()) { // check still alive
    *locked = 20;
}

// Never use raw new/delete with smart pointers`, description: 'unique_ptr, shared_ptr, weak_ptr', language: 'cpp' },
      ]
    },
    {
      id: 'lambdas',
      title: 'Lambdas & Modern C++',
      snippets: [
        { code: `// Lambda syntax: [capture](params) -> ret { body }
auto add = [](int a, int b) { return a + b; };
add(3, 4);  // 7

// Capture by value [=] or reference [&]
int x = 10;
auto byVal = [x]() { return x + 1; };
auto byRef = [&x]() { x += 1; };

// With STL
sort(v.begin(), v.end(), [](int a, int b) {
    return a > b;  // descending
});

// Range-based for
for (const auto& elem : v) { }
for (auto& [key, val] : map) { }

// auto keyword
auto it = v.begin();
auto result = some_function();`, description: 'Lambdas, auto, range-based for', language: 'cpp' },
        { code: `// Move semantics & rvalue references
void process(string&& s) {
    // takes ownership
    string local = move(s);
}

string s = "hello";
process(move(s)); // s is now empty

// Structured bindings (C++17)
auto [x, y] = make_pair(1, 2);
auto [k, v] = *map.begin();

// Optional (C++17)
#include <optional>
optional<int> find_val() {
    if (found) return 42;
    return nullopt;
}
if (auto val = find_val()) { cout << *val; }`, description: 'Move semantics, structured bindings, optional', language: 'cpp' },
      ]
    },
    {
      id: 'oop-cpp',
      title: 'OOP in C++',
      snippets: [
        { code: `class Animal {
    string name;      // private by default
protected:
    int age;
public:
    Animal(string n, int a) : name(n), age(a) {}  // init list
    virtual string speak() = 0;  // pure virtual
    virtual ~Animal() {}         // virtual destructor
    string getName() const { return name; }
};

class Dog : public Animal {
public:
    Dog(string n) : Animal(n, 0) {}
    string speak() override { return "Woof!"; }
};

// Use polymorphism through base pointer
Animal* a = new Dog("Rex");
a->speak();  // "Woof!"
delete a;    // calls virtual destructor`, description: 'Classes, inheritance, virtual functions', language: 'cpp' },
      ]
    },
  ]
};
