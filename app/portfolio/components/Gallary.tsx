"use client";
import React, { useState } from "react";

type ImageItem = {
  title: string;
  alt: string;
  imagePath: string;
};

type ImageGalleryProps = {
  data: ImageItem[];
  layout?: "grid" | "flex"; // default: grid
  columns?: number; // grid columns
  gap?: string; // gap classes
  width?: string; // width for each item
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  data,
  layout = "grid",
  columns = 3,
  gap = "gap-4",
  width = "w-full sm:w-1/2 md:w-1/3",
}) => {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <>
      {/* Gallery Container */}
      <div
        className={
          layout === "grid"
            ? `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} ${gap}`
            : `flex flex-wrap ${gap}`
        }
      >
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden rounded-lg border border-gray-300 shadow-sm ${layout === "flex" ? width : ""}`}
          >
            {/* Image */}
            <img
              src={item.imagePath}
              alt={item.alt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <button
                className="bg-white text-black px-4 py-2 rounded-lg font-medium shadow-md hover:bg-gray-200"
                onClick={() => setSelectedImage(item)}
              >
                View
              </button>
            </div>

            {/* Title */}
            <p className="text-center text-sm mt-2">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage.imagePath}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
