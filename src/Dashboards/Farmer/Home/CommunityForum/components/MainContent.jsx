import React from 'react';
import CategoryCard from './CategoryCard';
import PostCard from './PostCard';
import { Menu } from "lucide-react";

const CATEGORIES = [
  {
    icon: '📢',
    title: 'General Discussions',
    description: 'Share your farming experiences, ask questions, and connect with fellow farmers',
    color: 'bg-blue-200',
    postCount: 1234,
  },
  {
    icon: '🌾',
    title: 'Crop & Soil Management',
    description: 'Tips and discussions about crop cultivation and soil health management',
    color: 'bg-green-200',
    postCount: 856,
  },
  {
    icon: '🚜',
    title: 'Equipment & Techniques',
    description: 'Modern farming equipment, techniques, and technology discussions',
    color: 'bg-yellow-200',
    postCount: 654,
  },
  {
    icon: '🦠',
    title: 'Pest & Disease Control',
    description: 'Solutions for pest problems and disease management in crops',
    color: 'bg-red-200',
    postCount: 432,
  },
  {
    icon: '🌧️',
    title: 'Weather & Climate Updates',
    description: 'Weather forecasts, climate change impacts, and adaptation strategies',
    color: 'bg-purple-200',
    postCount: 321,
  },
  {
    icon: '💡',
    title: 'Farming Innovations',
    description: 'Latest agricultural innovations, research, and smart farming practices',
    color: 'bg-orange-100 hover:bg-orange-200',
    postCount: 567,
  },
  {
    icon: '🏆',
    title: 'Success Stories',
    description: 'Inspiring success stories and achievements from our farming community',
    color: 'bg-indigo-100 hover:bg-indigo-200',
    postCount: 234,
  },
];

const SAMPLE_POSTS = [
  {
    title: "Best practices for organic pest control in tomato farming",
    category: "Pest Control",
    author: {
      name: "Mallesh",
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1743194163/503e47aa32e5de7e8b4bc5f119ae6e5c_qkcvx7.jpg",
    },
    date: "2 hours ago",
    replies: 23,
    likes: 45,
    isPinned: true,
    tags: ["Organic", "Tomatoes", "PestControl"],
  },
  {
    title: "New irrigation techniques for water conservation",
    category: "Innovation",
    author: {
      name: "Hema Latha",
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1743194175/b65c6af8716611ba0ab58f048b5f054a_kf5nlx.jpg",
    },
    date: "5 hours ago",
    replies: 15,
    likes: 32,
    tags: ["Irrigation", "WaterConservation"],
  },
  {
    title: "Soil testing methods for better crop yield",
    category: "Soil Management",
    author: {
      name: "Yadhaya",
      image: "https://res.cloudinary.com/doyh3fqr5/image/upload/v1743194179/91ac5704e2eda1ab1f504c7b03a9e455_t4qdyb.jpg",
    },
    date: "1 day ago",
    replies: 42,
    likes: 67,
    tags: ["SoilHealth", "Testing", "Yield"],
  },
];

const MainContent = ({ selectedCategory, setSelectedCategory }) => {
  if (!selectedCategory) {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to the Farmers' Community Forum
        </h2>
        <div className="absolute left-0 p-2">
          <button className="lg:hidden p-2">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className=" p-6 rounded-xl">

          <p className="text-gray-600 mb-8">
            Select a category below to join discussions, share your knowledge, and connect with fellow farmers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                onClick={() => setSelectedCategory(category.title)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 ">
      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            {selectedCategory}
          </h2>
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Back to Categories
          </button>
        </div>
        <div className="space-y-4">
          {SAMPLE_POSTS.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;