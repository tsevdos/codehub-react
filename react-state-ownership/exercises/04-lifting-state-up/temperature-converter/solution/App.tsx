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

type TemperatureInputProps = {
  scale: "c" | "f";
  temperature: string;
  onTemperatureChange: (temperature: string) => void;
};

function TemperatureInput({
  scale,
  temperature,
  onTemperatureChange,
}: TemperatureInputProps) {
  const label = scale === "c" ? "Celsius" : "Fahrenheit";

  return (
    <label className="field">
      {label}
      <input
        className="field-input"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
        placeholder={scale === "c" ? "0" : "32"}
      />
    </label>
  );
}

function BoilingVerdict({ celsius }: { celsius: string }) {
  if (!celsius) {
    return <p>Enter a temperature to see if water would boil.</p>;
  }

  return Number(celsius) >= 100 ? (
    <p>Water would boil.</p>
  ) : (
    <p>Water would not boil.</p>
  );
}

export default function App() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState<"c" | "f">("c");

  const celsius = scale === "f" ? toCelsius(temperature) : temperature;
  const fahrenheit = scale === "c" ? toFahrenheit(temperature) : temperature;

  return (
    <div className="exercise-shell converter-shell">
      <h1>Temperature Converter</h1>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={(value) => {
          setScale("c");
          setTemperature(value);
        }}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={(value) => {
          setScale("f");
          setTemperature(value);
        }}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}
