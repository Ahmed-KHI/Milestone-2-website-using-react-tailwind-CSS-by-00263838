import React from 'react';
import contactBg from '../assets/images/contact-bg.jpg'; // Add your image path

const Contact = () => {
  return (
    <div 
      className="w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl">Contact Us</h1>
        <p className="text-white text-lg">This is the contact page.</p>
      </div>
    </div>
  );
};

export default Contact;
