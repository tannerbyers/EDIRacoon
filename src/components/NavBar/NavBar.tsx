// src/components/NavBar/NavBar.tsx
import React from 'react';

import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <span className="text-orange-500">EDI</span> Raccoon
        </Link>
        <div>
          <Link to="/" className="text-gray-200 hover:text-white px-4">
            Home
          </Link>
          <Link to="/pricing" className="text-gray-200 hover:text-white px-4">
            Pricing
          </Link>
          <Link
            to="/contact-us"
            className="text-gray-200 hover:text-white px-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
