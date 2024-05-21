import CharactersList from "./CharactersList";
import Loader from "../../../components/Loader";

const App = () => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800">
      Render props 05: Children render prop
    </h1>
    <hr className="my-3" />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
      <CharactersList
        url="http://localhost:3001"
        format="json"
        resource="characters"
      >
        {(characters, isLoading) =>
          isLoading ? (
            <Loader />
          ) : (
            characters.map(({ id, name, culture, isFemale }) => (
              <div key={id} className="bg-gray-200 p-4 rounded">
                <h3 className="text-lg font-bold text-gray-800">{name}</h3>
                <p className="text-base text-gray-800">
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
