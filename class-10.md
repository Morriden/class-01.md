# Chapter 10 Error Handling & Debugging

1. Order of Execution: This is how scripts are processed and which statement are executed. Some tasks cannot complete until another statement or function has been run.
1. The stack (mtg): The java script interpretor processes one line of code at a time. when a statement needs data from another function it stacks (like mtg) the new function on top of the current stack.
1.  Execution Context & Hoisting: Each time a script enters a new execution context, there are two phases of activity
    1. Prepare: the new scope is created and variables, functions, and arguments are created.
    1. Execute: Now it can assign values to variables / reference functions and run their code / execute statements.
1. Understanding Scope: In the interpretor each execution context has its town variables object.
1. Understanding Errors: If a javascript statement generates an error, thenit throws an exception.
1. Error Objects: Error objects can help you find where your mistakes are and browsers have tools to help you read them.

## How to Deal With Errors

1. Debug the script to fix errors
1. Handle errors gracefully
1. Where is the problem?
1. What is the problem?
1. Log the data to the console.
1. yell, hit head on desk, realize its a type, finally.