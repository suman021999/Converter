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
      <section className="w-full p-4">
        <p className="text-xl font-light">
          select an image file to convert it's from
        </p>

        <div className="flex items-center justify-center flex-col mt-20">
          {/* Upload + Preview Area */}
          <label className="border-2 border-dashed p-4 h-64 w-64 flex justify-center items-center cursor-pointer relative overflow-hidden">
            {!preview ? (
              <PiPlus className="text-[20rem] text-gray-500" />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="max-h-full max-w-full object-contain"
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
              <option value="gif">GIF</option>
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



// "use client";
// import React, { useState } from "react";

// const ImageConverter = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [format, setFormat] = useState("png");

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSelectedFile(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleConvert = () => {
//     if (!selectedFile) {
//       alert("Please select an image first!");
//       return;
//     }

//     const img = new Image();
//     img.src = preview;
//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);

//       // Convert to chosen format
//       const convertedImage = canvas.toDataURL(`image/${format}`);

//       // Create download link
//       const link = document.createElement("a");
//       link.href = convertedImage;
//       link.download = `converted.${format}`;
//       link.click();
//     };
//   };

//   return (
//     <section className="w-full p-4 flex flex-col items-center">
//       <p className="text-xl font-light mb-6">
//         Upload an image file and convert it to another format
//       </p>

//       {/* Upload & Preview */}
//       <div className="bg-gray-100 flex flex-col items-center justify-center p-6 rounded-lg shadow-md">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4"
//         />

//         {preview && (
//           <div className="border-2 border-dashed h-64 w-64 flex items-center justify-center mb-4">
//             <img
//               src={preview}
//               alt="preview"
//               className="max-h-full max-w-full object-contain"
//             />
//           </div>
//         )}

//         {/* Format Selection */}
//         <div className="mb-4">
//           <label className="mr-2">Convert To:</label>
//           <select
//             value={format}
//             onChange={(e) => setFormat(e.target.value)}
//             className="border p-2 rounded"
//           >
//             <option value="png">PNG</option>
//             <option value="jpeg">JPEG</option>
//             <option value="webp">WEBP</option>
//           </select>
//         </div>

//         {/* Convert Button */}
//         <button
//           onClick={handleConvert}
//           className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
//         >
//           Convert Image
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ImageConverter;
