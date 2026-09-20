import CharacterCard from "./CharacterCard";

const CharactersList = ({ characters, title }) => (
  <div>
    <h1 className="demo-title">{title}</h1>
    <hr className="demo-divider" />
    <div className="character-grid">
      {Boolean(characters.length) && characters.map((character) => <CharacterCard key={character.id} {...character} />)}
    </div>
  </div>
);

export default CharactersList;
