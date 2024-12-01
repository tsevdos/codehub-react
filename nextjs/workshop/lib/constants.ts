export const URLS = {
  root: "/",
  users: "/users",
  user: (id: string) => `/users/${id}`,
  entities: "/entities",
  about: "/about",
  pricing: "/pricing",
  todos: "/todos",
  admin: "/admin",
  forms: "/forms/input-and-text-area",
  cssModules: "/css-modules",
} as const;
