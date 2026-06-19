# Exercise 01 — Colocation

## Concept

**State colocation** means placing state as close to the components that use it as possible. When you first write a component it is tempting to hoist all state to the top-level `App` component so "it's easy to find". This feels tidy, but it comes with a real cost: every component between `App` and the one that actually needs the state must accept and forward props it doesn't care about. This is often called **prop drilling**, and it makes the component tree harder to read, harder to refactor, and slower to re-render because unrelated parts of the tree re-render when the state changes.

The fix is simple: identify which component subtree *actually* uses the state, and move the `useState` call into the highest component within that subtree. Components outside that subtree are completely unaffected — they don't re-render and they don't need to know the state exists. This is the first question you should ask before lifting state *up*: can I push it *down* instead?

Colocation also has a correctness dimension. When state lives higher than it needs to, it is easy to accidentally share it with components that shouldn't see it, or to pass stale values through long prop chains. Keeping state local makes accidental coupling much harder.

## What is wrong in the bad example

In `bad-example/App.tsx`, the `detailsOpen` and `selectedId` states live inside `App`. They are passed through `UserList` (which doesn't use them directly) down into `UserCard`, which is the only component that reads and mutates them. This means:

- `UserList` receives four props (`detailsOpen`, `selectedId`, `onSelect`, `onClose`) that it doesn't use for its own rendering logic.
- Any time a card opens or closes, *all* `UserCard` instances re-render because the parent `App` re-renders.
- Adding a second unrelated feature to `App` risks entangling it further with this UI-local concern.

## Solution approach

Move `isOpen` state inside `UserCard`. Each card becomes entirely self-contained. `UserList` no longer needs any of those props, and `App` no longer knows or cares which card is open.
