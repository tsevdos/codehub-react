import useCharacters from "./useCharacters";
import Loader from "../../../components/Loader";

const CharactersListCH4 = () => {
  const [characters, isLoading] = useCharacters({
    url: "http://localhost:3001",
    format: "json",
    resource: "characters",
  });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800">
        Custom hooks 04: Return more complex data
      </h1>
      <hr className="my-3" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        {isLoading ? (
          <Loader />
        ) : (
          Boolean(characters.length) &&
          characters.map(({ id, name, culture, isFemale }) => (
            <div key={id} className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-bold text-gray-800">{name}</h3>
              <p className="text-base text-gray-800">
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
