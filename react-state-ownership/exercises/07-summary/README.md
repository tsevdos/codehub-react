# Exercise 07 — Summary & Recap

## What we covered today

**01 · Colocation**
State belongs inside the smallest subtree that needs it. Hoisting state higher than necessary creates prop drilling, increases coupling, and causes unrelated components to re-render.

**02 · Derived state**
Values that can be computed from existing state should not be stored in a second `useState`. The `useEffect`-sync anti-pattern causes double renders and stale data on the first render after a state change. Derive values inline at render time; use `useMemo` only when profiling shows a real performance problem.

**Assignment A** combined both patterns in a single app. You colocated the filter panel toggle and replaced the `useEffect`-driven filtered list with a derived constant.

**04 · Lifting state up**
When sibling components need to share data, the state moves to their nearest common ancestor. The parent owns the data and distributes it; children communicate changes via callbacks. This eliminates divergent state bugs where siblings hold separate copies of what should be one value.

**Assignment B** had you lift a shared task list from two sibling components up to their parent, making the app work correctly with a single source of truth.

**06 · Context API *(placeholder)*
A brief preview of the next natural step: when lifting state up would require drilling props through three or more levels, `useContext` lets deeply nested components subscribe to shared state without each intermediate component needing to know about it.

## The decision tree (revisited)

```
Need to store changing data?
        │
        ▼
Can it be computed from existing state/props?
  YES → derive it (const / useMemo)
  NO  ↓
Is it used by only one subtree?
  YES → colocate it (useState inside that subtree)
  NO  ↓
Do siblings need to share it?
  YES → lift it up (useState in nearest common ancestor)
  NO  ↓
Does it cross 3+ levels?
  YES → React Context (useContext + Provider)
```

## Questions to take away

- Where in your current codebase do you have `useEffect` that only sets state derived from other state?
- Are there any `useState` values in your top-level `App` that are only used deep in the tree?
- Do you have siblings that hold duplicated copies of the same data?

These are the symptoms. Now you have the vocabulary and the patterns to fix them.
