import { useState } from "react";

function toCelsius(fahrenheit: string) {
  const value = Number(fahrenheit);

  if (Number.isNaN(value)) {
    return "";
  }

  return (((value - 32) * 5) / 9).toFixed(1);
}

function toFahrenheit(celsius: string) {
  const value = Number(celsius);

  if (Number.isNaN(value)) {
    return "";
  }

  return ((value * 9) / 5 + 32).toFixed(1);
}

function CelsiusInput() {
  const [temperature, setTemperature] = useState("");

  return (
    <label className="field">
      Celsius
      <input
        className="field-input"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="0"
      />
      <p className="preview-text">
        Fahrenheit preview: {toFahrenheit(temperature)}
      </p>
    </label>
  );
}

function FahrenheitInput() {
  const [temperature, setTemperature] = useState("");

  return (
    <label className="field">
      Fahrenheit
      <input
        className="field-input"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="32"
      />
      <p className="preview-text">Celsius preview: {toCelsius(temperature)}</p>
    </label>
  );
}

export default function App() {
  return (
    <div className="exercise-shell converter-shell">
      <h1>Temperature Converter</h1>
      <CelsiusInput />
      <FahrenheitInput />
    </div>
  );
}
