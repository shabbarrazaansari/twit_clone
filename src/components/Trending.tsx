import React from 'react';
import { Search } from 'lucide-react';

export default function Trending() {
  const trends = [
    { category: 'Technology', title: 'React 19', posts: '125K' },
    { category: 'Sports', title: 'World Cup', posts: '85K' },
    { category: 'Entertainment', title: 'New Movie Release', posts: '54K' },
    { category: 'Politics', title: 'Latest Updates', posts: '42K' },
  ];

  const suggestions = [
    {
      name: 'Sarah Johnson',
      handle: 'sarahj',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Alex Chen',
      handle: 'alexc',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="w-80 p-4 space-y-4">
      <div className="sticky top-0 bg-white pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Trends for you</h2>
        {trends.map((trend) => (
          <div key={trend.title} className="py-3 hover:bg-gray-100 cursor-pointer rounded-lg px-2">
            <p className="text-sm text-gray-500">{trend.category}</p>
            <p className="font-bold">{trend.title}</p>
            <p className="text-sm text-gray-500">{trend.posts} posts</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <h2 className="font-bold text-xl mb-4">Who to follow</h2>
        {suggestions.map((suggestion) => (
          <div key={suggestion.handle} className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-3">
              <img src={suggestion.avatar} alt={suggestion.name} className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-bold">{suggestion.name}</p>
                <p className="text-gray-500">@{suggestion.handle}</p>
              </div>
            </div>
            <button className="bg-black text-white rounded-full px-4 py-2 text-sm font-bold hover:bg-gray-800">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}