---
marp: true
theme: uncover
# header: "React Fundamentals"
# footer: "[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)"
---

# React code smells

[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)

---

# Agenda

- Complex components
- Component and code duplication

- Not using the "derived state"
- Unhandled state and errors
- Components with too many props
- Prop drilling

---

# Rules

Feel free to interrupt me for:

- questions
- relevant comments

---

# Complex components

- != seperation of concerns
- != easy to reuse
- != good structure
- != predictable

---

# How to fix complex components

- split them in stateful and stateless components
- create re-usable hooks
- use contextAPI / global state (later Code example)

---

# Code example

---

# Component and code duplication

- bad abstractions
- not DRY
- adds complexity and bugs to our code
- not easy to refactor

---

# How to fix code duplication

- seperation of concerns
- build flexible / re-usable components
- re-usable helper functions

---

# Code example

---

# Use derived state

- easier to undestand code
- less side effects (useEffects) and state (useState)
- cleaner components

---

# Code example

---

# Unhandled state and errors

- avoid breaking / freezing the application
- provide a better and clearer UX
- give visual feedback to the user

---

# How to fix unhandled state and errors

- handle all posible errors (especially network errors)
- handle all state values in JSX

---

# Code example

---

# Components with too many props

- harder to read and maintain
- easier to undestand code
- less side effects (useEffects) and state

---

# How to fix components with too many props

- buld and compose smaller components

---

# Prop drilling

![height:500px](./assets/prop-drilling.png)

---

# How to fix prop drilling

- react Context API
- global state (redux, recoil, zustand, jotai, MobX, etc.)

---

# Code example

---

# Recap

- what is react
- core principles
- JSX
- components

---

# Recap: Core principles

- composition
- declarative
- unidirectional dataflow
- explicit mutations

---

# Recap: Basics

- React.createElement
- JSX
- virtual DOM

---

# Recap: Components

- props
- state
- hooks
- children
- conditional rendering
- event handlers

---

# Recap: Styling and CSS

- CSS stylesheet
- Inline styling

---

# That's all folks

### Questions / Discussions?
