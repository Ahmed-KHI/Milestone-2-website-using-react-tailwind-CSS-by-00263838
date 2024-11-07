import React from 'react';
import aboutBg from '../assets/images/about-bg.jpg'; // Add your image path

const About = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">About Us</h1>
        <p className="text-white text-lg">This is the about page.</p>
      </div>
    </div>
  );
};

export default About;
