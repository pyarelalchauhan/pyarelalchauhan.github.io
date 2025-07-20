"use client";
import React, { useRef } from "react";
import { MdCloseFullscreen } from "react-icons/md";
import { MdOpenInFull } from "react-icons/md";

interface NewsCardProps {
  imageSrc: string;
  altText: string;
  subtitle: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  altText = "Sample Alt Text",
  subtitle = "Sample subtitle for the image card",
  date = "Oct 24, 2025",
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return (
    <>
      {/* Card */}
      <div className="bg-white shadow rounded-lg overflow-hidden relative">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h4 className="text-base font-medium text-gray-700 mb-2">
            <span className="rounded bg-gray-200 px-1.5 py-0.5 mr-2 text-sm text-gray-600">
              {date}
            </span>
            {subtitle}
          </h4>
          <button
            aria-label="Open image modal"
            title="Open"
            onClick={openModal}
            className="text-sm text-blue-600 hover:underline absolute top-[0.5rem] right-[0.5rem] bg-white border-black border-2 p-[4px] rounded"
          >
            <MdOpenInFull />
          </button>
        </div>
      </div>

      {/* Native HTML dialog with custom backdrop */}
      <dialog
        ref={dialogRef}
        className="rounded-lg p-0 border-none max-w-5xl w-full backdrop:bg-black backdrop:bg-opacity-80 m-auto"
        style={{
          maxHeight: "90vh",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <div className="relative bg-black bg-opacity-90 p-4 rounded">
          <button
            aria-label="Close image modal"
            title="Close"
            onClick={closeModal}
            className="absolute top-2 right-4 text-white text-2xl font-bold"
          >
            <MdCloseFullscreen />
          </button>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full max-h-[80vh] object-contain mx-auto rounded"
          />
        </div>
      </dialog>

      <style jsx>{`
        dialog::backdrop {
          background: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </>
  );
};

export default NewsCard;
