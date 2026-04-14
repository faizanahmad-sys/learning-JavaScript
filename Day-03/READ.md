# Day 03: Loops and Arrays 🚀

## Overview
Day 03 focuses on handling collections of data and automating repetitive tasks. Understanding loops is the difference between a "script" and a "program."

## Key Concepts

### 1. Arrays (Reference Types)
Arrays allow you to store multiple values in a single variable.
- **Index:** Starts at `0`.
- **Length:** `array.length` gives the count of elements.
- **Reference Type:** Unlike strings or numbers, arrays are stored in the "Heap" memory.

### 2. Loops


[Image of For Loop Flowchart]

- **For Loop:** Best when you know exactly how many times you want to run the code (e.g., looping through a list).
- **While Loop:** Best when you want to run code until a specific condition changes (e.g., waiting for a user to click a button).

### 3. Common Array Methods
| Method | Description |
| :--- | :--- |
| `.push()` | Adds an item to the **end**. |
| `.pop()` | Removes an item from the **end**. |
| `.unshift()` | Adds an item to the **front**. |
| `.shift()` | Removes an item from the **front**. |
| `.indexOf()` | Finds the position of an element. |

## Practice Tasks
1. **Reverse a List:** Create an array of 5 numbers and use a `for` loop to print them in reverse order.
2. **Sum Calculator:** Create an array of prices and calculate the total sum using a loop.
3. **Filtering:** Loop through an array of ages and print only the ones that are `18+`.

## Pro-Tip: Infinite Loops ⚠️
Always ensure your loop has a "condition" that will eventually become `false`. If you write `while(true)` without a `break`, your browser will crash!
