# Day 04: Functions & Scope 🛠️

## Overview
Functions are the building blocks of JavaScript. They allow you to wrap a piece of code and run it whenever you need it.

## Key Concepts

### 1. Function Types
- **Declaration:** Standard way, can be called before definition.
- **Expression:** Stored in a variable, very common in modern apps.
- **Arrow Function:** Shorter syntax `() => {}`, great for simple math or logic.

### 2. Return Keyword
The `return` statement stops the function and sends a value back to where it was called. Without it, a function returns `undefined`.

### 3. Scope (The "Boundary")
- **Global:** Variables accessible from anywhere.
- **Local:** Variables created inside a function stay inside. This prevents different parts of your code from messing with each other's data.



## Pro-Tips for "Over-learning"
- **Don't Repeat Yourself (DRY):** Agar aap ek hi code 2 baar likh rahe hain, toh usay function mein daal dein.
- **Naming:** Functions ke naam hamesha "verb" (kaam) honi chahiye, jaise `calculateTotal`, `fetchData`, ya `hideModal`.

## Practice Challenge
1. **Currency Converter:** Ek function banayen jo USD ko PKR mein convert kare.
2. **Username Generator:** Ek function banayen jo user ka naam input le aur uske aage ek random number laga kar return kare.
3. **Advanced:** Ek function banayen jo array of numbers le aur unka 'average' nikal kar return kare.
