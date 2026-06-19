# Exercise 02 — Derived State

## Concept

**Derived state** is any value that can be computed from existing state or props. The anti-pattern is storing that computed value in a second `useState` and keeping the two in sync with a `useEffect`. At first glance this looks like a performance optimisation ("we cache the filtered list"), but it actually makes things worse: the `useEffect` runs *after* the render, meaning React renders once with stale data, then immediately triggers a second render with the updated derived value. You pay the render cost twice, and your code is harder to reason about.

The correct approach is to compute the value directly inside the render function. React re-renders whenever state or props change, so the computed value is always fresh. For truly expensive computations you can memoize with `useMemo`, but in the vast majority of cases a simple inline expression or a function called at render time is completely sufficient.

A good rule of thumb: if you ever write `useEffect(() => { setSomething(derive(otherState)) }, [otherState])`, stop and ask whether `something` needs to be state at all. Nine times out of ten the answer is no — delete the `useState` and the `useEffect` and replace them with a `const` computed at render time.

## What is wrong in the bad example

In `bad-example/App.tsx`:

1. `filteredBooks` is stored in `useState`, initialised to the full list.
2. A `useEffect` watches `query` and calls `setFilteredBooks` whenever it changes.
3. This causes **two renders per keystroke**: one when `query` updates, then another when the effect fires and updates `filteredBooks`.
4. There is also a subtle **initialisation bug**: if `BOOKS` were loaded asynchronously after mount, the effect would have to be updated to handle that case, whereas a derived value would simply work.

## Solution approach

Remove `filteredBooks` state and the `useEffect` entirely. Replace them with a single constant derived inline:

```ts
const filteredBooks = BOOKS.filter((book) =>
  book.toLowerCase().includes(query.toLowerCase()),
)
```
