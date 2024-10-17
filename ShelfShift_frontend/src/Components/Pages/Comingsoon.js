import React from 'react';

const ComingSoon = () => {
  return (
    <div
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Futuristic+Background')`, // Add your futuristic image link
      }}
    >
      {/* Overlay for transparency */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Large Coming Soon Text */}
        <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-widest">
          Coming Soon
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg md:text-2xl max-w-2xl mx-auto">
          We're working hard on something amazing. Stay tuned for an exciting launch!
        </p>

        {/* Optional Button or CTA */}
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-semibold hover:from-purple-700 hover:to-blue-600 transition-all">
          Notify Me
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
