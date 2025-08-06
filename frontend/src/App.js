import React, { useState } from "react";
import "./App.css";
import { 
  Header, 
  Stories, 
  Post, 
  ChatItem, 
  ProfileHeader, 
  ProfileGrid, 
  BottomNavigation,
  mockPosts,
  mockChats,
  currentUser
} from "./components";

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked, 
            likes: post.isLiked ? post.likes - 1 : post.likes + 1 
          }
        : post
    ));
  };

  const handleComment = (postId) => {
    console.log('Comment on post:', postId);
    // In a real app, this would open a comment modal
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="pt-16 pb-16">
            <Stories />
            <div className="bg-gray-50">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  post={post}
                  onLike={handleLike}
                  onComment={handleComment}
                />
              ))}
            </div>
          </div>
        );
      
      case 'search':
        return (
          <div className="pt-16 pb-16">
            <div className="p-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-gray-100 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1">
              {posts.map((post) => (
                <div key={post.id} className="aspect-square">
                  <img
                    src={post.image}
                    alt="Search result"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'add':
        return (
          <div className="pt-16 pb-16 flex items-center justify-center bg-gray-50 min-h-screen">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create New Post</h3>
              <p className="text-gray-600 mb-6">Share a photo or video</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold">
                Select from Camera Roll
              </button>
            </div>
          </div>
        );
      
      case 'chat':
        return (
          <div className="pt-16 pb-16">
            <div className="bg-white">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Messages</h2>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {mockChats.map((chat) => (
                  <ChatItem key={chat.id} chat={chat} />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="pt-16 pb-16 bg-gray-50">
            <ProfileHeader user={currentUser} />
            <div className="mt-4">
              <div className="flex border-b border-gray-200 bg-white">
                <button className="flex-1 py-3 text-center border-b-2 border-black">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="flex-1 py-3 text-center text-gray-400">
                  <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z" />
                  </svg>
                </button>
              </div>
              <ProfileGrid posts={posts} />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      <Header />
      {renderContent()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
