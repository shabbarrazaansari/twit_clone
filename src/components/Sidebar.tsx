import React from 'react';
import { Home, Search, Bell, Mail, Bookmark, User, Settings, Twitter } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Explore' },
    { icon: Bell, label: 'Notifications' },
    { icon: Mail, label: 'Messages' },
    { icon: Bookmark, label: 'Bookmarks' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="fixed h-screen flex flex-col p-4 space-y-4">
      <div className="p-2 hover:bg-blue-50 rounded-full w-fit transition-colors">
        <Twitter className="w-8 h-8 text-blue-500" />
      </div>
      {menuItems.map((item) => (
        <button
          key={item.label}
          className={`flex items-center space-x-4 p-3 rounded-full transition-colors hover:bg-gray-100 ${
            item.active ? 'font-bold' : ''
          }`}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-xl hidden xl:inline">{item.label}</span>
        </button>
      ))}
      <button className="bg-blue-500 text-white rounded-full py-3 px-6 font-bold hover:bg-blue-600 transition-colors mt-4">
        <span className="hidden xl:inline">Post</span>
        <span className="xl:hidden">+</span>
      </button>
    </div>
  );
}