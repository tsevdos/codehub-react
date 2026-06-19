import { useState, type SubmitEvent, } from "react";
import "./App.css";

type ProfileData = {
    fullname: string;
    username: string;
    netSalary: string;
    grossSalary: string;
}

export default function App() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [grossSalary, setGrossSalary] = useState("");
    const [submittedData, setSubmittedProfile] = useState<ProfileData | null>(null);

    const handleSubmit = (e: SubmitEvent,) => {
        e.preventDefault();
        setSubmittedProfile({
            fullname: `${name} ${surname}`,
            username: `${name.toLowerCase()[0]}${surname.toLowerCase()}`,
            netSalary: grossSalary ? (parseFloat(grossSalary) * 0.75).toString() : "",
            grossSalary,
        });
    };

    return (
        <div className="profile-container">
            <h2>Profile Form</h2>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">Surname:</label>
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="grossSalary">Gross Salary:</label>
                        <input
                            type="text"
                            id="grossSalary"
                            value={grossSalary}
                            onChange={(e) => setGrossSalary(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>

                <div className="api-info-card">
                    <h3>API Submission</h3>
                    <p>
                        Upon form submission, the following <code>ProfileData</code> object must be sent to our the API:
                    </p>
                    <pre>
                        {`{
  fullname: string,
  username: string,
  netSalary: string,
  grossSalary: string
}`}
                    </pre>
                    <h4>Notes:</h4>
                    <ul>
                        <li>The username is an all lowercase combination of the first letter of the name, followed by the last name (again lowercase).</li>
                        <li>The tax on the gross is 25% (to keep it simple).</li>
                    </ul>
                </div>
            </div>

            {submittedData && (
                <>
                    <hr />
                    <div className="profile-display">
                        <h3>Profile Information</h3>
                        <div className="profile-info">
                            <p>
                                <strong>Fullname:</strong> {submittedData.fullname}
                            </p>
                            <p>
                                <strong>Username:</strong> {submittedData.username}
                            </p>
                            <p>
                                <strong>Net Salary:</strong> {submittedData.netSalary}
                            </p>
                            <p>
                                <strong>Gross Salary:</strong> {submittedData.grossSalary}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
