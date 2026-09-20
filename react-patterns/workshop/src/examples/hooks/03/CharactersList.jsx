import useCharacters from "./useCharacters";

const CharactersListCH3 = () => {
  const characters = useCharacters({
    url: "http://localhost:3001",
    resource: "characters",
    format: "json",
  });

  return (
    <div>
      <h1 className="demo-title">Custom hooks 03: Pass parameters to custom hook</h1>
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

export default CharactersListCH3;
