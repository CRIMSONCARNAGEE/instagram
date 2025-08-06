import React, { useState } from 'react';

// Mock data for the Instagram clone
export const mockUsers = [
  {
    id: 1,
    username: 'sarah_lifestyle',
    fullName: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    isOnline: true
  },
  {
    id: 2,
    username: 'mike_adventures',
    fullName: 'Mike Chen',
    avatar: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg',
    isOnline: false
  },
  {
    id: 3,
    username: 'yoga_emma',
    fullName: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    isOnline: true
  },
  {
    id: 4,
    username: 'coffee_lover',
    fullName: 'Alex Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    isOnline: true
  },
  {
    id: 5,
    username: 'social_vibes',
    fullName: 'Jessica Park',
    avatar: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    isOnline: false
  }
];

export const mockPosts = [
  {
    id: 1,
    user: mockUsers[0],
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    caption: 'Morning coffee vibes ☕✨ Starting the day right! #morning #coffee #lifestyle',
    likes: 234,
    comments: 18,
    timeAgo: '2h',
    isLiked: false
  },
  {
    id: 2,
    user: mockUsers[2],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    caption: 'Inner peace through meditation 🧘‍♀️ Taking time for self-care #yoga #wellness #mindfulness',
    likes: 189,
    comments: 24,
    timeAgo: '4h',
    isLiked: true
  },
  {
    id: 3,
    user: mockUsers[1],
    image: 'https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg',
    caption: 'Adventure awaits! ⛵ Beautiful day on the water #sailing #adventure #ocean',
    likes: 456,
    comments: 32,
    timeAgo: '6h',
    isLiked: false
  },
  {
    id: 4,
    user: mockUsers[4],
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxsaWZlc3R5bGV8ZW58MHx8fHwxNzU0NDk4NzMyfDA&ixlib=rb-4.1.0&q=85',
    caption: 'Good vibes with great friends! 🌟 #friendship #social #goodtimes',
    likes: 312,
    comments: 28,
    timeAgo: '8h',
    isLiked: true
  },
  {
    id: 5,
    user: mockUsers[3],
    image: 'https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg',
    caption: 'Cooking up something delicious! 👨‍🍳 #cooking #food #homemade',
    likes: 178,
    comments: 15,
    timeAgo: '12h',
    isLiked: false
  }
];

export const mockStories = [
  {
    id: 1,
    user: mockUsers[0],
    hasNewStory: true
  },
  {
    id: 2,
    user: mockUsers[1],
    hasNewStory: true
  },
  {
    id: 3,
    user: mockUsers[2],
    hasNewStory: false
  },
  {
    id: 4,
    user: mockUsers[3],
    hasNewStory: true
  },
  {
    id: 5,
    user: mockUsers[4],
    hasNewStory: false
  }
];

export const mockChats = [
  {
    id: 1,
    user: mockUsers[0],
    lastMessage: 'Hey! How was your day?',
    timeAgo: '2m',
    unreadCount: 2,
    isOnline: true
  },
  {
    id: 2,
    user: mockUsers[1],
    lastMessage: 'Check out this amazing view! 📸',
    timeAgo: '1h',
    unreadCount: 0,
    isOnline: false
  },
  {
    id: 3,
    user: mockUsers[2],
    lastMessage: 'Thanks for the yoga tips! 🙏',
    timeAgo: '3h',
    unreadCount: 1,
    isOnline: true
  },
  {
    id: 4,
    user: mockUsers[3],
    lastMessage: 'Coffee meetup tomorrow?',
    timeAgo: '5h',
    unreadCount: 0,
    isOnline: true
  },
  {
    id: 5,
    user: mockUsers[4],
    lastMessage: 'Had such a great time today!',
    timeAgo: '1d',
    unreadCount: 0,
    isOnline: false
  }
];

// Current user profile
export const currentUser = {
  id: 0,
  username: 'you',
  fullName: 'Your Name',
  avatar: 'https://images.unsplash.com/photo-1579869847557-1f67382cc158?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYXxlbnwwfHx8fDE3NTQ0OTg3MjV8MA&ixlib=rb-4.1.0&q=85',
  bio: 'Living my best life ✨ | Photography enthusiast 📸 | Coffee addict ☕',
  posts: 42,
  followers: 1234,
  following: 567,
  isPrivate: false
};

// Header Component
export const Header = () => (
  <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 bg-clip-text text-transparent">
          InstaShare
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

// Stories Component
export const Stories = () => (
  <div className="flex space-x-4 px-4 py-4 bg-white border-b border-gray-100 overflow-x-auto">
    <div className="flex flex-col items-center space-y-1 min-w-0">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400 rounded-full p-0.5">
          <div className="w-full h-full bg-white rounded-full p-0.5">
            <img
              src={currentUser.avatar}
              alt="Your story"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <span className="text-xs text-center truncate w-16">Your story</span>
    </div>
    
    {mockStories.map((story) => (
      <div key={story.id} className="flex flex-col items-center space-y-1 min-w-0">
        <div className={`w-16 h-16 rounded-full p-0.5 ${
          story.hasNewStory 
            ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-400' 
            : 'bg-gray-300'
        }`}>
          <div className="w-full h-full bg-white rounded-full p-0.5">
            <img
              src={story.user.avatar}
              alt={story.user.username}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
        <span className="text-xs text-center truncate w-16">{story.user.username}</span>
      </div>
    ))}
  </div>
);

// Post Component
export const Post = ({ post, onLike, onComment }) => (
  <div className="bg-white border-b border-gray-100">
    {/* Post Header */}
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <span className="font-semibold text-sm">{post.user.username}</span>
          <span className="text-gray-500 text-sm ml-2">{post.timeAgo}</span>
        </div>
      </div>
      <button className="p-1">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
      </button>
    </div>

    {/* Post Image */}
    <div className="aspect-square">
      <img
        src={post.image}
        alt="Post"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Post Actions */}
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => onLike(post.id)}
          className="p-1"
        >
          <svg 
            className={`w-6 h-6 ${post.isLiked ? 'text-red-500 fill-current' : 'text-black'}`} 
            fill={post.isLiked ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <button 
          onClick={() => onComment(post.id)}
          className="p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        <button className="p-1">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
      <button className="p-1">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </button>
    </div>

    {/* Post Info */}
    <div className="px-4 pb-4">
      <div className="font-semibold text-sm mb-1">{post.likes} likes</div>
      <div className="text-sm">
        <span className="font-semibold">{post.user.username}</span>
        <span className="ml-2">{post.caption}</span>
      </div>
      {post.comments > 0 && (
        <button className="text-gray-500 text-sm mt-1">
          View all {post.comments} comments
        </button>
      )}
    </div>
  </div>
);

// Chat Item Component
export const ChatItem = ({ chat }) => (
  <div className="flex items-center px-4 py-3 hover:bg-gray-50">
    <div className="relative">
      <img
        src={chat.user.avatar}
        alt={chat.user.username}
        className="w-12 h-12 rounded-full object-cover"
      />
      {chat.isOnline && (
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
      )}
    </div>
    <div className="ml-3 flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm truncate">{chat.user.username}</span>
        <span className="text-gray-500 text-xs">{chat.timeAgo}</span>
      </div>
      <div className="flex items-center justify-between mt-1">
        <span className="text-gray-600 text-sm truncate">{chat.lastMessage}</span>
        {chat.unreadCount > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            {chat.unreadCount}
          </span>
        )}
      </div>
    </div>
  </div>
);

// Profile Header Component
export const ProfileHeader = ({ user }) => (
  <div className="bg-white p-4">
    <div className="flex items-center space-x-4 mb-4">
      <img
        src={user.avatar}
        alt={user.username}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-4 mb-2">
          <h2 className="text-xl font-semibold">{user.username}</h2>
          {user.isPrivate && (
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="flex space-x-6 text-sm">
          <div className="text-center">
            <div className="font-semibold">{user.posts}</div>
            <div className="text-gray-600">posts</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">{user.followers}</div>
            <div className="text-gray-600">followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">{user.following}</div>
            <div className="text-gray-600">following</div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mb-4">
      <div className="font-semibold text-sm mb-1">{user.fullName}</div>
      <div className="text-sm">{user.bio}</div>
    </div>

    <div className="flex space-x-2">
      <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold text-sm">
        Edit Profile
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </div>
  </div>
);

// Profile Posts Grid
export const ProfileGrid = ({ posts }) => (
  <div className="grid grid-cols-3 gap-1 bg-white">
    {posts.map((post) => (
      <div key={post.id} className="aspect-square">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
);

// Bottom Navigation
export const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'search', icon: 'search', label: 'Search' },
    { id: 'add', icon: 'add', label: 'Add' },
    { id: 'chat', icon: 'chat', label: 'Chat' },
    { id: 'profile', icon: 'profile', label: 'Profile' }
  ];

  const getIcon = (iconType, isActive) => {
    const className = `w-6 h-6 ${isActive ? 'text-black' : 'text-gray-400'}`;
    
    switch (iconType) {
      case 'home':
        return (
          <svg className={className} fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'search':
        return (
          <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        );
      case 'add':
        return (
          <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        );
      case 'chat':
        return (
          <svg className={className} fill={isActive ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'profile':
        return (
          <div className={`w-6 h-6 rounded-full border-2 ${isActive ? 'border-black' : 'border-gray-400'} overflow-hidden`}>
            <img
              src={currentUser.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="flex flex-col items-center py-2 px-4 min-w-0"
          >
            {getIcon(tab.icon, activeTab === tab.id)}
          </button>
        ))}
      </div>
    </nav>
  );
};