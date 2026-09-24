import { useState } from "react";

const SelectRadioButtonCheckbox = () => {
  const [language, setlanguage] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState([]);

  const changeLanguage = (e) => {
    setlanguage(e.target.value);
  };

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const changeInterests = (e) => {
    const value = e.target.value;

    if (interests.includes(value)) {
      // remove interest
      const newState = interests.filter((interest) => interest !== value);

      setInterests(newState);
    } else {
      // add interest
      setInterests([...interests, value]);
    }
  };

  return (
    <div className="option-demo">
      <h2>Form events: Select, radio button and checkbox</h2>
      <div>
        <label htmlFor="language">Favorite language:</label>
        <select name="language" value={language} onChange={changeLanguage}>
          <option value="">Select language...</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Rust">Rust</option>
          <option value="PHP">PHP</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <div className="option-group">
        <h2>Gender:</h2>
        <div className="option-list">
          <label className="option-row">
            <span>Male</span>
            <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={changeGender} />
          </label>
          <label className="option-row">
            <span>Female</span>
            <input type="radio" name="gender" value="female" checked={gender === "female"} onChange={changeGender} />
          </label>
        </div>
      </div>
      <div className="option-group">
        <h2>Interests:</h2>
        <div className="option-list">
          <label className="option-row">
            <span>Programming</span>
            <input
              type="checkbox"
              name="programming"
              value="programming"
              checked={interests.includes("programming")}
              onChange={changeInterests}
            />
          </label>
          <label className="option-row">
            <span>Movies</span>
            <input
              type="checkbox"
              name="movies"
              value="movies"
              checked={interests.includes("movies")}
              onChange={changeInterests}
            />
          </label>
          <label className="option-row">
            <span>Boxing</span>
            <input
              type="checkbox"
              name="boxing"
              value="boxing"
              checked={interests.includes("boxing")}
              onChange={changeInterests}
            />
          </label>
        </div>
      </div>
      <hr />
      <div>
        <h3>{language}</h3>
        <h3>{gender}</h3>
        <ul style={{ fontSize: "20px", fontWeight: "bold" }}>
          {interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectRadioButtonCheckbox;
