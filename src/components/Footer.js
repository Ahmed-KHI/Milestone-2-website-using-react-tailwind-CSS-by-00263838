import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-500 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">
                    &copy; {new Date().getFullYear()} (00263838). All rights reserved
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="/about" className="hover:underline">About Us</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/" className="hover:underline">Home</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
