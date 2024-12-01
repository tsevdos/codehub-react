"use client";

import { FC, useState, ChangeEvent, FormEvent } from "react";
import UserCard from "@/components/UserCard";
import { UsersResponse } from "@/types/Users";

async function searchStarWarsPeople(name: string) {
  try {
    const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

const FormSubmit: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [people, setPeople] = useState<UsersResponse | null>(null);

  const updateName = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const swRes = await searchStarWarsPeople(searchTerm);
    setSearchTerm("");
    setPeople(swRes);
  };

  return (
    <div className="flex flex-col bg-gray-900 text-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Star Wars search!</h2>

      <form onSubmit={handleSearch} className="w-full max-w-md mb-8">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Search Star Wars characters:
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="name"
              value={searchTerm}
              onChange={updateName}
              className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
              placeholder="Search Star Wars characters..."
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search!
            </button>
          </div>
        </div>
      </form>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Boolean(people?.results.length) &&
          people?.results.map((person) => (
            <UserCard
              key={person.url}
              id={person.url.split("/").filter(Boolean).pop() ?? ""}
              {...person}
            />
          ))}
      </div>
    </div>
  );
};

export default FormSubmit;
