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
      <h1 className="demo-title">Custom hooks 01: Starting Point</h1>
      <hr className="demo-divider" />
      <div className="character-grid">
        {Boolean(characters.length) &&
          characters.map(({ id, name, culture, isFemale }) => (
            <div key={id} className="character-card">
              <h3 className="character-name">{name}</h3>
              <p className="character-details">
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CharactersListCH;
