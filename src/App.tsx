import React from 'react';
import Sidebar from './components/Sidebar';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Trending from './components/Trending';

const posts = [
  {
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just deployed my new React application! 🚀 The future of web development is here. #reactjs #webdev',
    timestamp: '2h',
    likes: 142,
    replies: 12,
    reposts: 28,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    username: 'Jane Smith',
    handle: 'janesmith',
    content: 'Beautiful morning in San Francisco! Starting the day with a cup of coffee and some coding. ☕️ #techllife #sf',
    timestamp: '4h',
    likes: 234,
    replies: 18,
    reposts: 42,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto flex">
        <div className="w-64 flex-shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 border-x border-gray-100 min-h-screen">
          <h1 className="text-xl font-bold p-4 backdrop-blur bg-white/80 sticky top-0 border-b border-gray-100">
            My Timeline
          </h1>
          <NewPost />
          <div className="divide-y divide-gray-100">
            {posts.map((post, index) => (
              <Post key={index} {...post} />
            ))}
          </div>
        </div>
        <div className="w-96 pl-4">
          <div className="sticky top-0">
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;