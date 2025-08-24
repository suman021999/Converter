"use client";
import React, { useState } from "react";

const DocumentConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fromFormat, setFromFormat] = useState<string>("PDF");
  const [toFormat, setToFormat] = useState<string>("PDF");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleConvert = () => {
    if (!file) {
      alert("Please upload a file first!");
      return;
    }

    // 🔹 Simulate conversion by creating a dummy Blob
    const blob = new Blob([`Converted ${file.name} to ${toFormat}`], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);

    // 🔹 Auto-trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = `converted.${toFormat.toLowerCase()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`Converted ${file.name} from ${fromFormat} to ${toFormat}`);
  };

  return (
    <div className="w-full p-6">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Document Conversion</h1>
      <p className="text-gray-500 mb-6">
        Upload your document and select the desired output format.
      </p>

      {/* Upload Document */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload Document</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        />
      </div>

      {/* From Format */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">From Format</label>
        <select
          value={fromFormat}
          onChange={(e) => setFromFormat(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option>PDF</option>
          <option>DOCX</option>
          <option>TXT</option>
        </select>
      </div>

      {/* To Format */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">To Format</label>
        <select
          value={toFormat}
          onChange={(e) => setToFormat(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
        >
          <option>PDF</option>
          <option>DOCX</option>
          <option>TXT</option>
        </select>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md"
      >
        Convert Document
      </button>
    </div>
  );
};

export default DocumentConverter;



