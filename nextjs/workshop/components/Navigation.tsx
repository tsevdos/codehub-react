import { FC } from "react";
import Link from "next/link";
import { URLS } from "@/lib/constants";

const { root, users, entities, about, pricing, todos, admin, forms, cssModules } = URLS;

const Navigation: FC = () => (
  <nav className="bg-gray-800 text-white p-4 shadow-md">
    <div className="w-full flex justify-between items-center">
      <div className="text-lg font-semibold">
        <Link href={root}>Next.js workshop</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href={users} className="hover:text-gray-400">
            Users
          </Link>
        </li>
        <li>
          <Link href={`${entities}/people/1`} className="hover:text-gray-400">
            Entity
          </Link>
        </li>
        <li>
          <Link href={about} className="hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href={pricing} className="hover:text-gray-400">
            Pricing
          </Link>
        </li>
        <li>
          <Link href={todos} className="hover:text-gray-400">
            Todos
          </Link>
        </li>
        <li>
          <Link href={admin} className="hover:text-gray-400">
            Admin
          </Link>
        </li>
        <li>
          <Link href={forms} className="hover:text-gray-400">
            Forms
          </Link>
        </li>
        <li>
          <Link href={cssModules} className="hover:text-gray-400">
            CSS modules
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
