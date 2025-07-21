"use client";
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import newsData from "../homepage/news.json"; // adjust path as needed

const NewsSection: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const MIN_ITEMS = 5;

  const visibleNews = showAll ? newsData : newsData.slice(0, MIN_ITEMS);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {visibleNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>

      {newsData.length > MIN_ITEMS && (
        <div className="text-center">
          <button
            title="Show more"
            aria-label="Show more button"
            onClick={() => setShowAll((prev) => !prev)}
            className="text-gray-600 font-bold text-sm sm:text-base hover:underline rounded bg-gray-200 p-2 w-full"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </>
  );
};

export default NewsSection;
