import { Category } from './types';

export const pythonData: Category = {
  id: 'python',
  title: 'Python',
  icon: '🐍',
  color: '#3776ab',
  gradient: 'linear-gradient(135deg, #3776ab, #ffd43b)',
  description: 'Python fundamentals, OOP, built-ins, comprehensions & more',
  sections: [
    {
      id: 'basics',
      title: 'Basics & Data Types',
      description: 'Core Python syntax and built-in data types',
      snippets: [
        { code: `# Variables & Types
x = 10          # int
y = 3.14        # float
s = "hello"     # str
b = True        # bool
n = None        # NoneType

# Type checking
type(x)         # <class 'int'>
isinstance(x, int)  # True`, description: 'Variables and type checking', language: 'python' },
        { code: `# String operations
s = "Hello, World!"
s.upper()       # 'HELLO, WORLD!'
s.lower()       # 'hello, world!'
s.split(', ')   # ['Hello', 'World!']
s.strip()       # removes whitespace
s.replace('Hello', 'Hi')  # 'Hi, World!'
s.startswith('Hello')     # True
len(s)          # 13
s[0:5]          # 'Hello'
f"Value: {x}"  # f-string formatting`, description: 'String methods', language: 'python' },
        { code: `# List operations
lst = [1, 2, 3, 4, 5]
lst.append(6)       # [1,2,3,4,5,6]
lst.extend([7,8])   # adds multiple
lst.insert(0, 0)    # insert at index
lst.remove(3)       # remove by value
lst.pop()           # remove last
lst.pop(0)          # remove at index
lst.sort()          # sort in place
lst.reverse()       # reverse in place
lst.index(2)        # find index
lst.count(2)        # count occurrences
len(lst)            # length`, description: 'List methods', language: 'python' },
        { code: `# Dictionary operations
d = {'a': 1, 'b': 2, 'c': 3}
d['a']              # 1
d.get('z', 0)       # 0 (default)
d.keys()            # dict_keys(['a','b','c'])
d.values()          # dict_values([1,2,3])
d.items()           # dict_items([...])
d.update({'d': 4})  # merge
del d['a']          # delete key
'b' in d            # True (key check)`, description: 'Dictionary operations', language: 'python' },
        { code: `# Sets
s = {1, 2, 3, 4}
s.add(5)
s.remove(3)
s.discard(99)     # no error if missing
s1 | s2           # union
s1 & s2           # intersection
s1 - s2           # difference
s1 ^ s2           # symmetric difference
s1.issubset(s2)   # True/False`, description: 'Set operations', language: 'python' },
        { code: `# Tuples (immutable)
t = (1, 2, 3)
t[0]              # 1
t.index(2)        # 1
t.count(1)        # 1
a, b, c = t       # unpacking
*head, last = t   # extended unpacking`, description: 'Tuple operations', language: 'python' },
      ]
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      snippets: [
        { code: `# If/elif/else
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

# Ternary
result = "yes" if condition else "no"`, description: 'Conditionals', language: 'python' },
        { code: `# Loops
for i in range(10):
    print(i)

for i, v in enumerate(['a','b','c']):
    print(i, v)

for k, v in d.items():
    print(k, v)

# While
while x > 0:
    x -= 1

# Loop control
break     # exit loop
continue  # skip iteration
else:     # runs if loop completes normally
    pass`, description: 'Loops', language: 'python' },
      ]
    },
    {
      id: 'comprehensions',
      title: 'Comprehensions',
      snippets: [
        { code: `# List comprehension
squares = [x**2 for x in range(10)]
evens   = [x for x in range(20) if x % 2 == 0]

# Dict comprehension
sq_map = {x: x**2 for x in range(5)}

# Set comprehension
unique_squares = {x**2 for x in [-2,-1,0,1,2]}

# Generator expression (lazy)
gen = (x**2 for x in range(1000))
next(gen)   # 0`, description: 'List, dict, set comprehensions', language: 'python' },
      ]
    },
    {
      id: 'functions',
      title: 'Functions & Decorators',
      snippets: [
        { code: `# Function basics
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# *args and **kwargs
def func(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict

# Lambda
square = lambda x: x ** 2

# Higher-order functions
list(map(lambda x: x*2, [1,2,3]))    # [2,4,6]
list(filter(lambda x: x>1, [1,2,3])) # [2,3]
from functools import reduce
reduce(lambda a,b: a+b, [1,2,3])     # 6`, description: 'Functions, args, lambda', language: 'python' },
        { code: `# Decorators
def my_decorator(func):
    def wrapper(*args, **kwargs):
        print("Before")
        result = func(*args, **kwargs)
        print("After")
        return result
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# functools.wraps preserves metadata
from functools import wraps
def decorator(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        return func(*args, **kwargs)
    return wrapper`, description: 'Decorators', language: 'python' },
        { code: `# Generators
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
next(gen)   # 0
next(gen)   # 1
next(gen)   # 1

# yield from
def chain(*iterables):
    for it in iterables:
        yield from it`, description: 'Generators and yield', language: 'python' },
      ]
    },
    {
      id: 'oop',
      title: 'OOP in Python',
      snippets: [
        { code: `class Animal:
    species = "Unknown"  # class variable
    
    def __init__(self, name, age):
        self.name = name   # instance variable
        self.age = age
    
    def speak(self):
        return f"{self.name} speaks"
    
    @classmethod
    def create(cls, name):
        return cls(name, 0)
    
    @staticmethod
    def is_animal(obj):
        return isinstance(obj, Animal)
    
    def __repr__(self):
        return f"Animal({self.name!r}, {self.age})"
    
    def __str__(self):
        return self.name`, description: 'Class definition', language: 'python' },
        { code: `# Inheritance
class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age)
        self.breed = breed
    
    def speak(self):  # override
        return "Woof!"

# Multiple inheritance
class A:
    def method(self): return "A"

class B(A):
    def method(self): return "B"

class C(A, B): pass   # MRO: C -> A -> B
C.mro()  # method resolution order`, description: 'Inheritance and MRO', language: 'python' },
        { code: `# Magic (dunder) methods
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Vector(self.x+other.x, self.y+other.y)
    def __len__(self):
        return 2
    def __getitem__(self, idx):
        return [self.x, self.y][idx]
    def __eq__(self, other):
        return self.x==other.x and self.y==other.y
    def __hash__(self):
        return hash((self.x, self.y))`, description: 'Dunder/magic methods', language: 'python' },
      ]
    },
    {
      id: 'file-io',
      title: 'File I/O & Exceptions',
      snippets: [
        { code: `# File operations
with open('file.txt', 'r') as f:
    content = f.read()       # entire file
    lines = f.readlines()    # list of lines

with open('file.txt', 'w') as f:
    f.write("Hello\\n")

with open('data.json', 'r') as f:
    import json
    data = json.load(f)

with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)`, description: 'File read/write operations', language: 'python' },
        { code: `# Exception handling
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError) as e:
    print(f"Type/Value error: {e}")
except Exception as e:
    print(f"Unexpected: {e}")
else:
    print("No error!")     # runs if no exception
finally:
    print("Always runs")   # cleanup

# Custom exception
class MyError(Exception):
    def __init__(self, msg, code):
        super().__init__(msg)
        self.code = code

raise MyError("oops", 404)`, description: 'Exception handling', language: 'python' },
      ]
    },
    {
      id: 'useful-builtins',
      title: 'Useful Built-ins',
      snippets: [
        { code: `# Built-in functions
abs(-5)           # 5
round(3.14159, 2) # 3.14
pow(2, 10)        # 1024
divmod(17, 5)     # (3, 2)
max([1,2,3])      # 3
min([1,2,3])      # 1
sum([1,2,3])      # 6
sorted([3,1,2])   # [1,2,3]
sorted(d.items(), key=lambda x: x[1])

zip([1,2], ['a','b'])  # [(1,'a'),(2,'b')]
any([0, 0, 1])         # True
all([1, 1, 1])         # True
enumerate(['a','b'])   # [(0,'a'),(1,'b')]
reversed([1,2,3])      # iterator
vars(obj)              # __dict__
dir(obj)               # list of attributes`, description: 'Built-in functions', language: 'python' },
      ]
    },
  ]
};
