// "use client"
// import React from 'react'

// const TempratureConverter = () => {
//   return (
//     <>
//       <section className=' w-full'>
//         temprature
//       </section>
//     </>
//   )
// }

// export default TempratureConverter


"use client";
import React, { useState, useEffect } from "react";

const TemperatureConverter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("Celsius");
  const [toUnit, setToUnit] = useState<string>("Celsius");
  const [convertedValue, setConvertedValue] = useState<string>("");

  const units = ["Celsius", "Fahrenheit", "Kelvin"];

  // Conversion logic
  const convertTemperature = (val: number, from: string, to: string): number => {
    if (from === to) return val;

    let celsius: number;

    // Convert input to Celsius first
    switch (from) {
      case "Celsius":
        celsius = val;
        break;
      case "Fahrenheit":
        celsius = ((val - 32) * 5) / 9;
        break;
      case "Kelvin":
        celsius = val - 273.15;
        break;
      default:
        celsius = val;
    }

    // Convert from Celsius to target unit
    switch (to) {
      case "Celsius":
        return celsius;
      case "Fahrenheit":
        return (celsius * 9) / 5 + 32;
      case "Kelvin":
        return celsius + 273.15;
      default:
        return celsius;
    }
  };

  // Auto update converted value
  useEffect(() => {
    if (value === "" || isNaN(Number(value))) {
      setConvertedValue("");
      return;
    }

    const result = convertTemperature(Number(value), fromUnit, toUnit);
    setConvertedValue(result.toFixed(2)); // round to 2 decimals
  }, [value, fromUnit, toUnit]);

  return (
    <section className="w-full p-6">
      {/* Heading */}
      <h2 className="text-lg font-semibold">Temperature Conversion</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter a value and select units to convert temperature.
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-2">
        {/* Input Value */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Value</label>
          <input
            type="number"
            placeholder="Enter value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Converted Value */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Converted Value</label>
          <input
            type="text"
            value={convertedValue}
            readOnly
            className="w-full border rounded-md px-3 py-2 text-sm bg-gray-100 cursor-not-allowed"
          />
        </div>
      </div>

      {/* From Unit */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">From Unit</label>
        <select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>

      {/* To Unit */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">To Unit</label>
        <select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {units.map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default TemperatureConverter;
