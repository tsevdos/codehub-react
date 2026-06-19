# react-state-ownership
Exercises and solutions for React state ownership — colocation, derived state, lifting state up, and light context to avoid prop drilling.

## What is state, and why does ownership matter?

In React, **state** is any data that changes over time and causes the UI to re-render. Every piece of state lives in exactly one component — the component that calls `useState` — and is owned by that component. "Ownership" describes which component is responsible for a given piece of state: it decides when to read it, when to update it, and whether to share it with children via props.

Placing state in the wrong component leads to one of the most common React problems: components receiving — and threading — props they don't actually use, deeply nested callbacks, or two parts of the UI that should agree but mysteriously drift out of sync. Getting ownership right makes components smaller, easier to test, and easier to reason about.

## The four ownership patterns you'll see today

This workshop covers the four most important state-ownership decisions you will make in a typical React app:

1. **Colocation** — state that is only relevant to one subtree should live inside that subtree, not higher up in the tree.
2. **Derived state** — if a value can be computed from existing state, it should not be stored as its own `useState`; derive it at render time instead.
3. **Lifting state up** — when two sibling components need to share the same data, move the state to their closest common ancestor and pass it down as props.
4. **Context** *(brief introduction)* — when state must be shared across many levels of the tree and prop drilling becomes unmanageable, React Context provides a lightweight solution without external libraries.

## Why external state managers are out of scope

Tools like Redux, Zustand, or Jotai are excellent — but they solve a different problem. This workshop focuses on what you can accomplish with plain React. Mastering these four patterns will handle the vast majority of state problems in small-to-medium applications and will make you a better user of external state managers when you eventually reach for them.

---

> **Before you start:** run `npm install && npm run dev` and confirm the app opens in your browser, then move on to exercise 01.
