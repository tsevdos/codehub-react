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
- Complex JSX
- Not hanndled state and errors
- JSX outside the render method
- Components with too many props
- Prop drilling
- Not using the "derived state"
- Unoptimized or over-optimize renders

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
- use contextAPI / global state (later example)

---

# Example

---

# Component and code duplication

- bad abstractions
- not DRY
- adds complexity and bugs to our code
- not easy to refactor

---

# How to fix code duplication

- seperation of concerns
- flexible components
- re-usable helper functions

---

# Example

---

# Use derived state

- easier to undestand code
- less side effects (useEffects) and state (useState)
- flexible components

---

# Example

---

# Unhandled state and errors

- avoid breaking / freezing the application
- provide a better and clearer UX
- give visual feedback to the user

---

# Example

---

# Use derived state

- eliminates unnecessary re-renders
- easier to undestand code
- less side effects (useEffects) and state

---

# Example

./react-code-smells/src/pages/CodeDuplication/CodeDuplication.jsx

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
