import { useState, useEffect } from "react";

const CharactersListCH = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Custom hooks 01: Starting Point
      </h1>
      <hr className="my-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {Boolean(characters.length) &&
          characters.map(({ id, name, culture, isFemale }) => (
            <div key={id} className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-bold text-gray-800">{name}</h3>
              <p className="text-base text-gray-800">
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharactersListCH;
