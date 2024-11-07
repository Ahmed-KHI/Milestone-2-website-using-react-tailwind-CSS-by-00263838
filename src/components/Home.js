import React from 'react';
import homeBg from '../assets/images/home-bg.jpg'; // Add your image path

const Home = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${homeBg})` }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">Welcome to Our Website</h1>
        <p className="text-white text-lg">This is the home page.</p>
      </div>
    </div>
  );
};

export default Home;
