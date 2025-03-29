import React from 'react';
import { MessageSquare, Heart, Share2 } from 'lucide-react';

const PostCard = ({
  title,
  category,
  author,
  date,
  replies,
  likes,
  isPinned,
  tags,
}) => {
  return (
    <div className="glass p-6 rounded-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        {isPinned && (
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
            📌 Pinned
          </span>
        )}
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-semibold text-green-700 hover:underline cursor-pointer">
          {title}
        </h2>
        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">
          {category}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 cursor-pointer"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between  items-center space-x-4 text-gray-500">
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <MessageSquare className="h-5 w-5" />
          <span>{replies}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <Heart className="h-5 w-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1 hover:text-gray-700">
          <Share2 className="h-5 w-5" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;