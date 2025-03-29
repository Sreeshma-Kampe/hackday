import React from 'react';

const CategoryCard = ({
  icon,
  title,
  description,
  color,
  postCount,
  onClick,
}) => {
  return (
    <div
      className={`${color} rounded-xl p-6 transition-transform hover:scale-102 hover:shadow-lg cursor-pointer`}
      onClick={onClick}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          {postCount.toLocaleString()} posts
        </span>
        <span className="text-sm bg-white bg-opacity-30 px-3 py-1 rounded-full">
          View →
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;