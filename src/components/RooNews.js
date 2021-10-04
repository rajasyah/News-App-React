import React from "react";

const RooNews = ({ article }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={article.urlToImage} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          {article.title}
        </div>
        <ul>
          <li>
            <strong>author : </strong>
            {article.author} & {article.publishedAt}
          </li>
        </ul>
        <div className="px-4 py-2 bg-blue-600 cursor-pointer text-white rounded-lg">
          Read More
        </div>
      </div>
    </div>
  );
};

export default RooNews;
