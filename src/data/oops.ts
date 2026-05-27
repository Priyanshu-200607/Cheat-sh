import { Category } from './types';

export const oopsData: Category = {
  id: 'oops',
  title: 'OOP Concepts',
  icon: '🏗️',
  color: '#9c27b0',
  gradient: 'linear-gradient(135deg, #9c27b0, #673ab7)',
  description: 'OOP pillars, SOLID principles, and design patterns',
  sections: [
    {
      id: 'four-pillars',
      title: 'The 4 Pillars of OOP',
      snippets: [
        { code: `# 1. ENCAPSULATION
# Bundling data + methods, hiding internal state

class BankAccount:
    def __init__(self, balance):
        self.__balance = balance  # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance  # controlled access

acc = BankAccount(1000)
acc.deposit(500)
print(acc.get_balance())  # 1500
# acc.__balance  → AttributeError (hidden)`, description: 'Encapsulation: hiding state behind methods', language: 'python' },
        { code: `# 2. INHERITANCE
# Child class reuses parent class behaviour

class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "..."

class Dog(Animal):
    def speak(self):         # override
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# IS-A relationship: Dog IS-A Animal
dog = Dog("Rex")
print(dog.speak())   # Woof!
isinstance(dog, Animal)  # True`, description: 'Inheritance: IS-A relationship', language: 'python' },
        { code: `# 3. POLYMORPHISM
# Same interface, different behaviour

def make_sound(animal):  # works with ANY Animal
    print(animal.speak())

animals = [Dog("Rex"), Cat("Whiskers")]
for a in animals:
    make_sound(a)    # Woof! / Meow!

# Duck typing in Python
class Robot:
    def speak(self): return "Beep boop"

make_sound(Robot())  # works without inheritance!

# Operator overloading (polymorphism)
class Vector:
    def __add__(self, other):
        return Vector(self.x+other.x, self.y+other.y)`, description: 'Polymorphism: same call, different behavior', language: 'python' },
        { code: `# 4. ABSTRACTION
# Hiding complexity, showing only essentials

from abc import ABC, abstractmethod

class Shape(ABC):          # Abstract base class
    @abstractmethod
    def area(self) -> float: ...  # must implement

    @abstractmethod
    def perimeter(self) -> float: ...

    def describe(self):    # concrete method
        print(f"Area: {self.area():.2f}")

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14159 * self.r ** 2
    def perimeter(self): return 2 * 3.14159 * self.r

# Shape()  → TypeError: can't instantiate abstract
c = Circle(5)
c.describe()   # "Area: 78.54"`, description: 'Abstraction: abstract classes and methods', language: 'python' },
      ]
    },
    {
      id: 'solid',
      title: 'SOLID Principles',
      snippets: [
        { code: `# S — Single Responsibility Principle
# A class should have only ONE reason to change

# BAD: does too many things
class UserManager:
    def create_user(self): ...
    def send_email(self): ...    # email concern!
    def generate_report(self): ...  # report concern!

# GOOD: separate responsibilities
class UserService:
    def create_user(self): ...

class EmailService:
    def send_welcome_email(self, user): ...

class ReportService:
    def generate_user_report(self): ...`, description: 'S: Single Responsibility Principle', language: 'python' },
        { code: `# O — Open/Closed Principle
# Open for EXTENSION, closed for MODIFICATION

# BAD: modify class for each new shape
class AreaCalc:
    def area(self, shape):
        if shape.type == 'circle': ...
        elif shape.type == 'rect': ...  # keep editing!

# GOOD: extend via polymorphism
class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

class Circle(Shape):
    def area(self): return pi * r**2

class Rectangle(Shape):
    def area(self): return w * h

# Add new shape without touching existing code!`, description: 'O: Open/Closed Principle', language: 'python' },
        { code: `# L — Liskov Substitution Principle
# Subclasses must be substitutable for base class

# BAD: Square breaks Rectangle's contract
class Rectangle:
    def set_width(self, w): self.w = w
    def set_height(self, h): self.h = h
    def area(self): return self.w * self.h

class Square(Rectangle):   # WRONG inheritance!
    def set_width(self, w): self.w = self.h = w
    def set_height(self, h): self.w = self.h = h

# GOOD: separate hierarchy
class Shape(ABC):
    @abstractmethod
    def area(self): ...

class Rectangle(Shape): ...
class Square(Shape): ...`, description: 'L: Liskov Substitution Principle', language: 'python' },
        { code: `# I — Interface Segregation Principle
# Many specific interfaces > one fat interface

# BAD: forces unused method implementation
class Worker(ABC):
    @abstractmethod
    def work(self): ...
    @abstractmethod
    def eat(self): ...   # robots don't eat!

# GOOD: split into focused interfaces
class Workable(ABC):
    @abstractmethod
    def work(self): ...

class Feedable(ABC):
    @abstractmethod
    def eat(self): ...

class Human(Workable, Feedable):
    def work(self): ...
    def eat(self): ...

class Robot(Workable):
    def work(self): ...`, description: 'I: Interface Segregation Principle', language: 'python' },
        { code: `# D — Dependency Inversion Principle
# Depend on ABSTRACTIONS, not concretions

# BAD: high-level module depends on low-level
class OrderService:
    def __init__(self):
        self.db = MySQLDatabase()  # tight coupling!

# GOOD: inject abstraction
class Database(ABC):
    @abstractmethod
    def save(self, data): ...

class MySQLDatabase(Database):
    def save(self, data): ...  # MySQL impl

class MongoDB(Database):
    def save(self, data): ...  # Mongo impl

class OrderService:
    def __init__(self, db: Database):
        self.db = db  # injected dependency

# Easy to swap:
svc = OrderService(MongoDB())`, description: 'D: Dependency Inversion Principle', language: 'python' },
      ]
    },
    {
      id: 'design-patterns',
      title: 'Design Patterns',
      snippets: [
        { code: `# SINGLETON — only one instance
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

a = Singleton()
b = Singleton()
print(a is b)  # True — same object

# Use cases: Config, Logger, DB connection pool`, description: 'Singleton pattern', language: 'python' },
        { code: `# FACTORY — create objects without specifying class
class Animal(ABC):
    @abstractmethod
    def speak(self): ...

class Dog(Animal):
    def speak(self): return "Woof"

class Cat(Animal):
    def speak(self): return "Meow"

class AnimalFactory:
    @staticmethod
    def create(animal_type: str) -> Animal:
        if animal_type == "dog": return Dog()
        if animal_type == "cat": return Cat()
        raise ValueError(f"Unknown: {animal_type}")

factory = AnimalFactory()
animal = factory.create("dog")
animal.speak()  # "Woof"`, description: 'Factory pattern', language: 'python' },
        { code: `# OBSERVER — event-driven notification
class EventEmitter:
    def __init__(self):
        self._listeners = {}

    def on(self, event, callback):
        self._listeners.setdefault(event, []).append(callback)

    def emit(self, event, *args):
        for cb in self._listeners.get(event, []):
            cb(*args)

emitter = EventEmitter()
emitter.on('data', lambda x: print(f"Got: {x}"))
emitter.emit('data', 42)  # "Got: 42"

# Use cases: GUI events, pub/sub systems`, description: 'Observer pattern', language: 'python' },
        { code: `# STRATEGY — interchangeable algorithms
class Sorter:
    def __init__(self, strategy):
        self.strategy = strategy  # inject algorithm

    def sort(self, data):
        return self.strategy(data)

# Different strategies
bubble = lambda d: bubble_sort(d)
quick  = lambda d: sorted(d)          # Pythonic

sorter = Sorter(quick)
sorter.sort([3, 1, 2])  # [1, 2, 3]

# Swap strategy at runtime
sorter.strategy = bubble`, description: 'Strategy pattern', language: 'python' },
        { code: `# DECORATOR PATTERN (structural)
class Coffee:
    def cost(self): return 5
    def desc(self): return "Coffee"

class MilkDecorator:
    def __init__(self, coffee): self.coffee = coffee
    def cost(self): return self.coffee.cost() + 2
    def desc(self): return self.coffee.desc() + " + Milk"

class SugarDecorator:
    def __init__(self, coffee): self.coffee = coffee
    def cost(self): return self.coffee.cost() + 1
    def desc(self): return self.coffee.desc() + " + Sugar"

c = SugarDecorator(MilkDecorator(Coffee()))
c.cost()  # 8
c.desc()  # "Coffee + Milk + Sugar"`, description: 'Decorator structural pattern', language: 'python' },
      ]
    },
    {
      id: 'relationships',
      title: 'Class Relationships',
      snippets: [
        { code: `# IS-A (Inheritance)
class Vehicle: pass
class Car(Vehicle): pass  # Car IS-A Vehicle

# HAS-A (Composition)
class Engine:
    def start(self): ...

class Car:
    def __init__(self):
        self.engine = Engine()  # Car HAS-A Engine
    def start(self):
        self.engine.start()

# USES-A (Association/Dependency)
class Driver:
    def drive(self, car: Car):  # Driver USES-A Car
        car.start()

# Prefer COMPOSITION over INHERITANCE
# "Favor has-a relationships over is-a"`, description: 'IS-A, HAS-A, USES-A relationships', language: 'python' },
      ]
    },
  ]
};
