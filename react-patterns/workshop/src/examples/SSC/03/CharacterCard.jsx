const CharacterCard = ({ name, culture, isFemale }) => (
  <div className="character-card">
    <h3 className="character-name">{name}</h3>
    <p className="character-details">
      {culture} / {isFemale ? "female" : "male"}
    </p>
  </div>
);

export default CharacterCard;
