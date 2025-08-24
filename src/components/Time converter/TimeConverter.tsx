"use client";
import React, { useState, useEffect } from "react";

const TimeConverter: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("Second");
  const [toUnit, setToUnit] = useState<string>("Second");
  const [convertedValue, setConvertedValue] = useState<string>("");

  // Conversion factors (to seconds)
  const conversionRates: Record<string, number> = {
    Nanosecond: 1e-9,
    Microsecond: 1e-6,
    Millisecond: 1e-3,
    Second: 1,
    Minute: 60,
    Hour: 3600,
    Day: 86400,
    Week: 604800,
    Month: 2629800, // avg month = 30.44 days
    Year: 31557600, // avg year = 365.25 days
    Picosecond: 1e-12,
  };

  // Auto update converted value when inputs change
  useEffect(() => {
    if (value === "" || isNaN(Number(value))) {
      setConvertedValue("");
      return;
    }

    const seconds = Number(value) * conversionRates[fromUnit];
    const result = seconds / conversionRates[toUnit];
    setConvertedValue(result.toString());
  }, [value, fromUnit, toUnit]);

  return (
    <section className="w-full p-6">
      {/* Heading */}
      <h2 className="text-lg font-semibold">Time Conversion</h2>
      <p className="text-sm text-gray-500 mb-6">
        Enter a value and select units to convert time.
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
            type="number"
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

export default TimeConverter;

