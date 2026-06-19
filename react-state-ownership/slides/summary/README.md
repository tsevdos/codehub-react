# Workshop Summary: Key Takeaways

## What we covered

Over the course of this workshop you worked through three foundational state-ownership patterns in React, with a preview of a fourth. Here is a one-line reminder of each:

| Pattern | Rule of thumb |
|---|---|
| **Colocation** | State belongs as close to where it is used as possible. |
| **Derived state** | If you can compute it, don't store it. |
| **Lifting state up** | Siblings that need to agree → move state to the parent. |
| **Context** *(placeholder)* | Prop drilling across 3+ levels → reach for `useContext`. |

## The decision flowchart

When you are about to call `useState`, ask yourself:

1. **Is this value computable from other state or props?** → Don't call `useState`; derive it at render time.
2. **Is this value only used by one subtree?** → Keep it inside that subtree (colocate).
3. **Do two siblings need the same value?** → Lift it to their nearest common ancestor.
4. **Does the value need to cross 3+ component layers?** → Consider React Context.

## What to avoid

- **Redundant state** kept in sync via `useEffect` — the effect is a symptom; the root cause is that the value should be derived.
- **Prop drilling for the sake of flexibility** — passing state through multiple intermediary components just so they "might need it someday" adds coupling without benefit.
- **Premature global state** — reaching for Redux or Zustand before exhausting local patterns adds unnecessary complexity.

## What comes next

The patterns in this workshop form the foundation you need before studying more advanced topics:

- Server state and async data fetching (React Query, SWR)
- Global client state managers (Zustand, Redux Toolkit)
- Concurrent features and transitions (`useTransition`, `useDeferredValue`)

---

> **Reflect:** Which of the three patterns did you find most surprising or counter-intuitive, and why?
