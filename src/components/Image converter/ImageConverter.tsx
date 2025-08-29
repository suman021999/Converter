"use client";
import React, { useState } from "react";
import { PiPlus } from "react-icons/pi";

const ImageConverter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [format, setFormat] = useState<string>("png");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleConvert = () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    const img = new Image();
    img.src = preview as string;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);

      // Convert to chosen format
      const convertedImage = canvas.toDataURL(`image/${format}`);

      // Create download link
      const link = document.createElement("a");
      link.href = convertedImage;
      link.download = `converted.${format}`;
      link.click();
    };
  };

  return (
    <>
      <section className="w-full p-6">
        {/* Heading */}
      <h2 className="text-lg font-semibold">Image Conversion</h2>
      <p className="text-sm text-gray-500 mb-6">
        select an image file to convert it's fromat 
      </p>

        <div className="flex items-center justify-center flex-col  ">
          {/* Upload + Preview Area */}
          <label className="border-2 border-dashed p-4 h-64 w-64 flex justify-center items-center cursor-pointer relative overflow-hidden">
            {!preview ? (
              <PiPlus className="text-[20rem] text-gray-500" />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="max-h-full border-4 border-blue-500 max-w-full object-contain"
              />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {/* Format + Button */}
          <div className="w-full my-20">
            <h2 className="my-4 font-semibold">Convert to</h2>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            >
              <option value="png">PNG</option>
              <option value="jpg">JPG</option>
              <option value="jpeg">JPEG</option>
              <option value="webp">WEBP</option>
            </select>

            <button
              onClick={handleConvert}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Convert Image
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageConverter;



