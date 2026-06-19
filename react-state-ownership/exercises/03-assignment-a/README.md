# Exercise 03 — Assignment A (Colocation + Derived State)

## Your task

This 30-minute assignment combines the two patterns from exercises 01 and 02. Open `starter/App.tsx`. The app is a simple **Product Catalogue** with a search input and a collapsible filter panel.

The starter has **two state ownership problems**. Your job is to fix both:

1. **Colocation problem** — `filterPanelOpen` is managed in `App`, but it is only ever read and mutated inside `ProductFilter`. Move this state down into `ProductFilter` where it belongs. Remove the props that `App` no longer needs to pass.

2. **Derived state problem** — `filteredProducts` is stored as `useState` and kept in sync with `searchQuery` via a `useEffect`. Remove the redundant state and the effect. Compute `filteredProducts` as a constant derived from `searchQuery` at render time.

## Time box

⏱ **30 minutes**

## What "done" looks like

- `App` no longer holds `filterPanelOpen` state; `ProductFilter` manages it internally.
- `App` no longer calls `useState` for `filteredProducts` and no longer has a `useEffect`.
- The search still filters the product list in real time.
- The filter panel still opens and closes.
- There are no TypeScript errors.
- The component tree is simpler: fewer props, fewer callbacks, less indirection.

## Tips

- Don't forget to remove the now-unused `onToggle` and `isOpen` props from `ProductFilter` after moving the state — removing the prop from the call site *and* the component signature is the full fix.
- `useEffect` is still the right tool for async side effects like data fetching. This exercise targets the anti-pattern of using it purely to synchronise derived state.
