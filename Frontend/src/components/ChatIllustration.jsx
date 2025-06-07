import React from 'react';
import { MessageCircle, Users, Zap, Shield } from 'lucide-react';

const ChatIllustration = () => {
  return (
    <div className="relative h-full flex flex-col justify-center items-center text-white p-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-blue-600/90 z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-md">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Connect & Chat
          </h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Join millions of users in seamless conversations. Share moments, build communities, and stay connected.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex-shrink-0">
              <Users className="w-6 h-6 text-white"/>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Group Chats</h3>
              <p className="text-sm text-white/80">Create groups with up to 1000 members</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Instant Messaging</h3>
              <p className="text-sm text-white/80">Lightning-fast message delivery</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Secure & Private</h3>
              <p className="text-sm text-white/80">End-to-end encrypted conversations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chat bubbles animation */}
      <div className="absolute inset-0 overflow-hidden z-15">
        <div className="absolute top-20 left-10 w-16 h-10 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-16 w-12 h-8 bg-white/15 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-14 h-9 bg-white/25 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-8 w-10 h-6 bg-white/20 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default ChatIllustration;