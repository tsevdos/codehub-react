import CharactersList from "./CharactersList";
import Loader from "../../../components/Loader";

const App = () => (
  <div>
    <h1 className="demo-title">Render props 05: Children render prop</h1>
    <hr className="demo-divider" />
    <div className="character-grid">
      <CharactersList url="http://localhost:3001" format="json" resource="characters">
        {(characters, isLoading) =>
          isLoading ? (
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
          )
        }
      </CharactersList>
    </div>
  </div>
);

export default App;
