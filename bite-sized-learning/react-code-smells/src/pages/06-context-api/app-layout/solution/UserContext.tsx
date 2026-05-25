import { createContext, useContext, type ReactNode } from "react";

export type User = {
  JWT: string;
  username: string;
  name: string;
  admin: boolean;
  imgPath: string;
};

type UserContextType = User | null;

const UserContext = createContext<UserContextType>(null);

type UserProviderProps = {
  user: User;
  children: ReactNode;
};

export function UserProvider({ user, children }: UserProviderProps) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
