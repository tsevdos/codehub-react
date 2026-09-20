import useCharacters from "./useCharacters";
import Loader from "../../../components/Loader";

const CharactersListCH4 = () => {
  const [characters, isLoading] = useCharacters({
    url: "http://localhost:3001",
    resource: "characters",
    format: "json",
  });

  return (
    <div>
      <h1 className="demo-title">Custom hooks 04: Return more complex data</h1>
      <hr className="demo-divider" />
      <div className="character-grid">
        {isLoading ? (
          <Loader />
        ) : (
          characters.map(({ id, name, culture, isFemale }) => (
            <div key={id} className="character-card">
              <h3 className="character-name">{name}</h3>
              <p className="character-details">
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CharactersListCH4;
