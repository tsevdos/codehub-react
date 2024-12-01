"use client";

import { FC, useState, ChangeEvent } from "react";

const SelectRadioButtonCheckbox: FC = () => {
  const [language, setlanguage] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState<string[]>([]);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    setlanguage(e.target.value);
  };

  const changeGender = (e: ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const changeInterests = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (interests.includes(value)) {
      // remove interest
      const newState = interests.filter((interest) => interest !== value);

      setInterests(newState);
    } else {
      // add interest
      setInterests([...interests, value]);
    }
  };

  return (
    <div className="flex flex-col bg-gray-900 text-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Form events: select, radio button and checkbox</h2>
      <hr className="w-full border-gray-700 mb-6" />

      <div className="w-full max-w-md mb-4">
        <label htmlFor="language" className="block text-sm font-medium mb-2">
          Favorite language:
        </label>
        <select
          name="language"
          value={language}
          onChange={changeLanguage}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="">Select language...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Rust">Rust</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
        </select>
      </div>

      <hr className="w-full border-gray-700 my-6" />

      <div className="w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Gender:</h2>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={changeGender}
              className="mr-2"
            />
            Male
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={changeGender}
              className="mr-2"
            />
            Female
          </label>
        </div>
      </div>

      <hr className="w-full border-gray-700 my-6" />

      <div className="w-full max-w-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Interests:</h2>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="programming"
              value="programming"
              checked={interests.includes("programming")}
              onChange={changeInterests}
              className="mr-2"
            />
            Programming
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="movies"
              value="movies"
              checked={interests.includes("movies")}
              onChange={changeInterests}
              className="mr-2"
            />
            Movies
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              name="boxing"
              value="boxing"
              checked={interests.includes("boxing")}
              onChange={changeInterests}
              className="mr-2"
            />
            Boxing
          </label>
        </div>
      </div>

      <hr className="w-full border-gray-700 my-6" />

      <div className="w-full max-w-md">
        <h3 className="text-xl font-semibold mb-2">{language}</h3>
        <h3 className="text-xl font-semibold mb-2">{gender}</h3>
        <ul className="text-lg font-bold">
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectRadioButtonCheckbox;
