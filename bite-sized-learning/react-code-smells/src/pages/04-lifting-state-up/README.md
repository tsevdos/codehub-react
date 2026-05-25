# Exercise 04 — Lifting State Up

## Concept

**Lifting state up** is the inverse of colocation: when two sibling components need to share or synchronise state, the state must move *up* to their nearest common ancestor. The ancestor owns the state and passes it down as props, along with any callbacks the children need to trigger updates. This is the canonical React solution for sibling communication — there is no direct sibling-to-sibling data flow in React.

The problem this solves is **divergent state**: when two components each hold their own copy of data that should always be in agreement, they will inevitably drift out of sync. One component updates its copy and the other doesn't know about it. The UI shows two different truths at once, which is a correctness bug that is notoriously hard to reproduce and debug.

A secondary benefit is **elimination of redundant renders**. When state is duplicated across siblings, a change in one component triggers a re-render of that sibling. If the other sibling needs to reflect the change, you'd need additional plumbing (global state, refs, events) to notify it. When state lives in the shared parent, React naturally re-renders both siblings with the updated value in a single pass.

## What is wrong in the bad example

In `bad-example/App.tsx`:

1. `ProductList` has its own `cartItems` state and updates it when the user clicks "Add to cart".
2. `CartSummary` has its own separate `cartItems` state initialised to `[]`. It never receives updates from `ProductList`.
3. The two states are completely unrelated to React — clicking "Add to cart" in `ProductList` has zero effect on `CartSummary`.
4. The "Clear cart" button in `CartSummary` clears its own local state, which is always empty anyway — a silent no-op.

## Run it in the browser

This workshop uses a single Vite app shell. Run `npm install` once, then `npm run dev`, and point the import in `src/main.tsx` at the example you want to demonstrate.

For this module, the useful entry points are:

- `exercises/04-lifting-state-up/bad-example/App.tsx`
- `exercises/04-lifting-state-up/chat-application/bad-example/App.tsx`
- `exercises/04-lifting-state-up/temperature-converter/bad-example/App.tsx`
- `exercises/04-lifting-state-up/solution/App.tsx`

The browser will always render whichever example is imported from `src/main.tsx`.

## Extra examples

The cart example is a good intro because the bug is obvious: one sibling adds items and the other sibling stays stale. The two additional examples below show the same ownership mistake in different shapes so participants can recognize it beyond shopping carts.

### Chat application

Use this when you want to show shared array state, multiple updates, and sibling coordination between a composer and a message list.

### Temperature converter

Use this when you want to show two inputs that must always agree and why the parent should own the shared temperature value.

## Solution approach

Remove `cartItems` from both `ProductList` and `CartSummary`. Declare it once in `App`. Pass it down to both children: `ProductList` receives an `onAdd` callback; `CartSummary` receives the current list to display.
