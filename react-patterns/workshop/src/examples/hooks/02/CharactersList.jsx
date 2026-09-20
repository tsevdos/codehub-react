import useCharacters from "./useCharacters";

const CharactersListCH2 = () => {
  const characters = useCharacters();

  return (
    <div>
      <h1 className="demo-title">Custom hooks 02: Simple custom hook</h1>
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

export default CharactersListCH2;
