const CharactersList = ({ characters }) => (
  <div>
    <h1 className="text-2xl font-bold text-gray-800">
      SSC 02: Stateful and stateless components
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

export default CharactersList;
