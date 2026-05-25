# Exercise 06 — Context API *(Placeholder)*

> **Note:** This section is a placeholder. It will be developed in a future workshop iteration.

## What this section will cover

This exercise will introduce `useContext` as the solution when prop drilling spans three or more component levels. Participants will start with a working app that passes a value through several intermediate components that don't use it, and refactor it to use a React Context so that only the components that care about the value subscribe to it.

Topics planned:

- Creating a context with `createContext` and providing it with `Provider`
- Consuming context with `useContext`
- When context is the right tool (vs. lifting state up or a state manager)
- Performance gotcha: every consumer re-renders when the context value changes — strategies for splitting contexts

## Starter file

`starter/App.tsx` contains an empty shell. No exercise content yet.
