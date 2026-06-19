import { useEffect, useState, type SubmitEvent } from "react";
import "./App.css";

type ProfileData = {
    username: string;
    password: string;
    weight: number; // in kg
    height: number; // in cm
    age: number;
    passwordsMatch: boolean;
    isAdult: boolean;
    bmi: number; // Body Mass Index
}

export default function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);
    const [isAdult, setIsAdult] = useState<boolean | null>(null);
    const [bmi, setBmi] = useState<number | null>(null);
    const [submittedData, setSubmittedProfile] = useState<ProfileData | null>(null);

    useEffect(() => {
        setPasswordsMatch(password.length > 0 && confirmPassword.length > 0 && password === confirmPassword);
    }, [password, confirmPassword]);

    useEffect(() => {
        setIsAdult(age.length > 0 ? parseInt(age) >= 18 : null);
    }, [age]);

    useEffect(() => {
        setBmi(weight && height ? parseInt(weight) / Math.pow(parseInt(height) / 100, 2) : null);
    }, [weight, height]);

    const handleSubmit = (e: SubmitEvent,) => {
        e.preventDefault();
        setSubmittedProfile({
            username,
            password,
            passwordsMatch,
            weight: weight ? parseInt(weight) : 0,
            height: height ? parseInt(height) : 0,
            age: age ? parseInt(age) : 0,
            isAdult: Boolean(isAdult),
            bmi: bmi ? parseFloat(bmi.toFixed(2)) : 0,
        });
    };

    return (
        <div className="profile-container">
            <h2>Create  Form</h2>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight (kg):</label>
                        <input
                            type="text"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="height">Height (cm):</label>
                        <input
                            type="text"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="text"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
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
                        Upon form submission, the following <code>ProfileData</code> object must be sent to the API:
                    </p>
                    <pre>
                        {`{
  username: string,
  password: string,
  confirmPassword: string,
  weight: string,
  height: string,
  age: string,
  passwordsMatch: boolean,
  isAdult: boolean,
  bmi: string
}`}
                    </pre>
                    <h4>Notes:</h4>
                    <ul>
                        <li>Enable the submit button only when all required fields are not empty.</li>
                        <li>The <code>passwordsMatch</code> must be true only if the password and confirmPassword fields match.</li>
                        <li>The <code>isAdult</code> must be true if the user is equal to or over 18.</li>
                        <li>The <code>bmi (Body Mass Index)</code> is calculated from weight and height.</li>
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
                                <strong>Username:</strong> {submittedData.username}
                            </p>
                            <p>
                                <strong>Passwords Match:</strong> {submittedData.passwordsMatch ? 'true' : 'false'}
                            </p>
                            <p>
                                <strong>Weight:</strong> {submittedData.weight} kg
                            </p>
                            <p>
                                <strong>Height:</strong> {submittedData.height} cm
                            </p>
                            <p>
                                <strong>Age:</strong> {submittedData.age}
                            </p>

                            <p>
                                <strong>Is Adult:</strong> {submittedData.isAdult ? 'true' : 'false'}
                            </p>
                            <p>
                                <strong>BMI:</strong> {submittedData.bmi}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
