const CharacterCard = ({ name, culture, isFemale }) => (
  <div className="bg-gray-200 p-4 rounded">
    <h3 className="text-lg font-bold text-gray-800">{name}</h3>
    <p className="text-base text-gray-800">
      {culture} / {isFemale ? "female" : "male"}
    </p>
  </div>
);

export default CharacterCard;
