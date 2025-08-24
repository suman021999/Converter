"use client";
import React, { useState, useEffect } from "react";

const WeightConverter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("Kilograms");
  const [toUnit, setToUnit] = useState<string>("Kilograms");
  const [convertedValue, setConvertedValue] = useState<string>("");

  // Conversion factors (to kilograms)
  const conversionRates: Record<string, number> = {
    Kilograms: 1,
    Grams: 0.001,
    Milligrams: 0.000001,
    MetricTons: 1000,
    Pounds: 0.453592,
    Ounces: 0.0283495,
    Stones: 6.35029,
    "Long Ton": 1016.0469088,
    "Short Ton": 907.18474,
    Carat: 0.0002,
    "Atomic Mass Unit": 1.6605390666e-27,
  };

  // Auto update converted value when inputs change
  useEffect(() => {
    if (value === "" || isNaN(Number(value))) {
      setConvertedValue("");
      return;
    }

    const kilograms = Number(value) * conversionRates[fromUnit];
    const result = kilograms / conversionRates[toUnit];
    setConvertedValue(result.toString());
  }, [value, fromUnit, toUnit]);

  return (
    <section className="w-full p-6">
      {/* Heading */}
      <h2 className="text-lg font-semibold">Weight Conversion</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter a value and select units to convert weight.
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
          <label className="block text-sm font-medium mb-1">
            Converted Value
          </label>
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
          {Object.keys(conversionRates).map((unit) => (
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
          {Object.keys(conversionRates).map((unit) => (
            <option key={unit}>{unit}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default WeightConverter;

