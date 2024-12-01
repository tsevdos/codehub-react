import type { ReactNode } from "react";
import type { Metadata } from "next";

type UsersLayoutProps = Readonly<{ children: ReactNode }>;

export const metadata: Metadata = {
  title: "Users",
  description: "Star wars characters",
};

const UsersLayout = ({ children }: UsersLayoutProps) => (
  <>
    <h1 className="text-4xl mb-4">Users</h1>
    {children}
  </>
);

export default UsersLayout;
