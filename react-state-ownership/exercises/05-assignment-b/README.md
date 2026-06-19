# Exercise 05 — Assignment B (Lifting State Up)

## Your task

This 30-minute assignment practices the lifting-state-up pattern from exercise 04. Open `starter/App.tsx`. The app is a simple **Task Board** with a `TaskForm` component for adding tasks and a `TaskList` component for displaying them.

The starter has a sibling-state problem: both components manage their own `tasks` array, so the list never reflects what the form adds. Fix the ownership so there is one shared source of truth.

Your job:

- Lift `tasks` state up to `App`.
- Pass `tasks` and an add callback as props.
- Remove the now-unnecessary internal `tasks` state from both children.

## Time box

⏱ **30 minutes**

## What "done" looks like

- `App` holds the single source of truth for `tasks`.
- Adding a task in `TaskForm` immediately appears in `TaskList`.
- Neither `TaskForm` nor `TaskList` calls `useState` for the tasks array.
- `TaskForm` still manages its own `input` string internally (that's local UI state — it should stay colocated).
- There are no TypeScript errors.
