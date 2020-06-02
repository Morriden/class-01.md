# Three advantages to TDD
1. Code flexibility and easier maintenance. Less bugs.
2. Allows for easier refactoring.
3. Lego blocks, works on small sections at a time!

# When do you use beforeEach() or afterEach()
1. beforeEach() can be used to run a function before each of the tests in the file runs?
2. afterEach() can be used to run a function after each of the tests continues. It will wait for the resolve before continuing.

# What is the downside to TDD
1. The test suite has to be maintained.
2. It does slow down the environement slightly, especially if theres a time crunch.
3. Hard to apply to existing code.

# different between classes & constructor/prototype classes?
1. A child of an ES6 class is another type definition which extends the parent with new properties and methods, which in turn can be instantiated at runtime. A child of a prototype is another object instance which delegates to the parent any properties that aren't implemented on the child.

# Name a use case for a static method
1. A static method can access only static variables of class and invoke only static methods of the class.

# Higher order function

imGonnaMultiply(imGonnaAdd(x, y))

The multiply function will times the result of the imgonnadd function

# DOCUMENT THE FOLLOWING TERMS
1. functional programming: Functional programming is declarative rather than imperative, and application state flows through pure functions.
2. pure function: he function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program's execution. It must only depend on its input arguments.
3. higher-order function:  A higher-order function is a function that can take another function as an argument, or that returns a function as a result.
4. immutable state: is state that cannot be changed.
5. object: An object is a collection of properties, and a property is an association between a name (or key) and a value.
6. object-oriented programming (OOP): define the data type of a data structure, and also the types of operations (functions) that can be applied to the data structure.
7. class:  Classes are just special functions added to ES6 that are meant to mimic the class keyword from these other languages.
8. prototype: All JavaScript objects inherit properties and methods from a prototype.
9. super: The super keyword refers to superclass (parent) objects.
It is used to call superclass methods, and to access the superclass constructor.
10. inheritance: In Java, it is possible to inherit attributes and methods from one class to another. We group the "inheritance concept" into two categories:

subclass (child) - the class that inherits from another class
superclass (parent) - the class being inherited from
11. constructor: A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created.
12. instance: The instanceof keyword checks whether an object is an instance of a specific class or an interface.
13. context: Context in JavaScript is related to objects. It refers to the object within the function being executed.
14. this: The JavaScript this keyword refers to the object it belongs to. ... In a function, this refers to the global object. In a function, in strict mode, this is undefined . In an event, this refers to the element that received the event.
15. Test Driven Development (TDD): Test-driven development (TDD) is a development technique where you must first write a test that fails before you write new functional code. 
16. Jest: testing for functions.
17. Continuous Integration (CI): More broadly continuous integration is a practice which prescribes to continuously integrate new code and new features into a shared codebase.
18. unit test: Every unit test is made to check against an individual unit in JavaScript, which typically breaks down to a function or library.


