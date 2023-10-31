---
marp: true
theme: uncover
# header: "React Fundamentals"
# footer: "[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)"
---

# React Query

[tsevdos.me](https://tsevdos.me/) / [@tsevdos](https://twitter.com/tsevdos)

---

# Agenda

- Setup
- Configuration
- useQuery examples (GET requests)

---

# Rules

Feel free to interrupt me for:

- questions
- relevant comments

---

# React query features

- Backend agnostic (all you need is a REST API)
- Auto re-fetching / re-trying
- Parallel queries
- Dependent queries
- Caching (client-side)
- Mutations API (POST, PATCH, DELETE)

---

# React query concepts and configuration

- takes time to learn it / get use to it
- totally worth it

---

# React Query hooks (and client)

- useQuery hook
- useMutation hook
- queryClient

---

# useQuery hook configuration

- [queryKey](https://tanstack.com/query/v4/docs/react/guides/query-keys): unique key for the query
- queryFn: a function that returns a promise that resolves the data, or throws an error
- [all options](https://tanstack.com/query/v4/docs/react/reference/useQuery)

---

# useQuery hook returned values

- status (isLoading, isSuccess, isError, etc.)
- data
- error
- [all returned values](https://tanstack.com/query/v4/docs/react/reference/useQuery)

---

# useQuery code examples

1. Basic GET request
2. GET request with params
3. GET request custom hook
4. Parallel queries (GET requests)
5. Dependent queries (GET requests)

---

# useMutation hook configuration

- mutationFn: a function that returns a promise that resolves the data, or throws an error
- [all options](https://tanstack.com/query/v4/docs/react/reference/useMutation)

---

# useMutation hook returned values

- status (isLoading, isSuccess, isError, etc.)
- data
- error
- [all returned values](https://tanstack.com/query/v4/docs/react/reference/useMutation)

---

# useMutation code examples

1. Basic POST request

---

# Recap

- Complex components
- Component and code duplication
- Not using the "derived state"
- Unhandled state and errors
- Components with too many props
- Prop drilling

---

# That's all folks

### Questions / Discussions?
