import CharactersList from "./CharactersList";

const App = () => (
  <div>
    <h1 className="demo-title">Render props 03: Render prop with many props</h1>
    <hr className="demo-divider" />
    <div className="character-grid">
      <CharactersList
        url="http://localhost:3001"
        resource="characters"
        format="json"
        render={(characters) =>
          Boolean(characters.length) &&
          characters.map(({ id, name, culture, isFemale }) => (
            <div key={id} className="character-card">
              <h3 className="character-name">{name}</h3>
              <p className="character-details">
                {culture} / {isFemale ? "female" : "male"}
              </p>
            </div>
          ))
        }
      />
    </div>
  </div>
);

export default App;
